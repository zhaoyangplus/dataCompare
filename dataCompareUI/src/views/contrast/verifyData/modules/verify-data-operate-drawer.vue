<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
// import { addDataContrast, dsQueryApi, jdbcDsList } from '@/service/api';
import { addDataVerify, fetchGetDatasourceList, getDBSchema, getTableNames, logDetail } from '@/service/api';
import { $t } from '@/locales';
import { datasourceOptions } from '@/constants/business';
defineOptions({
  name: 'VerifyDataOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.ContrastManage.contrast | null;
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
    add: $t('page.contrast.verifyDetails.addVerify'),
    edit: $t('page.contrast.verifyDetails.addVerify')
  };
  return titles[props.operateType];
});

type Model = Pick<
  Api.VerifyDataManage.verifyData,
  'batchNumber' | 'projectName' | 'sourceSchema' | 'targetSchema' | 'tables' | 'percentage' | 'sourceId' | 'targetId' | 'logFileName'
>;

const model = ref(createDefaultModel());

function createDefaultModel(): Model {
  return {
    batchNumber: 0,
    projectName: null,
    sourceSchema: null,
    targetSchema: null,
    tables: [],
    percentage: null,
    sourceId: null,
    targetId: null,
    logFileName: ''
  };
}

type RuleKey = Extract<keyof Model, 'projectName' | 'sourceSchema' | 'targetSchema' | 'sourceId' | 'targetId'>;

const rules: Record<RuleKey, App.Global.FormRule> = {
  projectName: defaultRequiredRule,
  sourceId: defaultRequiredRule,
  targetId: defaultRequiredRule,
  sourceSchema: defaultRequiredRule,
  targetSchema: defaultRequiredRule
  // tables: defaultRequiredRule,
  // percentage: defaultRequiredRule
};

function handleInitModel() {
  model.value = createDefaultModel();

  if (props.operateType === 'edit' && props.rowData) {
    Object.assign(model.value, props.rowData);
  }
}

/** 数据源信息 */

const readDatasourceOptions = ref<Array<{ value: number; label: string; imageUrl: string; jdbcUrl: string }>>([]);

async function getDatasourceOptions() {
  const { error, data } = await fetchGetDatasourceList({ current: 1, size: 200 });
  if (!error) {
    const options = data.records.map(item => ({
      value: item.id,
      label: item.datasourceName,
      imageUrl:
        datasourceOptions.find(item2 => item2.value === item.datasource)?.imageUrl || '@/assets/db-imgs/halo.png',
      jdbcUrl: item.jdbcUrl
    }));
    readDatasourceOptions.value = options;
  }
}

/** 源端schema信息 */

const readerSchemaOptions = ref<Array<{ value: string; label: string }>>([]);

async function handleUpdateReValue(reDatasourceId: number) {
  if (reDatasourceId === null) {
    model.value.sourceId = null; // 确保数据清理
    readerSchemaOptions.value = [];
    return;
  }
  const { error, data } = await getDBSchema(reDatasourceId);
  if (!error) {
    const options = data.map(tableName => ({
      value: tableName,
      label: tableName
    }));
    readerSchemaOptions.value = options;
    resetData('reader');
  }
}

/** 目标端schema信息 */

const writerSchemaOptions = ref<Array<{ value: string; label: string }>>([]);

async function handleUpdateWrValue(wrDatasourceId: number) {
  if (wrDatasourceId === null) {
    model.value.targetId = null; // 确保数据清理
    writerSchemaOptions.value = [];
    return;
  }
  const { error, data } = await getDBSchema(wrDatasourceId);
  if (!error) {
    const options = data.map(tableName => ({
      value: tableName,
      label: tableName
    }));
    writerSchemaOptions.value = options;
    resetData('writer');
  }
}

/** 源端表信息 */

const readerIsLoading = ref(false);

const readerTablesOptions = ref<Array<{ value: string; label: string; disabled: boolean }>>([]);

async function handleUpdateReSchemaValue(sourceSchema: string) {
  readerIsLoading.value = true;
  const { error, data } = await getTableNames(model.value.sourceId as number, sourceSchema);
  if (!error) {
    const options = data.map(tableName => ({
      value: tableName,
      label: tableName,
      disabled: false
    }));
    readerTablesOptions.value = options;
    model.value.tables = [];
  }
  readerIsLoading.value = false;
}

function closeDrawer() {
  writerSchemaOptions.value = [];
  readerSchemaOptions.value = [];
  visible.value = false;
}

/** 重置数据 */
function resetData(type: string) {
  if (type === 'reader') {
    model.value.sourceSchema = null;
  } else {
    model.value.targetSchema = null;
  }
}

const isLoading = ref(false); // 加载状态

async function handleSubmit() {
  try {
    await validate();
    if (model.value.percentage === null) {
      model.value.percentage = 0;
    }
    isLoading.value = true;
    if (props.operateType === 'add') {
      // model.value.logFileName = `VERIFY${getCurrentTimeFormat()}`;
      // const handleLogtTimerId = setTimeout(() => {
      //   handleLogDrawer();
      // }, 1000);
      const response = await addDataVerify(model.value);
      if (response.response.data.code !== 200) {
        // clearTimeout(handleLogtTimerId);
        window.$message?.error(response.response.data.msg || $t('common.addFailed'));
        return;
      } else {
        window.$message?.success($t('common.addSuccess'));
      }
    }
  } finally {
    isLoading.value = false;
    closeDrawer();
    emit('submitted');
  }
}

function getCurrentTimeFormat() {
  const now = new Date();
  const padZero = (num: number, length = 2) => String(num).padStart(length, '0'); // 辅助函数：补零
  const year = now.getFullYear();
  const month = padZero(now.getMonth() + 1);
  const day = padZero(now.getDate());
  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());
  const milliSeconds = padZero(now.getMilliseconds(), 3); // 毫秒需要补足 3 位
  return `${year}${month}${day}${hours}${minutes}${seconds}${milliSeconds}`;
}

/** 日志信息 */

const logData = ref('');
const drawerVisible = ref(false);
let timerId: number | null = null;
const logPath = ref('');

// function handleLogDrawer() {
//   drawerVisible.value = true;
//   fetchLatestLog();
// }

// async function fetchLatestLog() {
//   const { error, data } = await logDetail({ logFileName: model.value.logFileName });

//   if (!error) {
//     // 成功响应
//     if (data.success) {
//       logPath.value = data.resourcePath;
//       logData.value = data.logContent;
//     } else {
//       console.error('获取日志失败:', data.error);
//     }
//   } else {
//     // 系统错误
//     console.error('请求失败: 未知错误');
//   }
// }

// 添加百分比选项
const percentageOptions = computed(() =>
  Array.from({ length: 10 }, (_, i) => ({
    value: (i + 1) * 0.1,
    label: `${(i + 1) * 10}%`
  }))
);

// 页面加载时就调用
onMounted(() => {
  getDatasourceOptions();
});

watch(visible, () => {
  if (visible.value) {
    handleInitModel();
    restoreValidation();
  }
});

// 在现有的 watch 后添加以下两个监听器
watch(
  () => model.value.percentage,
  newPercentage => {
    if (newPercentage !== null) {
      // 当百分比被设置时，清空已选表
      model.value.tables = [];
    }
  }
);

watch(
  () => model.value.tables,
  newTables => {
    if (newTables.length > 0) {
      // 当有表被选中时，清空百分比
      model.value.percentage = null;
    }
  }
);

// 处理子组件的刷新日志事件
// const handleRefreshLog = () => {
//   fetchLatestLog();
//   window.$message?.success($t('common.refreshSuccess'));
// };

// // 清除定时任务
// onUnmounted(() => {
//   if (timerId) {
//     clearInterval(timerId);
//   }
// });

// // 监听抽屉的显示状态变化
// watch(
//   () => drawerVisible.value,
//   newVal => {
//     if (newVal) {
//       // 当抽屉打开时，启动定时任务获取最新的日志数据
//       fetchLatestLog();
//       timerId = window.setInterval(fetchLatestLog, 2000);
//     } else {
//       // 当抽屉关闭时，清除定时任务
//       // eslint-disable-next-line no-lonely-if
//       if (timerId !== null) {
//         clearInterval(timerId); // 关闭时清除定时任务
//         timerId = null;
//       }
//     }
//   }
// );
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" width="35%">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <!-- 加载遮罩 -->
      <div v-show="isLoading" class="loading-mask">
        <NSpin size="large" />
        <div class="mask-text">{{ $t('common.submittingTask') }}</div>
      </div>
      <NForm ref="formRef" :model="model" :rules="rules">
        <NGrid responsive="screen" item-responsive>
          <NFormItemGi span="24 m:24" :label="$t('page.contrast.taskName')" path="projectName">
            <NInput v-model:value="model.projectName" :placeholder="$t('page.contrast.form.taskName')" />
          </NFormItemGi>
          <NFormItemGi span="24 m:24" :label="$t('page.contrast.readerDatasource')" path="sourceId">
            <ImageSelectDetail
              v-model:model-value="model.sourceId"
              :options="readDatasourceOptions"
              :placeholder-value="$t('page.contrast.form.readerDatasource')"
              @update:value="handleUpdateReValue"
            />
          </NFormItemGi>
          <NFormItemGi span="24 m:24" :label="$t('page.contrast.readerSchema')" path="readerSchema">
            <!--
 <NSelect
              v-model:value="model.sourceSchema"
              filterable
              :options="readerSchemaOptions"
              :placeholder="$t('page.task.batch.form.readerSchema')"
              @update:value="handleUpdateReSchemaValue"
            />
-->
            <SchemaSelect
              v-model:model-value="model.sourceSchema"
              filterable
              :datasource-id="model.sourceId"
              :placeholder="$t('page.contrast.form.readerSchema')"
              @update:value="handleUpdateReSchemaValue"
            />
          </NFormItemGi>
          <!-- 在NForm中添加百分比选择 -->
          <NFormItemGi span="24 m:24" :label="$t('page.contrast.verifyDetails.samplingPercentage')" path="percentage">
            <div class="nspin-div">
              <NSelect
                v-model:value="model.percentage"
                :options="percentageOptions"
                :disabled="model.tables.length > 0"
                :placeholder="$t('page.contrast.verifyDetails.percentage')"
                clearable
              />
              <div class="form-tip">{{ $t('page.contrast.verifyDetails.tips') }}</div>
            </div>
          </NFormItemGi>
          <NFormItemGi span="24 m:24" :label="$t('page.contrast.form.readerTables')" path="tables">
            <div class="nspin-div">
              <NTransfer
                v-model:value="model.tables"
                virtual-scroll
                :options="readerTablesOptions"
                :disabled="!!model.percentage"
                source-filterable
              />
              <NSpin v-show="readerIsLoading" description="拼命加载中..." class="nspin-class" />
            </div>
          </NFormItemGi>
          <NFormItemGi span="24 m:24" :label="$t('page.contrast.writerDatasource')" path="targetId">
            <ImageSelectDetail
              v-model:model-value="model.targetId"
              :options="readDatasourceOptions"
              :placeholder-value="$t('page.contrast.form.writerDatasource')"
              @update:value="handleUpdateWrValue"
            />
          </NFormItemGi>
          <NFormItemGi span="24 m:24" :label="$t('page.contrast.writerSchema')" path="writerSchema">
            <!--
 <NSelect
              v-model:value="model.targetSchema"
              filterable
              :options="writerSchemaOptions"
              :placeholder="$t('page.task.batch.form.writerSchema')"
            />
-->
            <SchemaSelect
              v-model:model-value="model.targetSchema"
              filterable
              :datasource-id="model.targetId"
              :placeholder="$t('page.contrast.form.writerSchema')"
            />
          </NFormItemGi>
        </NGrid>
      </NForm>
      <template #footer>
        <NSpace :size="16">
          <NButton @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" :loading="isLoading" :disabled="isLoading" @click="handleSubmit">
            {{ isLoading ? $t('common.submitting') : $t('common.confirm') }}
          </NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
  <!-- <LogDetail v-model:visible="drawerVisible" :log="logData" :log-path="logPath" @refresh-log="handleRefreshLog" /> -->
</template>

<style scoped>
.loading-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.52);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;

  .mask-text {
    margin-top: 16px;
    font-size: 14px;
    color: #666;
  }
}

.nspin-div {
  position: relative;
  display: inline-block;
  width: 100%;
}

.form-tip {
  font-size: 14px;
  color: #f80404;
  margin-top: 8px;
}
</style>
