import { request } from '../request';

/** 获取任务模板列表(使用any) */
export function getJobTemplateList(params: any) {
  return request<any>({
    url: 'api/jobTemplate/pageList',
    method: 'get',
    params
  });
}

/** get template list */
export function fetchGetTemplateList(params?: Api.TemplateManage.TemplateSearchParams) {
  return request<Api.TemplateManage.TemplateList>({
    url: '/api/jobTemplate/newPageList',
    method: 'get',
    params,
    paramsSerializer: serializedParams => {
      const parts: string[] = [];
      for (const key in serializedParams) {
        if (Array.isArray(serializedParams[key])) {
          // 对数组字段特殊处理，确保数字数组被正确序列化
          (serializedParams[key] as number[]).forEach(value => {
            parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
          });
        } else {
          parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(serializedParams[key])}`);
        }
      }
      return parts.join('&');
    }
  });
}

/** loadById Executor */
export function loadById(id: number) {
  return request<Api.ExecutorManage.Executor>({
    url: `/api/jobGroup/loadById/?id=${id}`,
    method: 'post'
  });
}

export type TemplateModel = Pick<
  Api.TemplateManage.Template,
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

/** update template */
export function updateTemplate(data: TemplateModel) {
  return request<null>({
    url: '/api/jobTemplate/update',
    method: 'post',
    data
  });
}

/** add template */
export function addTemplate(data: TemplateModel) {
  return request<null>({
    url: '/api/jobTemplate/add',
    method: 'post',
    data
  });
}

/** delete template */
export function deleteTemplate(id: number) {
  return request<null>({
    url: `/api/jobTemplate/remove/${id}`,
    method: 'post'
  });
}
