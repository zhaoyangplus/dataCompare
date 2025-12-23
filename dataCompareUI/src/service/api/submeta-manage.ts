import { request } from '../request';

/** 校验源端与目标端的表信息是否一致 */
export function checkTableDifference(data: any) {
  return request<any>({
    url: 'api/creMetaData/checkTableDifference',
    method: 'post',
    data
  });
}

/** 获取日志信息 */
// export function logDetail(params: any) {
//   return request<any>({
//     url: 'api/creMetaData/logDetail',
//     method: 'get',
//     params
//   });
// }

export type SubMetaAddModel = Pick<
  Api.SubMetaAdd.subMetaAdd,
  | 'datasourceId_1'
  | 'schema'
  | 'metaIds'
  | 'datasourceId_2'
  | 'templateId'
  | 'logFileName'
  | 'tablePartNameSwitch'
  | 'tableAndColSwitch'
  | 'mysqlCommandSwitch'
  | 'mysqlIp'
  | 'mysqlPort'
  | 'mysqlUser'
  | 'mysqlPwd'
  | 'selectAndSql'
>;

/** 请求生成元数据任务 */
export function addSubMetaTask(data: SubMetaAddModel) {
  return request<null>({
    url: '/api/creMetaData/create',
    method: 'post',
    data
  });
}

/** 获取脚本文件内容信息 */
export function readFileContent(data: any) {
  return request<any>({
    url: 'api/creMetaData/readFileContent',
    method: 'post',
    data
  });
}

/** 写入脚本文件内容信息 */
export function writeFileContent(data: any) {
  return request<any>({
    url: 'api/creMetaData/writeFileContent',
    method: 'post',
    data
  });
}

/** 获取版本信息 */
export function getVersionInfo() {
  return request<any>({
    url: 'api/creMetaData/getVersionInfo',
    method: 'get'
  });
}

/** 获取元数据生成的历史记录列表 */
export function getMetaDataHistoryLogList(params: any) {
  return request<any>({
    url: 'api/commonData/pageList',
    method: 'get',
    params
  });
}
