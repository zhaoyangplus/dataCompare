import { request } from '../request';

export type ProjectModel = Pick<Api.ProjectManage.Project, 'id' | 'name' | 'description'>;

/** get project list */
export function fetchGetProjectList(params?: Api.ProjectManage.ProjectSearchParams) {
  return request<Api.ProjectManage.ProjectList>({
    url: '/api/jobProject/pageList',
    method: 'get',
    params
  });
}

/** add project */
export function addProject(data: ProjectModel) {
  return request<null>({
    url: '/api/jobProject',
    method: 'post',
    data
  });
}

/** update project */
export function updateProject(data: ProjectModel) {
  return request<null>({
    url: '/api/jobProject',
    method: 'put',
    data
  });
}

/** delete project */
export function deleteProject(id: number) {
  return request<null>({
    url: `/api/jobProject/removeById?id=${id}`,
    method: 'delete'
  });
}

/** delete project List */
export function delProject(id: number) {
  return request<null>({
    url: `/api/jobProject/?idList=${id}`,
    method: 'delete'
  });
}

/** batchDelete project */

/** getJobProjectList */
export function getJobProjectList(params?: any) {
  return request<any>({
    url: 'api/jobProject/newList',
    method: 'get',
    params
  });
}

/** auto project start */
export function triggerStart(id: number) {
  return request<null>({
    url: `/api/automation/triggerStart?id=${id}`,
    method: 'post'
  });
}

/** auto project stop */
export function triggerStop(id: number) {
  return request<null>({
    url: `/api/automation/triggerStop?id=${id}`,
    method: 'post'
  });
}

type AutoProjectModel = Pick<
  Api.AutoProjectCreate.AutoProject,
  | 'dataSource'
  | 'description'
  | 'jobGroup'
  | 'jvmParam'
  | 'datasourceId_1'
  | 'datasourceId_2'
  | 'schemaList'
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

/** auto create project */
export function addAutoProject(data: AutoProjectModel) {
  return request<null>({
    url: '/api/automation/create',
    method: 'post',
    data
  });
}
