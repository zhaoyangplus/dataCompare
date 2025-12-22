package com.crunchydata.system.service.Impl;

import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.crunchydata.system.domain.SysRoleResource;
import com.crunchydata.system.enums.DelStatusEnums;
import com.crunchydata.system.exception.GlobalException;
import com.crunchydata.system.mapper.SysRoleResourceMapper;
import com.crunchydata.system.result.Result;
import com.crunchydata.system.service.SysRoleResourceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class SysRoleResourceServiceImpl extends ServiceImpl<SysRoleResourceMapper, SysRoleResource>
        implements SysRoleResourceService {

    /**
     * 绑定角色基础资源信息
     *
     * @param roleId 角色Id
     * @return boolean
     */
    @Override
    @Transactional(rollbackFor = GlobalException.class)
    public Result<Boolean> bindingRoleBasicResource(Long roleId, List<Long> longList) {

        log.info("绑定角色基础资源信息 -> 角色Id: {} , 资源信息: {}", roleId, JSONUtil.parse(longList));

        List<SysRoleResource> sysRoleResourceList = new ArrayList<>();

        longList.forEach(item -> {
            SysRoleResource sysRoleResource = new SysRoleResource();
            sysRoleResource.setRoleId(roleId);
            sysRoleResource.setResourceId(item);
            sysRoleResource.setIsDeleted(DelStatusEnums.DISABLE.getCode());
            sysRoleResourceList.add(sysRoleResource);
        });

        return Result.success(saveBatch(sysRoleResourceList));
    }

    @Override
    public Result<List<Long>> getRoleResourceId(Long roleId) {


        LambdaQueryWrapper<SysRoleResource> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(SysRoleResource::getRoleId, roleId);
        queryWrapper.eq(SysRoleResource::getIsDeleted, DelStatusEnums.DISABLE.getCode());

        List<SysRoleResource> roleResources = list(queryWrapper);

        List<Long> longList = new ArrayList<>();

        for (SysRoleResource roleResource : roleResources) {
            longList.add(roleResource.getResourceId());
        }

        return Result.success(longList);
    }

    @Override
    public Boolean deleteDataByRoleId(Long roleId) {

        log.info("删除角色下所有资源信息 -> 角色ID: {}", roleId);

        LambdaQueryWrapper<SysRoleResource> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(SysRoleResource::getRoleId, roleId);

        return (Boolean) remove(queryWrapper);
    }
}
