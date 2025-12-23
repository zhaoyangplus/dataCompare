<script setup lang="tsx">
import { useRoute } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';
import { NAlert, NButton, NCard, NDataTable, NDrawer, NDrawerContent, NPagination, NPopconfirm, NSpin, NTag, NText, NTooltip } from 'naive-ui';
import { compareLogDetail, fetchGetVerifyDetailsList, getVerifyDetails } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import VerifyDetailsSearch from './modules/verifyDetails-search.vue';

const appStore = useAppStore();
const route = useRoute();

// 定义 pid number 或 null
const pid = ref<number | null>(route.query.pid ? Number(route.query.pid) : null);
const showTaskIdWarning = ref(!route.query.pid);

const { columns, data, getData, getDataByPage, loading, mobilePagination, searchParams, resetSearchParams } = useTable({
  apiFn: fetchGetVerifyDetailsList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    pid: pid.value ?? 0,
    tableName: null,
    status: null
  },
  columns: () => [
    {
      key: 'index',
      title: $t('common.index'),
      align: 'center',
      width: 64
    },
    {
      key: 'tableNames',
      title: $t('page.contrast.verifyDetails.tableNames'),
      align: 'center',
      width: 150,
      render: row => (
        <div class="flex flex-col">
          <NText strong>
            {$t('page.contrast.verifyDetails.sourceTableName')}: {row.sourceTableName}
          </NText>
          <NText strong>
            {$t('page.contrast.verifyDetails.targetTableName')}: {row.targetTableName}
          </NText>
        </div>
      )
    },
    {
      key: 'counts',
      title: $t('page.contrast.verifyDetails.counts'),
      align: 'center',
      width: 150,
      render: row => (
        <div class="flex flex-col">
          <NText>
            {$t('page.contrast.verifyDetails.sourceCount')}: {row.sourceCnt}
          </NText>
          <NText>
            {$t('page.contrast.verifyDetails.targetCount')}: {row.targetCnt}
          </NText>
        </div>
      )
    },
    {
      key: 'stats',
      title: $t('page.contrast.verifyDetails.stats'),
      align: 'center',
      width: 480,
      render: row => (
        <div class="flex flex-wrap justify-center gap-2">
          <NTag type="success">{`${$t('page.contrast.verifyDetails.equalCount')}: ${row.equalCnt}`}</NTag>
          <NTag type="error">{`${$t('page.contrast.verifyDetails.notEqualCount')}: ${row.notEqualCnt}`}</NTag>
          <NTag type="warning">{`${$t('page.contrast.verifyDetails.missingSourceCount')}: ${row.missingSourceCnt}`}</NTag>
          <NTag type="info">{`${$t('page.contrast.verifyDetails.missingTargetCount')}: ${row.missingTargetCnt}`}</NTag>
        </div>
      )
    },
    {
      key: 'durationStr',
      title: $t('page.contrast.verifyDetails.durationStr'),
      align: 'center',
      width: 100
    },
    {
      key: 'status',
      title: $t('page.contrast.verifyDetails.status'),
      align: 'center',
      width: 100,
      render: row => {
        const isStatusVerifyList = [
          {
            value: 'out-of-sync',
            label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.outOfSync'),
            type: 'warning'
          },
          { value: 'in-sync', label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.inSync'), type: 'success' },
          { value: 'running', label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.running'), type: 'primary' },
          { value: 'skipped', label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.skipped'), type: 'tertiary' },
          { value: 'failed', label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.failed'), type: 'error' }
        ];
        const found = isStatusVerifyList.find(item => item.value === row.status);
        return (
          <n-button quaternary type={found?.type}>
            {found?.label}
          </n-button>
        );
      }
    },
    {
      key: 'operate',
      title: $t('common.action'),
      align: 'center',
      fixed: 'right',
      width: 180,
      render: row => (
        <div>
          <NButton size="small" type="primary" onClick={() => handleDetails(row.tid)}>
            {$t('page.contrast.verifyDetails.variationButton')}
          </NButton>
          {/* 条件渲染：仅当 resultMessage 存在时显示 反馈 按钮 */}
          {row.resultMessage &&
            <NPopconfirm>
              {{
                trigger: () => (
                  <NButton size="small" type="warning" style={{ marginLeft: '5px' }}>
                    反馈
                  </NButton>
                ),
                default: () => row.resultMessage
              }}
            </NPopconfirm>
          }
        </div>
      )
    }
  ]
});

const pagination = ref({
  page: 1,
  pageSize: 10,
  itemCount: 0,
  showSizePicker: true,
  pageSizes: [5, 10, 20, 50]
});

const currentTid = ref<number | null>(null);
const drawerVisible = ref(false);
const detailData = ref<Api.VerifyDetailsListManage.verifyDetailsList[]>([]);
const loadingDetails = ref(false);
const detailTotal = ref<number | null>(null);

async function handleDetails(tid: number, page?: number, pageSize?: number) {
  try {
    // 查找对应的行数据
    const row = data.value.find(r => r.tid === tid);
    if (!row) return;

    currentTid.value = tid;
    loadingDetails.value = true;

    const currentPage = page ?? pagination.value.page;
    const currentSize = pageSize ?? pagination.value.pageSize;

    const { data: verifyDetailsResponse } = await getVerifyDetails({
      tid,
      current: currentPage,
      size: currentSize
    });

    if (verifyDetailsResponse?.records) {
      // 处理数据并添加源表目标表信息
      detailTotal.value = verifyDetailsResponse.total;
      detailData.value = verifyDetailsResponse.records.map(item => {
        // 解析主键
        const pk = JSON.parse(item.pk);

        // 解析对比结果
        let parsedDetails;
        try {
          parsedDetails = JSON.parse(item.resultDetails);
        } catch {
          parsedDetails = item.resultDetails;
        }

        // 转换对比结果格式
        const resultDetails: Record<string, any> = {};
        if (Array.isArray(parsedDetails)) {
          parsedDetails.forEach(detail => {
            if (typeof detail === 'string') {
              resultDetails[detail] = detail;
            } else if (typeof detail === 'object') {
              const field = Object.keys(detail)[0];
              resultDetails[field] = detail[field];
            }
          });
        }

        return {
          ...item,
          pk,
          resultDetails,
          sourceTableName: row.sourceTableName,
          targetTableName: row.targetTableName
        };
      });

      // 更新分页信息
      pagination.value = {
        ...pagination.value,
        page: verifyDetailsResponse.current,
        pageSize: verifyDetailsResponse.size,
        itemCount: verifyDetailsResponse.total
      };
    }
    drawerVisible.value = true;
  } catch (e) {
    console.error(e);
  } finally {
    loadingDetails.value = false;
  }
}

const handlePageChange = (newPage: number) => {
  if (currentTid.value) {
    handleDetails(currentTid.value, newPage, pagination.value.pageSize);
  }
};

const handlePageSizeChange = (newPageSize: number) => {
  pagination.value.page = 1;
  if (currentTid.value) {
    handleDetails(currentTid.value, 1, newPageSize);
  }
};

// 在原有代码中添加以下computed属性
const fields = ref<string[]>([]); // 改为有序数组，存储字段名
const getTableColumns = computed(() => {
  const stringFields: string[] = []; // 存值为string的字段（要固定在前两列）
  const otherFields: string[] = []; // 存其他类型的字段


  detailData.value.forEach(item => {
    const resultDetails = item.resultDetails || {};
    Object.entries(resultDetails).forEach(([field, value]) => {
      // 区分字段类型，分别存入对应数组（避免重复）
      if (typeof value === 'string') {
        // 字符串字段：仅存未重复的，且限制最多2个（确保前两列）
        if (!stringFields.includes(field) && stringFields.length < 2) {
          stringFields.push(field);
        }
      } else {
        // 其他字段：仅存未在两个数组中出现过的
        if (!stringFields.includes(field) && !otherFields.includes(field)) {
          otherFields.push(field);
        }
      }
    });
  });

  // 2. 组合字段顺序：字符串字段（前2个）→ 其他字段（剩余）
  fields.value = [...stringFields, ...otherFields];

  const tableColumns: any[] = [
    {
      title: $t('common.index'),
      key: 'index',
      align: 'center' as const,
      width: 64,
      fixed: 'left',
      render: (_row: any, index: any) => {
        const currentPage = pagination.value.page;
        const pageSize = pagination.value.pageSize;
        return <NText>{(currentPage - 1) * pageSize + index + 1}</NText>;
      }
    },
    {
      title: $t('page.contrast.verifyDetails.sourceAndTarget'),
      key: 'sourceTarget',
      align: 'center' as const,
      width: 200,
      fixed: 'left',
      render: (row: any) => <NText strong>{`${row.sourceTableName} → ${row.targetTableName}`}</NText>
    },
    {
      title: $t('page.contrast.verifyDetails.pk'),
      key: 'pk',
      align: 'left' as const,
      width: 96,
      fixed: 'left',
      render: (row: any) => (
        <div class="flex flex-wrap gap-2">
          {Object.entries(row.pk).map(([key, value]) => (
            <NTag type="info" key={key}>{`${key}: ${value}`}</NTag>
          ))}
        </div>
      )
    }
  ];

fields.value.forEach(field => {
  tableColumns.push({
    title: field as any,
    key: field as any,
    align: 'center' as const,
    minWidth: 120,
    maxWidth: 300,
    render: (row: any) => {
      const detail = row.resultDetails?.[field as any];
      if (!detail) {
        return <NText type="info">{$t('page.contrast.verifyDetails.null')}</NText>;
      }
      // 字符串类型详情（错误提示）
      if (typeof detail === 'string') {
        return (
          <NTooltip
            placement="top"
            trigger="hover"
            maxWidth={400}
            v-slots={{
              trigger: () => (
                detail.length > 30 ? (
                  <NAlert
                    type="error"
                    title={detail.slice(0, 30) + '...'}
                    style={{ fontSize: '12px', padding: '4px 8px' }} // 缩小尺寸
                  />
                ) : (
                  <NAlert
                    type="error"
                    title={detail}
                    style={{ fontSize: '12px', padding: '4px 8px' }} // 缩小尺寸
                  />
                )
              ),
              default: () => (
                <div style={{ whiteSpace: 'normal', padding: '8px 12px' }}>
                  {detail}
                </div>
              )
            }}
          />
        );
      }

      // 对象类型详情（source/target 对比）
      return (
        <NTooltip
          placement="top"
          trigger="hover"
          maxWidth={400}
          v-slots={{
            trigger: () => (
              <div class="flex flex-col gap-1" style={{ maxHeight: '80px', overflowY: 'auto' }}>
                {Object.entries(detail).map(([key, val]) => {
                  let type: 'success' | 'warning' | 'info' = 'info';
                  if (key === 'source') type = 'success';
                  if (key === 'target') type = 'warning';
                  return <NTag type={type} key={key} size="small">{`${key}: ${val}`}</NTag>;
                })}
              </div>
            ),
            default: () => (
              <div style={{ whiteSpace: 'normal', padding: '8px 12px' }}>
                {Object.entries(detail).map(([key, val]) => (
                  <div key={key} style={{ marginBottom: '4px' }}>
                    <span style={{ fontWeight: 500 }}>{key}：</span>
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            )
          }}
        />
      );
    }
  });
});

  return tableColumns;
});

// 新增计算滚动宽度的函数
const getScrollWidth = computed(() => {
  // 基础列数（固定列）
  const baseColumns = 3;
  // 动态列数
  const dynamicColumns = Array.from(fields.value).length;
  // 每列平均宽度（根据实际列宽调整）
  const avgColumnWidth = 200;
  return baseColumns * 120 + dynamicColumns * avgColumnWidth;
});

// 日志相关状态
const logDrawerVisible = ref(false);
const logData = ref<string>('');
const logPath = ref<string>('');

const handleQueryLog = async () => {
  if (pid.value === null) {
    showTaskIdWarning.value = true;
    return;
  }

  try {
    loading.value = true;
    const { data: response } = await compareLogDetail(pid.value);
    // 根据实际接口返回结构调整（示例）
    if (response?.success) {
      logData.value = response.logContent;
      logPath.value = response.resourcePath || '';
      logDrawerVisible.value = true;
    } else {
      window.$message?.error('获取日志失败');
    }
  } catch (error) {
    console.error('日志查询失败:', error);
    window.$message?.error('日志查询失败');
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  if (pid.value !== null) {
    getData();
  }
});

watch(
  () => route.query.pid,
  newPid => {
    const newValue = newPid ? Number(newPid) : null;
    pid.value = newValue;
    showTaskIdWarning.value = !newPid;

    if (newValue !== null) {
      searchParams.pid = newValue;
      getData();
    }
  }
);

// 新增watch监听抽屉状态变化
watch(
  () => drawerVisible.value,
  (newVisible) => {
    if (!newVisible) {
      // 抽屉关闭时重置分页状态和当前Tid
      currentTid.value = null;
      pagination.value = {
        ...pagination.value,
        page: 1,
        itemCount: 0
      };
      detailData.value = []; // 清空数据避免残留
      detailTotal.value = 0;
    }
  }
);

const { checkedRowKeys } = useTableOperate(data, getData);
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <VerifyDetailsSearch v-model:model="searchParams" @reset="resetSearchParams" @search="getDataByPage" />
    <NCard
      :title="$t('page.contrast.verifyDetails.titleDetails')"
      :bordered="false"
      size="small"
      class="sm:flex-1-hidden card-wrapper"
    >
      <template #header-extra>
        <div class="flex items-center gap-2">
          <NButton @click="handleQueryLog">
            <template #icon>
              <icon-ic-round-search class="text-icon" />
            </template>
            {{ $t('common.queryLog') }}
          </NButton>
          <NButton @click="getData">
            <template #icon>
              <icon-ic-round-refresh class="text-icon" />
            </template>
            {{ $t('common.refresh') }}
          </NButton>
        </div>
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        :flex-height="!appStore.isMobile"
        :scroll-x="800"
        :loading="loading"
        remote
        :row-key="row => row.tid"
        :pagination="mobilePagination"
        class="sm:h-100%"
      />
    </NCard>

    <NDrawer v-model:show="drawerVisible" placement="right" width="80%" :mask-closable="true">
      <NDrawerContent :title="$t('page.contrast.verifyDetails.variationAnalysis') + '    (    ' + $t('page.contrast.verifyDetails.checkTotal') + ' : ' + detailTotal + '    )'">
        <NSpin :show="loadingDetails">
          <div class="table-scroll-container">
            <NDataTable
              :columns="getTableColumns"
              :data="detailData"
              size="small"
              :bordered="true"
              :loading="loadingDetails"
              :scroll-x="getScrollWidth"
              :max-height="800"
              class="mt-4"
            />
          </div>
        </NSpin>
        <template #footer>
          <div class="flex items-center justify-between gap-4 p-4">
            <NPagination
              v-model:page="pagination.page"
              v-model:page-size="pagination.pageSize"
              :page-count="Math.ceil(pagination.itemCount / pagination.pageSize)"
              :page-sizes="pagination.pageSizes"
              :show-size-picker="pagination.showSizePicker"
              @update:page="handlePageChange"
              @update:page-size="handlePageSizeChange"
            />
            <NButton @click="drawerVisible = false">
              {{ $t('common.close') }}
            </NButton>
          </div>
        </template>
      </NDrawerContent>
    </NDrawer>
    <LogDetail v-model:visible="logDrawerVisible" :log="logData" :log-path="logPath" @refresh-log="handleQueryLog" />
  </div>
</template>

<style scoped>
.n-row {
  margin: 8px 0;
}
.n-col {
  padding: 4px;
}

/* 新增样式 */
:deep(.n-data-table) {
  --n-border-radius: 8px;
  --n-th-padding: 12px;
  --n-td-padding: 12px;
}

:deep(.n-tag) {
  margin: 2px;
}

/* 关键样式 */
.table-scroll-container {
  max-width: 100%; /* 限制容器最大宽度 */
  overflow: auto; /* 强制显示滚动条 */
}

:deep(.n-card-header__extra) {
  display: flex;
  align-items: center;
}

/* 关键：让单元格文本自动换行，高度自适应 */
:deep(.n-data-table__td) {
  white-space: normal !important; /* 取消强制不换行 */
  word-break: break-all; /* 单词/长文本截断换行（适配英文/数字） */
  word-wrap: break-word; /* 中文长文本换行 */
  min-height: 60px; /* 最小高度，避免内容过少时单元格过矮 */
  vertical-align: top; /* 内容顶部对齐，优化多行文本书写体验 */
}

/* 表头如果有长标题，也同步优化换行 */
:deep(.n-data-table__th) {
  white-space: normal !important;
  word-break: break-all;
  min-height: 40px;
}

/* 添加在现有样式中 */
:deep(.n-drawer-content) {
  max-height: calc(100vh - 120px); /* 限制抽屉内容高度 */
  overflow-y: auto; /* 添加垂直滚动条 */
}

:deep(.n-data-table) {
  min-width: 800px; /* 确保表格有最小宽度 */
}
</style>
