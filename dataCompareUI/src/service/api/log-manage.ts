import { request } from '../request';

/** get log list */
export function fetchGetLogList(params?: Api.LogInfoManage.LogInfoSearchParams) {
  return request<Api.LogInfoManage.LogInfoList>({
    url: '/api/log/newPageList',
    method: 'get',
    params
  });
}

// eslint-disable-next-line max-params
export function viewJobLog(executorAddress: string, triggerTime: number, logId: number, fromLineNum: number) {
  return request({
    url: `/api/log/logDetailCat?executorAddress=${executorAddress}&triggerTime=${triggerTime}&logId=${logId}&fromLineNum=${fromLineNum}`,
    method: 'get'
  });
}

export function clearLog(jobGroup: number, jobId: number, type: number) {
  return request({
    url: `/api/log/clearLog?jobGroup=${jobGroup}&jobId=${jobId}&type=${type}`,
    method: 'post'
  });
}
