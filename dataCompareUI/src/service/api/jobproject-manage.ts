import { request } from '../request';

/** 获取项目列表(使用any) */
export function getjobProjectList(params: any) {
  return request<any>({
    url: 'api/jobProject/newPageList',
    method: 'get',
    params
  });
}
