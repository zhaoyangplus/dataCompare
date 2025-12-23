import { request } from '../request';

/** 获取任务信息列表 */
export function fetchGetTaskList(params?: Api.TaskManage.TaskSearchParams) {
  return request<Api.TaskManage.TaskList>({
    url: '/api/job/newPageList',
    method: 'get',
    params,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    paramsSerializer: params => {
      const parts: string[] = [];
      for (const key in params) {
        if (Array.isArray(params[key])) {
          // 对数组字段特殊处理，确保数字数组被正确序列化
          (params[key] as number[]).forEach(value => {
            parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
          });
        } else {
          parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
        }
      }
      return parts.join('&');
    }
  });
}

/** 批量创建数据迁移任务 */
export function batchAdd(data: any) {
  return request<any>({
    url: 'api/job/batchAdd',
    method: 'post',
    data
  });
}

/** 删除当个任务 */
export function deleteTask(id: number) {
  return request<null>({
    url: `/api/job/remove/${id}`,
    method: 'post'
  });
}

/** 批量开启任务 */
export function batchStartTask(params: any) {
  return request<null>({
    url: `/api/job/batchStart`,
    method: 'post',
    params,
    paramsSerializer: customParamsSerializer
  });
}

/** 批量开启失败任务 */
export function batchStartFailTask(params: any) {
  return request<null>({
    url: `/api/job/batchStartFailTask`,
    method: 'post',
    params,
    paramsSerializer: customParamsSerializer
  });
}

/** 批量删除任务 */
export function batchDeleteTask(params: any) {
  return request<null>({
    url: `/api/job/batchDeleteTask`,
    method: 'post',
    params,
    paramsSerializer: customParamsSerializer
  });
}

/** 批量停止任务 */
export function batchStopTask(params: any) {
  return request<null>({
    url: `/api/job/batchStopTask`,
    method: 'post',
    params,
    paramsSerializer: customParamsSerializer
  });
}

/** 自定义参数序列化器 过滤掉 null 和 undefined 值，并正确处理数组字段 */
export function customParamsSerializer(params: Record<string, any>): string {
  const parts: string[] = [];
  for (const key in params) {
    // 过滤掉值为 null 或 undefined 的字段
    if (params[key] === null || params[key] === undefined) {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (Array.isArray(params[key])) {
      // 对数组字段特殊处理，确保数字数组被正确序列化
      (params[key] as any[]).forEach(value => {
        if (value !== null && value !== undefined) {
          // 过滤数组中的 null 和 undefined
          parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
      });
    } else {
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    }
  }
  return parts.join('&');
}

/** 开启任务 */
export function startTask(id: number) {
  return request<null>({
    url: `/api/job/start?id=${id}`,
    method: 'post'
  });
}

/** 停止任务 */
export function stopTask(id: number) {
  return request<null>({
    url: `/api/job/stop?id=${id}`,
    method: 'post'
  });
}

/** 获取执行器信息 */
export function getExecutorList(params: any) {
  return request<any>({
    url: 'api/jobGroup/list',
    method: 'get',
    params
  });
}

export type TaskModel = Pick<
  Api.TaskManage.TaskInfo,
  | 'id'
  | 'jobGroup'
  | 'jobDesc'
  | 'executorRouteStrategy'
  | 'executorBlockStrategy'
  | 'alarmEmail'
  | 'glueType'
  | 'jobJson'
  | 'projectId'
  | 'executorFailRetryCount'
  | 'executorTimeout'
  | 'jvmParam'
  | 'glueSource'
>;

/** 更新任务 */
export function updateTask(data: TaskModel) {
  return request<null>({
    url: '/api/job/update',
    method: 'post',
    data
  });
}

/** 执行一次任务 */
export function triggerJob(data: any) {
  return request<any>({
    url: 'api/job/trigger',
    method: 'post',
    data
  });
}

/** 批量设置name */
export function batchSetDataWay(params: any) {
  return request<any>({
    url: 'api/job/batchSetDataWay',
    method: 'get',
    params,
    paramsSerializer: customParamsSerializer
  });
}

/** 构建json */
export function newBuildJson(data: any) {
  return request<any>({
    url: 'api/dataxJson/newBuildJson',
    method: 'post',
    data,
    paramsSerializer: customParamsSerializer
  });
}

/** 创建任务 */
export function createJob(data: any) {
  return request<any>({
    url: 'api/job/add',
    method: 'post',
    data,
    paramsSerializer: customParamsSerializer
  });
}

/** Data type mapping */
export type DtmModel = Pick<
  Api.DtmManage.dtm,
  'id' | 'datasource' | 'readerDataType' | 'writerDataType' | 'isRetainValue'
>;

interface ApiResponse<T> {
  error: any; // error 可以是 null、字符串或对象，取决于你的 API
  data: T; // data 是实际数据，类型由 T 指定
}

/** get Data type mapping list */
export function fetchGetDtmList(params?: Api.DtmManage.DtmSearchParams) {
  return request<Api.DtmManage.DtmList>({
    url: '/api/dataTypeMapping/newPageList',
    method: 'get',
    params
  });
}

/** add Data type mapping */
export function addDtm(data: DtmModel) {
  return request<null>({
    url: '/api/dataTypeMapping/add',
    method: 'post',
    data
  });
}

/** update Data type mapping */
export function updateDtm(data: DtmModel) {
  return request<null>({
    url: '/api/dataTypeMapping/update',
    method: 'post',
    data
  });
}

/** delete Data type mapping */
export function deleteDtm(id: number) {
  return request<null>({
    url: `/api/dataTypeMapping/remove?id=${id}`,
    method: 'post'
  });
}

/** get datasource data type mapping */
export function getDataTypesBydatasource(datasource: string) {
  return request<ApiResponse<string[]>>({
    url: `/api/dataTypeMapping/getDataTypesBydatasource?datasource=${datasource}`,
    method: 'post'
  });
}
