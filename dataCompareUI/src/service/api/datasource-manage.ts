import { request } from '../request';

export type DatasourceModel = Pick<
  Api.DatasourceManage.Datasource,
  'id' | 'datasource' | 'datasourceName' | 'jdbcUsername' | 'jdbcPassword' | 'jdbcUrl' | 'jdbcDriverClass' | 'comments'
>;

/** add datasource */
export function addDatasource(data: DatasourceModel) {
  return request<null>({
    url: '/api/jobJdbcDatasource',
    method: 'post',
    data
  });
}

/** update datasource */
export function updateDatasource(data: DatasourceModel) {
  return request<null>({
    url: '/api/jobJdbcDatasource',
    method: 'put',
    data
  });
}

/** delete datasource */
export function deleteDatasource(id: number) {
  return request<null>({
    url: `/api/jobJdbcDatasource/removeById?id=${id}`,
    method: 'post'
  });
}

/** get datasource list */
export function fetchGetDatasourceList(params?: Api.DatasourceManage.DatasourceSearchParams) {
  return request<Api.DatasourceManage.DatasourceList>({
    url: '/api/jobJdbcDatasource/pageList',
    method: 'get',
    params
  });
}

/** test datasource */
export function testDatasource(data: DatasourceModel) {
  return request<null>({
    url: '/api/jobJdbcDatasource/test',
    method: 'post',
    data
  });
}

/** jdbcDsList */
export function jdbcDsList(params?: Api.DatasourceManage.DatasourceSearchParams) {
  return request({
    url: '/api/jobJdbcDatasource',
    method: 'get',
    params
  });
}
