<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { addVerifyConfig, updateVerifyConfig } from '@/service/api';
import { $t } from '@/locales';

defineOptions({
  name: 'VerifyConfigOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.VerifyConfigManage.verifyConfig | null;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'submitted'): void;
}

const emit = defineEmits<Emits>();

const visible = defineModel<boolean>('visible', {
  default: false
});

const { formRef, validate, restoreValidation } = useNaiveForm();
const { defaultRequiredRule } = useFormRules();

const title = computed(() => {
  const titles: Record<NaiveUI.TableOperateType, string> = {
    add: $t('page.contrast.verifyConfig.addConfig'),
    edit: $t('page.contrast.verifyConfig.editConfig')
  };
  return titles[props.operateType];
});

type Model = Pick<Api.VerifyConfigManage.verifyConfig, 'configId' | 'configKey' | 'configValue' | 'configType'>;

const model = ref(createDefaultModel());

function createDefaultModel(): Model {
  return {
    configId: null,
    configKey: '',
    configValue: '',
    configType: ''
  };
}

type RuleKey = Extract<keyof Model, 'configKey' | 'configType'>;

const rules: Record<RuleKey, App.Global.FormRule> = {
  configKey: defaultRequiredRule,
  configType: defaultRequiredRule
};

function handleInitModel() {
  model.value = createDefaultModel();

  if (props.operateType === 'edit' && props.rowData) {
    Object.assign(model.value, props.rowData);
  }
}

function closeDrawer() {
  visible.value = false;
}

async function handleSubmit() {
  await validate();
  if (props.operateType === 'add') {
    const { error } = await addVerifyConfig(model.value);
    if (error) {
      return;
    }
    window.$message?.success($t('common.addSuccess'));
  } else {
    const { error } = await updateVerifyConfig(model.value);
    if (error) {
      return;
    }
    window.$message?.success($t('common.updateSuccess'));
  }
  closeDrawer();
  emit('submitted');
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel();
    restoreValidation();
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="600">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model" :rules="rules">
        <NFormItem :label="$t('page.contrast.verifyConfig.configKey')" path="configKey">
          <NInput v-model:value="model.configKey" :placeholder="$t('page.contrast.verifyConfig.form.configKey')" />
        </NFormItem>
        <NFormItem :label="$t('page.contrast.verifyConfig.configValue')" path="configValue">
          <NInput v-model:value="model.configValue" :placeholder="$t('page.contrast.verifyConfig.form.configValue')" />
        </NFormItem>
        <NFormItem :label="$t('page.contrast.verifyConfig.configType')" path="configType">
          <NInput v-model:value="model.configType" :placeholder="$t('page.contrast.verifyConfig.form.configType')" />
        </NFormItem>
      </NForm>
      <template #footer>
        <NSpace :size="16">
          <NButton @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped lang="less"></style>
