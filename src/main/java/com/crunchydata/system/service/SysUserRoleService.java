package com.crunchydata.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.crunchydata.system.result.Result;
import com.crunchydata.system.domain.SysUserRole;

import java.util.List;

public interface SysUserRoleService  extends IService<SysUserRole> {

    /**
     * 绑定用户角色
     *
     * @param roleCodes 角色code集合
     * @param userId 用户Id
     * @return boolean
     */
    Result<Boolean> bindingUserRoles(List<String> roleCodes, Long userId);

}
