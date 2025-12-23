<script setup lang="tsx">
import { NButton, NPopconfirm } from 'naive-ui';
import { deleteVerifyConfig, fetchGetVerifyConfigList } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import VerifyConfigSearch from './modules/verify-config-search.vue';
import VerifyConfigOperateDrawer from './modules/verify-config-operate-drawer.vue';

const appStore = useAppStore();

const {
  columns,
  columnChecks,
  data,
  getData,
  getDataByPage,
  loading,
  mobilePagination,
  searchParams,
  resetSearchParams
} = useTable({
  apiFn: fetchGetVerifyConfigList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    configKey: null
  },
  columns: () => [
    {
      type: 'selection',
      align: 'center',
      width: 48
    },
    {
      key: 'index',
      title: $t('common.index'),
      align: 'center',
      width: 64
    },
    {
      key: 'configKey',
      title: $t('page.contrast.verifyConfig.configKey'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'configValue',
      title: $t('page.contrast.verifyConfig.configValue'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'configType',
      title: $t('page.contrast.verifyConfig.configType'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 130,
      render: row => (
        <div class="flex-center gap-8px">
          <NButton type="primary" ghost size="small" onClick={() => edit(row.configId)}>
            {$t('common.edit')}
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDelete(row.configId)}>
            {{
              default: () => $t('common.confirmDelete'),
              trigger: () => (
                <NButton type="error" ghost size="small">
                  {$t('common.delete')}
                </NButton>
              )
            }}
          </NPopconfirm>
        </div>
      )
    }
  ]
});

const {
  drawerVisible,
  operateType,
  editingData,
  handleAdd,
  // handleEdit,
  checkedRowKeys,
  onBatchDeleted,
  onDeleted
  // closeDrawer
} = useTableOperate(data, getData);

async function handleBatchDelete() {
  // request
  console.log(checkedRowKeys.value);

  onBatchDeleted();
}

async function handleDelete(configId: number) {
  const { error } = await deleteVerifyConfig(configId);
  if (error) {
    return;
  }
  onDeleted();
}

function edit(configId: number) {
  console.log(configId);
  const row = data.value.find(item => item.configId === configId);
  if (row) {
    editingData.value = { ...row }; // 确保复制对象而不是引用
  }
  operateType.value = 'edit';
  drawerVisible.value = true;
  // 因为handleEdit中editingData默认用的id,这里是configId所以直接使用editingData获取对象
  // handleEdit(configId);
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <VerifyConfigSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <NCard
      :title="$t('page.contrast.verifyConfig.title')"
      :bordered="false"
      size="small"
      class="sm:flex-1-hidden card-wrapper"
    >
      <template #header-extra>
        <TableHeaderOperation
          v-model:columns="columnChecks"
          :disabled-delete="checkedRowKeys.length === 0"
          :loading="loading"
          @add="handleAdd"
          @delete="handleBatchDelete"
          @refresh="getData"
        />
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        :flex-height="!appStore.isMobile"
        :scroll-x="962"
        :loading="loading"
        remote
        :row-key="row => row.configId"
        :pagination="mobilePagination"
        class="sm:h-full"
      />
    </NCard>
    <VerifyConfigOperateDrawer
      v-model:visible="drawerVisible"
      :operate-type="operateType"
      :row-data="editingData"
      @submitted="getDataByPage"
    />
  </div>
</template>

<style scoped></style>
