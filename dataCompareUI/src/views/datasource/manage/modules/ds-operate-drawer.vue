<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { addDatasource, testDatasource, updateDatasource } from '@/service/api';
import { $t } from '@/locales';
import { datasourceOptions } from '@/constants/business';

defineOptions({
  name: 'DsOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.DatasourceManage.Datasource | null;
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
    add: $t('page.datasource.manage.addDatasource'),
    edit: $t('page.datasource.manage.editDatasource')
  };
  return titles[props.operateType];
});

type Model = Pick<
  Api.DatasourceManage.Datasource,
  'id' | 'datasource' | 'datasourceName' | 'jdbcUsername' | 'jdbcPassword' | 'jdbcUrl' | 'jdbcDriverClass' | 'comments'
>;

const model = ref(createDefaultModel());

function createDefaultModel(): Model {
  return {
    id: 0,
    datasource: null,
    datasourceName: '',
    jdbcUsername: '',
    jdbcPassword: '',
    jdbcUrl: '',
    jdbcDriverClass: '',
    comments: ''
  };
}

type RuleKey = Extract<
  keyof Model,
  'datasource' | 'datasourceName' | 'jdbcUsername' | 'jdbcPassword' | 'jdbcUrl' | 'jdbcDriverClass'
>;

// const rules: Record<RuleKey, App.Global.FormRule> = {
//   datasource: defaultRequiredRule,
//   datasourceName: defaultRequiredRule,
//   jdbcUsername: defaultRequiredRule,
//   jdbcPassword: defaultRequiredRule,
//   jdbcUrl: defaultRequiredRule,
//   jdbcDriverClass: defaultRequiredRule
// };

// 定义不能包含空格的验证规则函数
const noSpaceRule: App.Global.FormRule = {
  validator: (_, value) => {
    if (value && typeof value === 'string' && value.includes(' ')) {
      return Promise.reject($t('common.inputCannotContainSpace'));
    }
    return Promise.resolve();
  },
  trigger: ['blur', 'change'] // 确保在输入变化和失去焦点时都触发验证
};

// 修改规则定义，使用数组形式组合多个验证规则
const rules: Record<RuleKey, App.Global.FormRule[]> = {
  datasource: [defaultRequiredRule, noSpaceRule],
  datasourceName: [defaultRequiredRule, noSpaceRule],
  jdbcUsername: [defaultRequiredRule, noSpaceRule],
  jdbcPassword: [defaultRequiredRule, noSpaceRule],
  jdbcUrl: [defaultRequiredRule, noSpaceRule],
  jdbcDriverClass: [defaultRequiredRule, noSpaceRule]
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
    const { error } = await addDatasource(model.value);
    if (error) {
      return;
    }
    window.$message?.success($t('common.addSuccess'));
  } else {
    const { error } = await updateDatasource(model.value);
    if (error) {
      return;
    }
    window.$message?.success($t('common.updateSuccess'));
  }
  closeDrawer();
  emit('submitted');
}

async function handleTestDatasource() {
  await validate();
  const { error } = await testDatasource(model.value);
  if (error) {
    return;
  }
  window.$message?.success($t('common.testSuccess'));
}

function handleUpdateDbValue(datasource: string) {
  // console.log(`value: ${JSON.stringify(datasource)}`);
  if (datasource === 'mysql') {
    model.value.jdbcUrl = 'jdbc:mysql://{host}:{port}/{database}?useSSL=false';
    model.value.jdbcDriverClass = 'com.mysql.jdbc.Driver';
  } else if (datasource === 'oracle') {
    model.value.jdbcUrl = 'jdbc:oracle:thin:@//{host}:{port}/{database}';
    model.value.jdbcDriverClass = 'oracle.jdbc.OracleDriver';
  } else if (datasource === 'postgresql') {
    model.value.jdbcUrl = 'jdbc:postgresql://{host}:{port}/{database}';
    model.value.jdbcDriverClass = 'org.postgresql.Driver';
  } else if (datasource === 'sqlserver') {
    model.value.jdbcUrl = 'jdbc:sqlserver://{host}:{port};DatabaseName={database}';
    model.value.jdbcDriverClass = 'com.microsoft.sqlserver.jdbc.SQLServerDriver';
  } else if (datasource === 'db2') {
    model.value.jdbcUrl = 'jdbc:db2://{host}[:{port}]/{database}';
    model.value.jdbcDriverClass = 'com.ibm.db2.jcc.DB2Driver';
  } else if (datasource === 'hive') {
    model.value.jdbcUrl = 'jdbc:hive2://{host}:{port}/{database}';
    model.value.jdbcDriverClass = 'org.apache.hive.jdbc.HiveDriver';
  } else if (datasource === 'dm') {
    model.value.jdbcUrl = 'jdbc:dm://{host}:{port}/{database}';
    model.value.jdbcDriverClass = 'dm.jdbc.driver.DmDriver';
  } else if (datasource === 'halo') {
    model.value.jdbcUrl = 'jdbc:halo://{host}:{port}/{database}';
    model.value.jdbcDriverClass = 'com.halo.Driver';
  }
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
        <NFormItem :label="$t('page.datasource.manage.datasource')" path="datasource">
          <ImageSelect
            v-model:model-value="model.datasource"
            :options="datasourceOptions"
            :placeholder-value="$t('page.datasource.manage.form.datasource')"
            @update:value="handleUpdateDbValue"
          />
        </NFormItem>
        <NFormItem :label="$t('page.datasource.manage.datasourceName')" path="datasourceName">
          <NInput
            v-model:value="model.datasourceName"
            :placeholder="$t('page.datasource.manage.form.datasourceName')"
          />
        </NFormItem>
        <NFormItem :label="$t('page.datasource.manage.jdbcUsername')" path="jdbcUsername">
          <NInput v-model:value="model.jdbcUsername" :placeholder="$t('page.datasource.manage.form.jdbcUsername')" />
        </NFormItem>
        <NFormItem :label="$t('page.datasource.manage.jdbcPassword')" path="jdbcPassword">
          <NInput
            v-model:value="model.jdbcPassword"
            type="password"
            show-password-on="click"
            :placeholder="$t('page.datasource.manage.form.jdbcPassword')"
          />
        </NFormItem>
        <NFormItem :label="$t('page.datasource.manage.jdbcUrl')" path="jdbcUrl">
          <NInput
            v-model:value="model.jdbcUrl"
            type="textarea"
            :placeholder="$t('page.datasource.manage.form.jdbcUrl')"
          />
        </NFormItem>
        <NFormItem :label="$t('page.datasource.manage.form.jdbcDriverClass')" path="jdbcDriverClass">
          <NInput
            v-model:value="model.jdbcDriverClass"
            :placeholder="$t('page.datasource.manage.form.jdbcDriverClass')"
          />
        </NFormItem>
        <NFormItem :label="$t('page.datasource.manage.form.comments')" path="comments">
          <NInput
            v-model:value="model.comments"
            type="textarea"
            :placeholder="$t('page.datasource.manage.form.comments')"
          />
        </NFormItem>
      </NForm>
      <template #footer>
        <NSpace :size="16">
          <div class="newFooter">
            <NButton type="primary" @click="handleTestDatasource">{{ $t('common.testConnection') }}</NButton>
          </div>
          <NButton @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped>
.newFooter {
  position: absolute;
  left: 4%;
}
</style>
