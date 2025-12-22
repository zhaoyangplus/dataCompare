package com.crunchydata.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.crunchydata.system.domain.SysRoleResource;
import com.crunchydata.system.result.Result;

import java.util.List;

public interface SysRoleResourceService extends IService<SysRoleResource> {

    /**
     * 绑定角色资源信息
     *
     * @param roleId 角色Id
     * @param longList 资源Id
     * @return boolean
     */
    Result<Boolean> bindingRoleBasicResource(Long roleId, List<Long> longList);

    Result<List<Long>> getRoleResourceId(Long roleId);

    Boolean deleteDataByRoleId(Long roleId);

}
