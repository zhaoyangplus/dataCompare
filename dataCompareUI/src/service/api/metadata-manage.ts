import { request } from '../request';

/** 根据数据源id获取 db schema */
export function getDBSchema(datasourceId: number) {
  return request<string[]>({
    url: `api/metadata/newGetDBSchema?datasourceId=${datasourceId}`,
    method: 'get'
  });
}

/** 根据数据源id获取 db schema */
export function getTableNames(datasourceId: number, tableSchema: string) {
  return request<string[]>({
    url: `api/metadata/newGetTables?datasourceId=${datasourceId}&tableSchema=${tableSchema}`,
    method: 'get'
  });
}

/** 根据数据源id和表名获取所有字段 */
export function newGetColumns(datasourceId: number, tableSchema: string, tableName: string) {
  return request<string[]>({
    url: `api/metadata/newGetColumns?datasourceId=${datasourceId}&tableSchema=${tableSchema}&tableName=${tableName}`,
    method: 'get'
  });
}

/** 根据数据源id和sql语句获取所有字段 */
export function newGetColumnsByQuerySql(datasourceId: number, querySql: string) {
  return request<string[]>({
    url: `api/metadata/newGetColumnsByQuerySql?datasourceId=${datasourceId}&querySql=${querySql}`,
    method: 'get'
  });
}
