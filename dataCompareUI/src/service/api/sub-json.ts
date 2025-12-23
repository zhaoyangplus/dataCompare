import { request } from '../request';

interface DashboardListParams {
  projectIds?: string;
}

/*
 */
export function dashboardList(params: DashboardListParams) {
  return request<any>({
    url: 'api/creMetaData/dashboardList',
    method: 'get',
    params
  });
}

export function dashboardList2(params: Api.ReportManage.ReportSearchParams) {
  return request<Api.ReportManage.ReportList>({
    url: 'api/creMetaData/dashboardList',
    method: 'get',
    params
  });
}

export function totalDashboardList() {
  return request<any>({
    url: 'api/creMetaData/totalDashboardList',
    method: 'get'
  });
}

export function dataDashboardList() {
  return request<any>({
    url: 'api/creMetaData/dataDashboardList',
    method: 'get'
  });
}
