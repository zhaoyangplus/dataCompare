<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import { NButton, NPopconfirm } from 'naive-ui';
import { useRouter } from 'vue-router';
import { deleteVerify, fetchGetContrastList, fetchGetDatasourceList } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import VerifyDataSearch from './modules/verify-data-search.vue';
import VerifyDataOperateDrawer from './modules/verify-data-operate-drawer.vue';
import { format } from 'date-fns';

const appStore = useAppStore();
const router = useRouter();

// 定义一个 ref 用于存储数据源 ID 到名称的映射
const datasourceMap = ref<Record<number, string>>({});

// 在组件挂载时获取数据源列表并构建映射
onMounted(async () => {
  const { data: datasourceList } = await fetchGetDatasourceList({ current: 1, size: 200 });
  if (datasourceList) {
    datasourceMap.value = Object.fromEntries(datasourceList.records.map(ds => [ds.id, ds.datasourceName]));
  } else {
    console.error('datasourceList is null');
  }
});

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
  apiFn: fetchGetContrastList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    metaType: 1
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
      key: 'taskName',
      title: $t('page.contrast.taskName'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'readerDatasource',
      title: $t('page.contrast.readerDatasource'),
      align: 'center',
      minWidth: 100,
      // 使用 render 函数显示数据源名称
      render: row => {
        if (row.readerDatasourceId !== null) {
          return datasourceMap.value[row.readerDatasourceId] || 'Unknown';
        }
        return 'readerDatasourceId undefined';
      }
    },
    {
      key: 'readerSchema',
      title: $t('page.contrast.readerSchema'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'writerDatasource',
      title: $t('page.contrast.writerDatasource'),
      align: 'center',
      minWidth: 100,
      // 使用 render 函数显示数据源名称
      render: row => {
        if (row.writerDatasourceId !== null) {
          return datasourceMap.value[row.writerDatasourceId] || 'Unknown';
        }
        return 'writerDatasourceId undefined';
      }
    },
    {
      key: 'writerSchema',
      title: $t('page.contrast.writerSchema'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'createTime',
      title: $t('page.contrast.createTime'),
      align: 'center',
      minWidth: 100,
      // 在 render 方法中
      render: row => {
        const formattedDate = format(new Date(row.createTime), 'yyyy-MM-dd HH:mm:ss');
        return <span>{formattedDate}</span>;
      }
    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 150,
      render: row => (
        <div class="flex-center gap-8px">
          <NButton type="primary" ghost size="small" onClick={() => details(row.pid)}>
            {$t('common.details')}
          </NButton>
          <NPopconfirm onPositiveClick={() => handleDelete(row.pid)}>
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

// const { handleAdd, checkedRowKeys, onBatchDeleted, onDeleted } = useTableOperate(data, getData);
const { drawerVisible, operateType, editingData, handleAdd, checkedRowKeys, onBatchDeleted, onDeleted } =
  useTableOperate(data, getData);

async function handleBatchDelete() {
  console.log(checkedRowKeys.value);
  onBatchDeleted();
}

async function handleDelete(pid: number) {
  const { error } = await deleteVerify(pid);
  if (error) {
    return;
  }
  onDeleted();
}

/** 详情 */
function details(pid: number): void {
  router.push({
    path: '/contrast/verifydetails',
    query: { pid } // query参数必须是字符串
  });
  console.log(pid);
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <VerifyDataSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <NCard
      :title="$t('page.contrast.verifyDetails.title')"
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
        :row-key="row => row.pid"
        :pagination="mobilePagination"
        class="sm:h-full"
      />
    </NCard>
    <VerifyDataOperateDrawer
      v-model:visible="drawerVisible"
      :operate-type="operateType"
      :row-data="editingData"
      @submitted="getDataByPage"
    />
  </div>
</template>

<style scoped></style>
