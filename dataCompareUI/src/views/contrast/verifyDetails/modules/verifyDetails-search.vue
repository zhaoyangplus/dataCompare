<script setup lang="ts">
import { $t } from '@/locales';
import { useNaiveForm } from '@/hooks/common/form';

defineOptions({
  name: 'VerifyDetailsSearch'
});

interface Emits {
  (e: 'reset'): void;
  (e: 'search'): void;
}

const emit = defineEmits<Emits>();

const { formRef, validate, restoreValidation } = useNaiveForm();

const model = defineModel<Api.VerifyDetailsManage.VerifyDetailsSearchParams>('model', { required: true });

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
    <NCollapse default-expanded-names="verify-search">
      <NCollapseItem :title="$t('common.search')" name="verify-search">
        <NForm ref="formRef" :model="model" label-placement="left" :label-width="100">
          <NGrid responsive="screen" item-responsive>
            <NFormItemGi
              span="24 s:12 m:6"
              :label="$t('page.contrast.verifyDetails.tableName')"
              path="tableName"
              class="pr-24px"
            >
              <NInput v-model:value="model.tableName" :placeholder="$t('page.contrast.verifyDetails.tableName')" />
            </NFormItemGi>
            <NFormItemGi
              span="24 s:12 m:6"
              :label="$t('page.contrast.verifyDetails.status')"
              path="status"
              class="pr-24px"
            >
              <NSelect
                v-model:value="model.status"
                :options="[
                  { label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.all'), value: 'all' },
                  { label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.outOfSync'), value: 'out-of-sync' },
                  { label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.inSync'), value: 'in-sync' },
                  { label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.running'), value: 'running' },
                  { label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.skipped'), value: 'skipped' },
                  { label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.failed'), value: 'failed' }
                ]"
                :placeholder="$t('page.contrast.verifyDetails.isStatusVerifyRecord.selectStatus')"
                clearable
              />
            </NFormItemGi>
            <NFormItemGi span="24 s:12 m:6" class="pr-24px"></NFormItemGi>
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
