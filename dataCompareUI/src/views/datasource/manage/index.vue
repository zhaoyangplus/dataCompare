<script setup lang="tsx">
import { NButton, NPopconfirm } from 'naive-ui';
import { deleteDatasource, fetchGetDatasourceList } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { datasourceOptions } from '@/constants/business';
import DsOperateDrawer from './modules/ds-operate-drawer.vue';
import DsSearch from './modules/ds-search.vue';

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
  apiFn: fetchGetDatasourceList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    datasource: null,
    datasourceName: null
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
      key: 'datasource',
      title: $t('page.datasource.manage.datasource'),
      align: 'center',
      minWidth: 100,
      render: row => {
        const obj = datasourceOptions.find(item => item.value === row.datasource);
        return (
          <div class="flex-center">
            <div style={{ display: 'flex' }}>
              <img src={obj?.imageUrl} width="25" alt="DB" />
              {/* 此处span定义宽度是为了让整列进行对齐 */}
              <span style={{ width: '80px', marginLeft: '5px' }}>{obj?.label}</span>
            </div>
          </div>
        );
      }
    },
    // {
    //   key: 'datasource',
    //   title: $t('page.datasource.manage.datasource'),
    //   align: 'center',
    //   minWidth: 100
    // },
    {
      key: 'datasourceName',
      title: $t('page.datasource.manage.datasourceName'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'jdbcUrl',
      title: $t('page.datasource.manage.jdbcUrl'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'comments',
      title: $t('page.datasource.manage.comments'),
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
          <NButton type="primary" ghost size="small" onClick={() => edit(row.id)}>
            {$t('common.edit')}
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDelete(row.id)}>
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
  handleEdit,
  checkedRowKeys,
  onBatchDeleted,
  onDeleted
  // closeDrawer
} = useTableOperate(data, getData);

async function handleBatchDelete() {
  // request
  // console.log(checkedRowKeys.value);

  onBatchDeleted();
}

async function handleDelete(id: number) {
  const { error } = await deleteDatasource(id);
  if (error) {
    return;
  }
  onDeleted();
}

function edit(id: number) {
  handleEdit(id);
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <DsSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <NCard
      :title="$t('page.datasource.manage.title')"
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
        :row-key="row => row.id"
        :pagination="mobilePagination"
        class="sm:h-full"
      />
      <DsOperateDrawer
        v-model:visible="drawerVisible"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getDataByPage"
      />
    </NCard>
  </div>
</template>

<style scoped></style>
