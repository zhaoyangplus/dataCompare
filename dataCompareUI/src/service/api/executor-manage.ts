import { request } from '../request';

export type ExecutorModel = Pick<
  Api.ExecutorManage.Executor,
  'id' | 'appName' | 'title' | 'addressType' | 'order' | 'addressList'
>;
/** get executor list */
// export function fetchGetExecutorList() {
//   return request({
//     url: '/api/jobGroup/list',
//     method: 'get'
//   })
// }

/** get executor list */
export function fetchGetExecutorList(params?: Api.ExecutorManage.ExecutorSearchParams) {
  return request<Api.ExecutorManage.ExecutorList>({
    url: '/api/jobGroup/pageList',
    method: 'get',
    params
  });
}

/** add executor */
export function addExecutor(data: ExecutorModel) {
  return request<null>({
    url: '/api/jobGroup/save',
    method: 'post',
    data
  });
}

/** update executor */
export function updateExecutor(data: ExecutorModel) {
  return request<null>({
    url: '/api/jobGroup/update',
    method: 'post',
    data
  });
}

/** delete executor */
export function deleteExecutor(id: number) {
  return request<null>({
    url: `/api/jobGroup/remove?id=${id}`,
    method: 'post'
  });
}
