<script setup lang="tsx">
import { useRoute } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';
import { NAlert, NButton, NCard, NDataTable, NDrawer, NDrawerContent, NPagination, NPopconfirm, NSpin, NTag, NText, NTooltip } from 'naive-ui';
import { compareLogDetail, fetchGetVerifyDetailsList, getVerifyDetails } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import VerifyDetailsSearch from './modules/verifyDetails-search.vue';
import type { VNode } from 'vue';

const appStore = useAppStore();
const route = useRoute();

// 定义 pid number 或 null
const pid = ref<number | null>(route.query.pid ? Number(route.query.pid) : null);
const showTaskIdWarning = ref(!route.query.pid);

// const { columns, data, getData, getDataByPage, loading, mobilePagination, searchParams, resetSearchParams } = useTable({
//   apiFn: fetchGetVerifyDetailsList,
//   showTotal: true,
//   apiParams: {
//     current: 1,
//     size: 10,
//     pid: pid.value ?? 0,
//     tableName: null,
//     status: null
//   },
//   columns: () => [
//     {
//       key: 'index',
//       title: $t('common.index'),
//       align: 'center',
//       width: 64
//     },
//     {
//       key: 'tableNames',
//       title: $t('page.contrast.verifyDetails.tableNames'),
//       align: 'center',
//       width: 150,
//       render: row => (
//         <div class="flex flex-col">
//           <NText strong>
//             {$t('page.contrast.verifyDetails.sourceTableName')}: {row.sourceTableName}
//           </NText>
//           <NText strong>
//             {$t('page.contrast.verifyDetails.targetTableName')}: {row.targetTableName}
//           </NText>
//         </div>
//       )
//     },
//     {
//       key: 'counts',
//       title: $t('page.contrast.verifyDetails.counts'),
//       align: 'center',
//       width: 150,
//       render: row => (
//         <div class="flex flex-col">
//           <NText>
//             {$t('page.contrast.verifyDetails.sourceCount')}: {row.sourceCnt}
//           </NText>
//           <NText>
//             {$t('page.contrast.verifyDetails.targetCount')}: {row.targetCnt}
//           </NText>
//         </div>
//       )
//     },
//     {
//       key: 'stats',
//       title: $t('page.contrast.verifyDetails.stats'),
//       align: 'center',
//       width: 480,
//       render: row => (
//         <div class="flex flex-wrap justify-center gap-2">
//           <NTag type="success">{`${$t('page.contrast.verifyDetails.equalCount')}: ${row.equalCnt}`}</NTag>
//           <NTag type="error">{`${$t('page.contrast.verifyDetails.notEqualCount')}: ${row.notEqualCnt}`}</NTag>
//           <NTag type="warning">{`${$t('page.contrast.verifyDetails.missingSourceCount')}: ${row.missingSourceCnt}`}</NTag>
//           <NTag type="info">{`${$t('page.contrast.verifyDetails.missingTargetCount')}: ${row.missingTargetCnt}`}</NTag>
//         </div>
//       )
//     },
//     {
//       key: 'durationStr',
//       title: $t('page.contrast.verifyDetails.durationStr'),
//       align: 'center',
//       width: 100
//     },
//     {
//       key: 'status',
//       title: $t('page.contrast.verifyDetails.status'),
//       align: 'center',
//       width: 100,
//       render: row => {
//         const isStatusVerifyList = [
//           {
//             value: 'out-of-sync',
//             label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.outOfSync'),
//             type: 'warning'
//           },
//           { value: 'in-sync', label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.inSync'), type: 'success' },
//           { value: 'running', label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.running'), type: 'primary' },
//           { value: 'skipped', label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.skipped'), type: 'tertiary' },
//           { value: 'failed', label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.failed'), type: 'error' }
//         ];
//         const found = isStatusVerifyList.find(item => item.value === row.status);
//         return (
//           <n-button quaternary type={found?.type}>
//             {found?.label}
//           </n-button>
//         );
//       }
//     },
//     {
//       key: 'operate',
//       title: $t('common.action'),
//       align: 'center',
//       fixed: 'right',
//       width: 180,
//       render: row => (
//         <div>
//           <NButton size="small" type="primary" onClick={() => handleDetails(row.tid)}>
//             {$t('page.contrast.verifyDetails.variationButton')}
//           </NButton>
//           {/* 条件渲染：仅当 resultMessage 存在时显示 反馈 按钮 */}
//           {row.resultMessage &&
//             <NPopconfirm>
//               {{
//                 trigger: () => (
//                   <NButton size="small" type="warning" style={{ marginLeft: '5px' }}>
//                     反馈
//                   </NButton>
//                 ),
//                 default: () => row.resultMessage
//               }}
//             </NPopconfirm>
//           }
//         </div>
//       )
//     }
//   ]
// });

type StatusConfig = {
  label: string;
  bgClass: string;
  textClass: string;
  borderClass: string;
  icon: VNode;
};

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
      align: 'left',
      width: 180,
      render: row => (
        <div class="space-y-3 py-2">
          {/* 源表 */}
          <div class="flex items-start gap-2">
            <div class="flex-shrink-0 mt-0.5">
              <div class="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                {$t('page.contrast.verifyDetails.sourceTableName')}
              </div>
              <div class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate" title={row.sourceTableName || undefined}>
                {row.sourceTableName || '-'}
              </div>
            </div>
          </div>

          {/* 目标表 */}
          <div class="flex items-start gap-2">
            <div class="flex-shrink-0 mt-0.5">
              <div class="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
            </div>
            <div class="flex-1 min-w-0">
              <div class="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                {$t('page.contrast.verifyDetails.targetTableName')}
              </div>
              <div class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate" title={row.targetTableName || undefined}>
                {row.targetTableName || '-'}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: 'counts',
      title: $t('page.contrast.verifyDetails.counts'),
      align: 'center',
      width: 180,
      render: row => (
        <div class="flex flex-col gap-2 py-2">
          {/* 源数量 */}
          <div class="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 rounded-md px-3 py-1.5 border border-blue-100 dark:border-blue-800/50">
            <span class="text-xs text-blue-700 dark:text-blue-300 flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              {$t('page.contrast.verifyDetails.sourceCount')}
            </span>
            <span class="text-sm font-bold text-blue-600 dark:text-blue-400 tabular-nums">
              {row.sourceCnt.toLocaleString()}
            </span>
          </div>

          {/* 目标数量 */}
          <div class="flex items-center justify-between bg-purple-50 dark:bg-purple-900/20 rounded-md px-3 py-1.5 border border-purple-100 dark:border-purple-800/50">
            <span class="text-xs text-purple-700 dark:text-purple-300 flex items-center gap-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              {$t('page.contrast.verifyDetails.targetCount')}
            </span>
            <span class="text-sm font-bold text-purple-600 dark:text-purple-400 tabular-nums">
              {row.targetCnt.toLocaleString()}
            </span>
          </div>
        </div>
      )
    },
    {
      key: 'stats',
      title: $t('page.contrast.verifyDetails.stats'),
      align: 'center',
      width: 460,
      render: row => (
        <div class="grid grid-cols-2 gap-2 px-4 py-2">
          {/* 匹配数 */}
          <div class="flex items-center justify-between bg-green-50 dark:bg-green-900/20 rounded-lg px-3 py-2 border border-green-200 dark:border-green-800">
            <span class="text-xs text-green-700 dark:text-green-300">
              {$t('page.contrast.verifyDetails.equalCount')}
            </span>
            <span class="text-sm font-semibold text-green-600 dark:text-green-400 tabular-nums">
              {row.equalCnt.toLocaleString()}
            </span>
          </div>

          {/* 不匹配数 */}
          <div class="flex items-center justify-between bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2 border border-red-200 dark:border-red-800">
            <span class="text-xs text-red-700 dark:text-red-300">
              {$t('page.contrast.verifyDetails.notEqualCount')}
            </span>
            <span class="text-sm font-semibold text-red-600 dark:text-red-400 tabular-nums">
              {row.notEqualCnt.toLocaleString()}
            </span>
          </div>

          {/* 源缺失数 */}
          <div class="flex items-center justify-between bg-orange-50 dark:bg-orange-900/20 rounded-lg px-3 py-2 border border-orange-200 dark:border-orange-800">
            <span class="text-xs text-orange-700 dark:text-orange-300">
              {$t('page.contrast.verifyDetails.missingSourceCount')}
            </span>
            <span class="text-sm font-semibold text-orange-600 dark:text-orange-400 tabular-nums">
              {row.missingSourceCnt.toLocaleString()}
            </span>
          </div>

          {/* 目标缺失数 */}
          <div class="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 rounded-lg px-3 py-2 border border-blue-200 dark:border-blue-800">
            <span class="text-xs text-blue-700 dark:text-blue-300">
              {$t('page.contrast.verifyDetails.missingTargetCount')}
            </span>
            <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 tabular-nums">
              {row.missingTargetCnt.toLocaleString()}
            </span>
          </div>
        </div>
      )
    },
    {
      key: 'durationStr',
      title: $t('page.contrast.verifyDetails.durationStr'),
      align: 'center',
      width: 120,
      render: row => (
        <div class="flex items-center justify-center gap-2 py-2">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="font-mono text-sm font-medium text-gray-700 dark:text-gray-300">
            {row.durationStr}
          </span>
        </div>
      )
    },
    {
      key: 'status',
      title: $t('page.contrast.verifyDetails.status'),
      align: 'center',
      width: 140,
      render: row => {
        type StatusConfig = {
          label: string;
          bgClass: string;
          textClass: string;
          borderClass: string;
          icon: any;
        };

        const statusConfig: Record<string, StatusConfig> = {
          'out-of-sync': {
            label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.outOfSync'),
            bgClass: 'bg-orange-100 dark:bg-orange-900/30',
            textClass: 'text-orange-700 dark:text-orange-300',
            borderClass: 'border-orange-300 dark:border-orange-700',
            icon: (
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            )
          },
          'in-sync': {
            label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.inSync'),
            bgClass: 'bg-green-100 dark:bg-green-900/30',
            textClass: 'text-green-700 dark:text-green-300',
            borderClass: 'border-green-300 dark:border-green-700',
            icon: (
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            )
          },
          'running': {
            label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.running'),
            bgClass: 'bg-blue-100 dark:bg-blue-900/30',
            textClass: 'text-blue-700 dark:text-blue-300',
            borderClass: 'border-blue-300 dark:border-blue-700',
            icon: (
              <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )
          },
          'skipped': {
            label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.skipped'),
            bgClass: 'bg-gray-100 dark:bg-gray-800',
            textClass: 'text-gray-600 dark:text-gray-400',
            borderClass: 'border-gray-300 dark:border-gray-600',
            icon: (
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            )
          },
          'failed': {
            label: $t('page.contrast.verifyDetails.isStatusVerifyRecord.failed'),
            bgClass: 'bg-red-100 dark:bg-red-900/30',
            textClass: 'text-red-700 dark:text-red-300',
            borderClass: 'border-red-300 dark:border-red-700',
            icon: (
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            )
          }
        };

        const config = statusConfig[row.status as string] || statusConfig['skipped'];

        return (
          <div class={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${config.bgClass} ${config.textClass} ${config.borderClass}`}>
            {config.icon}
            <span class="text-xs font-medium">
              {config.label}
            </span>
          </div>
        );
      }
    },
    {
      key: 'operate',
      title: $t('common.action'),
      align: 'center',
      fixed: 'right',
      width: 200,
      render: row => (
        <div class="flex items-center justify-center gap-2">
          <NButton
            size="small"
            type="primary"
            strong
            secondary
            onClick={() => handleDetails(row.tid)}
            class="shadow-sm hover:shadow transition-shadow"
          >
            {{
              icon: () => (
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              ),
              default: () => $t('page.contrast.verifyDetails.variationButton')
            }}
          </NButton>

          {/* 条件渲染：仅当 resultMessage 存在时显示反馈按钮 */}
          {row.resultMessage && (
            <NPopconfirm>
              {{
                trigger: () => (
                  <NButton
                    size="small"
                    type="warning"
                    strong
                    secondary
                    class="shadow-sm hover:shadow transition-shadow"
                  >
                    {{
                      icon: () => (
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      ),
                      default: () => '反馈'
                    }}
                  </NButton>
                ),
                default: () => (
                  <div class="max-w-xs">
                    <div class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                      {row.resultMessage}
                    </div>
                  </div>
                )
              }}
            </NPopconfirm>
          )}
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

//   const tableColumns: any[] = [
//     {
//       title: $t('common.index'),
//       key: 'index',
//       align: 'center' as const,
//       width: 64,
//       fixed: 'left',
//       render: (_row: any, index: any) => {
//         const currentPage = pagination.value.page;
//         const pageSize = pagination.value.pageSize;
//         return <NText>{(currentPage - 1) * pageSize + index + 1}</NText>;
//       }
//     },
//     {
//       title: $t('page.contrast.verifyDetails.sourceAndTarget'),
//       key: 'sourceTarget',
//       align: 'center' as const,
//       width: 200,
//       fixed: 'left',
//       render: (row: any) => <NText strong>{`${row.sourceTableName} → ${row.targetTableName}`}</NText>
//     },
//     {
//       title: $t('page.contrast.verifyDetails.pk'),
//       key: 'pk',
//       align: 'left' as const,
//       width: 96,
//       fixed: 'left',
//       render: (row: any) => (
//         <div class="flex flex-wrap gap-2">
//           {Object.entries(row.pk).map(([key, value]) => (
//             <NTag type="info" key={key}>{`${key}: ${value}`}</NTag>
//           ))}
//         </div>
//       )
//     }
//   ];

// fields.value.forEach(field => {
//   tableColumns.push({
//     title: field as any,
//     key: field as any,
//     align: 'center' as const,
//     minWidth: 120,
//     maxWidth: 300,
//     render: (row: any) => {
//       const detail = row.resultDetails?.[field as any];
//       if (!detail) {
//         return <NText type="info">{$t('page.contrast.verifyDetails.null')}</NText>;
//       }
//       // 字符串类型详情（错误提示）
//       if (typeof detail === 'string') {
//         return (
//           <NTooltip
//             placement="top"
//             trigger="hover"
//             maxWidth={400}
//             v-slots={{
//               trigger: () => (
//                 detail.length > 30 ? (
//                   <NAlert
//                     type="error"
//                     title={detail.slice(0, 30) + '...'}
//                     style={{ fontSize: '12px', padding: '4px 8px' }} // 缩小尺寸
//                   />
//                 ) : (
//                   <NAlert
//                     type="error"
//                     title={detail}
//                     style={{ fontSize: '12px', padding: '4px 8px' }} // 缩小尺寸
//                   />
//                 )
//               ),
//               default: () => (
//                 <div style={{ whiteSpace: 'normal', padding: '8px 12px' }}>
//                   {detail}
//                 </div>
//               )
//             }}
//           />
//         );
//       }

//       // 对象类型详情（source/target 对比）
//       return (
//         <NTooltip
//           placement="top"
//           trigger="hover"
//           maxWidth={400}
//           v-slots={{
//             trigger: () => (
//               <div class="flex flex-col gap-1" style={{ maxHeight: '80px', overflowY: 'auto' }}>
//                 {Object.entries(detail).map(([key, val]) => {
//                   let type: 'success' | 'warning' | 'info' = 'info';
//                   if (key === 'source') type = 'success';
//                   if (key === 'target') type = 'warning';
//                   return <NTag type={type} key={key} size="small">{`${key}: ${val}`}</NTag>;
//                 })}
//               </div>
//             ),
//             default: () => (
//               <div style={{ whiteSpace: 'normal', padding: '8px 12px' }}>
//                 {Object.entries(detail).map(([key, val]) => (
//                   <div key={key} style={{ marginBottom: '4px' }}>
//                     <span style={{ fontWeight: 500 }}>{key}：</span>
//                     <span>{val}</span>
//                   </div>
//                 ))}
//               </div>
//             )
//           }}
//         />
//       );
//     }
//   });
// });

//   return tableColumns;

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
        const num = (currentPage - 1) * pageSize + index + 1;
        return (
          <div class="flex items-center justify-center">
            <div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <span class="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {num}
            </span>
            </div>
          </div>
        );
      }
    },
    {
      title: $t('page.contrast.verifyDetails.sourceAndTarget'),
      key: 'sourceTarget',
      align: 'left' as const,
      width: 240,
      fixed: 'left',
      render: (row: any) => (
        <div class="flex items-center gap-2 py-2">
          {/* 源表 */}
          <div class="flex-1 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div class="text-xs text-blue-600 dark:text-blue-400 mb-0.5">Source</div>
            <div class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate" title={row.sourceTableName}>
              {row.sourceTableName}
            </div>
          </div>

          {/* 箭头 */}
          <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>

          {/* 目标表 */}
          <div class="flex-1 px-3 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <div class="text-xs text-purple-600 dark:text-purple-400 mb-0.5">Target</div>
            <div class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate" title={row.targetTableName}>
              {row.targetTableName}
            </div>
          </div>
        </div>
      )
    },
    {
      title: $t('page.contrast.verifyDetails.pk'),
      key: 'pk',
      align: 'left' as const,
      width: 200,
      fixed: 'left',
      render: (row: any) => (
        <div class="flex flex-wrap gap-1.5 py-1">
          {Object.entries(row.pk).map(([key, value]) => (
            <div
              key={key}
              class="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-md border border-indigo-200 dark:border-indigo-800"
            >
              <svg class="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
              <span class="text-xs font-medium text-indigo-700 dark:text-indigo-300">
              {key}:
            </span>
              <span class="text-xs font-semibold text-indigo-900 dark:text-indigo-100">
              {value}
            </span>
            </div>
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
      minWidth: 150,
      maxWidth: 350,
      render: (row: any) => {
        const detail = row.resultDetails?.[field as any];

        // 无数据
        if (!detail) {
          return (
            <div class="flex items-center justify-center py-2">
              <div class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
              <span class="text-xs text-gray-500 dark:text-gray-400">
                {$t('page.contrast.verifyDetails.null')}
              </span>
              </div>
            </div>
          );
        }

        // 字符串类型详情（错误提示）
        if (typeof detail === 'string') {
          const displayText = detail.length > 40 ? detail.slice(0, 40) + '...' : detail;
          return (
            <NTooltip placement="top" trigger="hover">
              {{
                trigger: () => (
                  <div class="px-3 py-2 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 cursor-help transition-all hover:shadow-sm">
                    <div class="flex items-start gap-2">
                      <svg class="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-xs text-red-700 dark:text-red-300 text-left break-words">
                      {displayText}
                    </span>
                    </div>
                  </div>
                ),
                default: () => (
                  <div class="max-w-md p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                    <div class="flex items-start gap-2 mb-2">
                      <svg class="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-sm font-semibold text-red-600 dark:text-red-400">Error Details</span>
                    </div>
                    <div class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words pl-7">
                      {detail}
                    </div>
                  </div>
                )
              }}
            </NTooltip>
          );
        }

        // 对象类型详情（source/target 对比）
        const entries = Object.entries(detail);
        return (
          <NTooltip placement="top" trigger="hover">
            {{
              trigger: () => (
                <div class="py-2">
                  <div class="inline-flex flex-col gap-1.5 max-h-20 overflow-y-auto p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    {entries.map(([key, val]) => {
                      const config = {
                        source: {
                          bgClass: 'bg-green-100 dark:bg-green-900/30',
                          textClass: 'text-green-700 dark:text-green-300',
                          borderClass: 'border-green-300 dark:border-green-700',
                          icon: (
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                          )
                        },
                        target: {
                          bgClass: 'bg-orange-100 dark:bg-orange-900/30',
                          textClass: 'text-orange-700 dark:text-orange-300',
                          borderClass: 'border-orange-300 dark:border-orange-700',
                          icon: (
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                            </svg>
                          )
                        },
                        default: {
                          bgClass: 'bg-blue-100 dark:bg-blue-900/30',
                          textClass: 'text-blue-700 dark:text-blue-300',
                          borderClass: 'border-blue-300 dark:border-blue-700',
                          icon: (
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                          )
                        }
                      };

                      const keyLower = key.toLowerCase();
                      const currentConfig = config[keyLower as keyof typeof config] || config.default;
                      const displayVal = String(val).length > 20 ? String(val).slice(0, 20) + '...' : String(val);

                      return (
                        <div
                          key={key}
                          class={`inline-flex items-center gap-1.5 px-2 py-1 rounded border ${currentConfig.bgClass} ${currentConfig.borderClass}`}
                        >
                          {currentConfig.icon}
                          <span class={`text-xs font-medium ${currentConfig.textClass}`}>
                          {key}:
                        </span>
                          <span class={`text-xs font-semibold ${currentConfig.textClass} truncate max-w-[100px]`} title={String(val)}>
                          {displayVal}
                        </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ),
              default: () => (
                <div class="max-w-lg p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <div class="space-y-3">
                    {entries.map(([key, val]) => {
                      const keyLower = key.toLowerCase();
                      const isSource = keyLower === 'source';
                      const isTarget = keyLower === 'target';

                      return (
                        <div key={key} class="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-md">
                          {/* 图标 */}
                          <div class={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            isSource ? 'bg-green-100 dark:bg-green-900/30' :
                              isTarget ? 'bg-orange-100 dark:bg-orange-900/30' :
                                'bg-blue-100 dark:bg-blue-900/30'
                          }`}>
                            <svg
                              class={`w-4 h-4 ${
                                isSource ? 'text-green-600 dark:text-green-400' :
                                  isTarget ? 'text-orange-600 dark:text-orange-400' :
                                    'text-blue-600 dark:text-blue-400'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              {isSource ? (
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                              ) : isTarget ? (
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd" />
                              ) : (
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                              )}
                            </svg>
                          </div>

                          {/* 内容 */}
                          <div class="flex-1 min-w-0">
                            <div class="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                              {key}
                            </div>
                            <div class="text-sm text-gray-900 dark:text-gray-100 break-words font-mono">
                              {String(val)}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            }}
          </NTooltip>
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
          <!-- <NButton @click="handleQueryLog">
            <template #icon>
              <icon-ic-round-search class="text-icon" />
            </template>
            {{ $t('common.queryLog') }}
          </NButton> -->
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
