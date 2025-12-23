import { request } from '../request';

/** get role list */
export function fetchGetRoleList(params?: Api.SystemManage.RoleSearchParams) {
  return request<Api.SystemManage.RoleList>({
    url: '/systemManage/getRoleList',
    method: 'get',
    params
  });
}

/**
 * get all roles
 *
 * these roles are all enabled
 */
export function fetchGetAllRoles() {
  return request<Api.SystemManage.AllRole[]>({
    url: '/systemManage/getAllRoles',
    method: 'get'
  });
}

/**
 * add Role
 *
 * @param sysRole role info
 */
export function addRole(sysRole: Api.SystemManage.Role) {
  return request({
    url: '/systemManage/addRole',
    method: 'post',
    data: sysRole
  });
}

/** get user list */
export function fetchGetUserList(params?: Api.SystemManage.UserSearchParams) {
  return request<Api.SystemManage.UserList>({
    url: '/systemManage/getUserList',
    method: 'get',
    params
  });
}

/**
 * create user
 *
 * @param sysRole role info
 */
export function createUser(user: Api.SystemManage.User) {
  return request({
    url: '/systemManage/createUser',
    method: 'post',
    data: user
  });
}

/**
 * update user
 *
 * @param sysRole role info
 */
export function updateUser(user: Api.SystemManage.User) {
  return request({
    url: '/systemManage/update',
    method: 'post',
    data: user
  });
}

/** add menu */
export function addResource(params?: Api.SystemManage.Menu) {
  return request({
    url: '/sys/resource/add',
    method: 'post',
    data: params
  });
}

/** get menu list */
export function fetchGetMenuList() {
  return request<Api.SystemManage.MenuList>({
    url: '/systemManage/getMenuList/v2',
    method: 'get'
  });
}

/** get all pages */
export function fetchGetAllPages() {
  return request<string[]>({
    url: '/systemManage/getAllPages',
    method: 'get'
  });
}

/** get menu tree */
export function fetchGetMenuTree() {
  return request<Api.SystemManage.MenuTree[]>({
    url: '/systemManage/getMenuTree',
    method: 'get'
  });
}

/** get role resource id */
export function getRoleResourceId(roleId: number) {
  return request({
    url: '/systemManage/getRoleResourceId',
    method: 'post',
    data: roleId
  });
}

/** update role resource info */
export function updateRoleResourceInfo(roleId: number, resourceId: number[]) {
  return request({
    url: '/systemManage/updateRoleResourceInfo',
    method: 'post',
    data: {
      roleId,
      resourceId
    }
  });
}



// import { request } from '../request';

// /** get role list */
// export function fetchGetRoleList(params?: Api.SystemManage.RoleSearchParams) {
//   return request<Api.SystemManage.RoleList>({
//     url: '/systemManage/getRoleList',
//     method: 'get',
//     params
//   });
// }

// /**
//  * get all roles
//  *
//  * these roles are all enabled
//  */
// // export function fetchGetAllRoles() {
// //   return request<Api.SystemManage.AllRole[]>({
// //     url: '/systemManage/getAllRoles',
// //     method: 'get'
// //   });
// // }

// export function fetchGetAllRoles() {
//   return request<Api.SystemManage.AllRole[]>({
//     url: '/api/user/getAllRoles',
//     method: 'get'
//   });
// }

// /** get user list */
// export function fetchGetUserList(params?: Api.SystemManage.UserSearchParams) {
//   return request<Api.SystemManage.UserList>({
//     url: '/api/user/newPageList',
//     method: 'get',
//     params
//   });
// }

// /** get menu list */
// export function fetchGetMenuList() {
//   return request<Api.SystemManage.MenuList>({
//     url: '/systemManage/getMenuList/v2',
//     method: 'get'
//   });
// }

// /** get all pages */
// export function fetchGetAllPages() {
//   return request<string[]>({
//     url: '/systemManage/getAllPages',
//     method: 'get'
//   });
// }

// /** get menu tree */
// export function fetchGetMenuTree() {
//   return request<Api.SystemManage.MenuTree[]>({
//     url: '/systemManage/getMenuTree',
//     method: 'get'
//   });
// }

// export type UserModel = Pick<
//   Api.SystemManage.User,
//   'id' | 'username' | 'userGender' | 'nickName' | 'userRoles' | 'status' | 'password'
// >;
// /** add user */
// export function addUser(data: UserModel) {
//   return request<null>({
//     url: '/api/user/add',
//     method: 'post',
//     data
//   });
// }

// /** update user */
// export function updateUser(data: UserModel) {
//   return request<null>({
//     url: '/api/user/update',
//     method: 'post',
//     data
//   });
// }

// export function deleteUser(id: number) {
//   return request<null>({
//     url: `/api/user/remove?id=${id}`,
//     method: 'post'
//   });
// }

// /** get jobRegistry list */
// export function fetchGetResourceList(params?: Api.JobRegistryManage.JobRegistrySearchParams) {
//   return request<Api.JobRegistryManage.JobRegistryList>({
//     url: '/api/jobRegistry/pageList',
//     method: 'get',
//     params
//   });
// }
