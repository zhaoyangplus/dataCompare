import { request } from '../request';

export type ContrastModel = Pick<
  Api.ContrastManage.contrast,
  'id' | 'taskName' | 'readerDatasourceId' | 'writerDatasourceId' | 'readerSchema' | 'writerSchema'
>;

export type VerifyModel = Pick<
  Api.VerifyDataManage.verifyData,
  'projectName' | 'sourceSchema' | 'targetSchema' | 'tables' | 'percentage' | 'sourceId' | 'targetId' | 'logFileName'
>;

/** get Contrast list */
export function fetchGetContrastList(params?: Api.ContrastManage.ContrastSearchParams) {
  return request<Api.ContrastManage.ContrastList>({
    url: '/api/dataContrast/newPageList',
    method: 'get',
    params
  });
}

/** delete Contrast */
export function deleteContrast(id: number) {
  return request<null>({
    url: `/api/dataContrast/remove?id=${id}`,
    method: 'post'
  });
}

/** add data Contrast */
export function addDataContrast(data: ContrastModel) {
  return request<null>({
    url: '/api/dataContrast/createDataContrastTask',
    method: 'post',
    data
  });
}

/** add data Contrast */
export function addMetaContrast(data: ContrastModel) {
  return request<null>({
    url: '/api/dataContrast/createStructureContrastTask',
    method: 'post',
    data
  });
}

/** get ContrastDetail list */
export function fetchGetDataDetailsList(params?: Api.DataDetailsManage.DataDetailsSearchParams) {
  return request<Api.DataDetailsManage.DataDetailsList>({
    url: '/api/dataContrast/newPageDetailsList',
    method: 'get',
    params
  });
}

/** get Details Count */
export function getDetailsCount(params?: Api.DataDetailsManage.DataDetailsSearchParams) {
  return request<Api.DataDetailsManage.DetailsCount>({
    url: '/api/dataContrast/detailsCount',
    method: 'get',
    params
  });
}

/** get VerifyDetail list */
export function fetchGetVerifyDetailsList(params?: Api.VerifyDetailsManage.VerifyDetailsSearchParams) {
  return request<Api.VerifyDetailsManage.VerifyDetailsList>({
    url: '/api/dataContrast/pageVerifyList',
    method: 'get',
    params
  });
}

/** get VerifyDetailList List */
export function getVerifyDetails(params?: Api.VerifyDetailsManage.VerifyDetailsSearchParams) {
  return request<Api.VerifyDetailsListManage.VerifyDetailsListList>({
    url: '/api/dataContrast/pageVerifyDetailsList',
    method: 'get',
    params
  });
}

interface ReturnT<T> {
  code: number;
  msg?: string;
  content?: T;
}

/** add data verify */
export function addDataVerify(data: VerifyModel) {
  return request<ReturnT<string>>({
    url: '/api/pgCompare/reconcileData',
    method: 'post',
    data
  });
}

/** delete verify */
export function deleteVerify(pid: number) {
  return request<null>({
    url: `/api/pgCompare/removePid?pid=${pid}`,
    method: 'post'
  });
}

/** get Verify Config list */
export function fetchGetVerifyConfigList(params?: Api.VerifyConfigManage.VerifyConfigSearchParams) {
  return request<Api.VerifyConfigManage.VerifyConfigList>({
    url: '/api/configurations/pageList',
    method: 'get',
    params
  });
}

/** delete verify */
export function deleteVerifyConfig(configId: number) {
  return request<null>({
    url: `/api/configurations/removeById?configId=${configId}`,
    method: 'delete'
  });
}

export type VerifyConfigModel = Pick<
  Api.VerifyConfigManage.verifyConfig,
  'configId' | 'configKey' | 'configValue' | 'configType'
>;

/** add verify */
export function addVerifyConfig(data: VerifyConfigModel) {
  return request<null>({
    url: '/api/configurations',
    method: 'post',
    data
  });
}

/** update verify */
export function updateVerifyConfig(data: VerifyConfigModel) {
  return request<null>({
    url: '/api/configurations',
    method: 'put',
    data
  });
}

/** 获取校验日志信息 */
export function compareLogDetail(pid: number) {
  return request<any>({
    url: `/api/pgCompare/compareLogDetail?pid=${pid}`,
    method: 'get'
  });
}

/** 获取日志信息 */
export function logDetail(params: any) {
  return request<any>({
    url: '/api/dataContrast/logDetail',
    method: 'get',
    params
  });
}
