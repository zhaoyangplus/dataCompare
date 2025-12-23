<script setup lang="ts">
import { $t } from '@/locales';
import { useNaiveForm } from '@/hooks/common/form';
import { datasourceOptions } from '@/constants/business';

defineOptions({
  name: 'DsSearch'
});

interface Emits {
  (e: 'reset'): void;
  (e: 'search'): void;
}

const emit = defineEmits<Emits>();

const { formRef, validate, restoreValidation } = useNaiveForm();

const model = defineModel<Api.DatasourceManage.DatasourceSearchParams>('model', { required: true });

async function reset() {
  await restoreValidation();
  emit('reset');
}

async function search() {
  await validate();
  emit('search');
}
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <NCollapse default-expanded-names="ds-search">
      <NCollapseItem :title="$t('common.search')" name="ds-search">
        <NForm ref="formRef" :model="model" label-placement="left" :label-width="100">
          <NGrid responsive="screen" item-responsive>
            <NFormItemGi
              span="24 s:12 m:6"
              :label="$t('page.datasource.manage.datasourceName')"
              path="datasourceName"
              class="pr-24px"
            >
              <NInput
                v-model:value="model.datasourceName"
                :placeholder="$t('page.datasource.manage.form.datasourceName')"
              />
            </NFormItemGi>
            <NFormItemGi
              span="24 s:12 m:6"
              :label="$t('page.datasource.manage.datasource')"
              path="userGender"
              class="pr-24px"
            >
              <ImageSelect
                v-model:model-value="model.datasource"
                :options="datasourceOptions"
                :placeholder-value="$t('page.datasource.manage.form.datasource')"
              />
            </NFormItemGi>
            <NFormItemGi span="24 m:12 m:6" class="pr-24px"></NFormItemGi>
            <NFormItemGi span="24 s:12 m:6" class="pr-24px">
              <NSpace class="w-full" justify="end">
                <NButton @click="reset">
                  <template #icon>
                    <icon-ic-round-refresh class="text-icon" />
                  </template>
                  {{ $t('common.reset') }}
                </NButton>
                <NButton type="primary" ghost @click="search">
                  <template #icon>
                    <icon-ic-round-search class="text-icon" />
                  </template>
                  {{ $t('common.search') }}
                </NButton>
              </NSpace>
            </NFormItemGi>
          </NGrid>
        </NForm>
      </NCollapseItem>
    </NCollapse>
  </NCard>
</template>

<style scoped></style>
