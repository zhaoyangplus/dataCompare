package com.crunchydata.system.service.Impl;


import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.crunchydata.system.result.Result;
import com.crunchydata.system.domain.SysRole;
import com.crunchydata.system.enums.DelStatusEnums;
import com.crunchydata.system.enums.StatusEnums;
import com.crunchydata.system.exception.GlobalException;
import com.crunchydata.system.exception.GlobalExceptionEnum;
import com.crunchydata.system.mapper.SysRoleMapper;
import com.crunchydata.system.service.SysRoleResourceService;
import com.crunchydata.system.service.SysRoleService;
import com.crunchydata.system.util.JwtTokenUtil;
import com.crunchydata.system.vo.SysRoleVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class SysRoleServiceImpl extends ServiceImpl<SysRoleMapper, SysRole>
        implements SysRoleService {

    final JwtTokenUtil jwtTokenUtil;

    final SysRoleResourceService sysRoleResourceService;

    @Override
    public IPage<SysRole> getPage(Map<String, Object> params) {
        int pageSize = Integer.parseInt(String.valueOf(params.get("size")));
        int pageNum = Integer.parseInt(String.valueOf(params.get("current")));
        LambdaQueryWrapper<SysRole> wrapper = createWrapper(params);

        return page(new Page<>(pageNum, pageSize), wrapper);
    }

    private LambdaQueryWrapper<SysRole> createWrapper(Map<String, Object> params) {
        String roleName = (String) params.get("roleName");
        String roleCode = (String) params.get("roleCode");
        String status = (String) params.get("status");

        LambdaQueryWrapper<SysRole> wrapper = new LambdaQueryWrapper<>();
        wrapper.like(StrUtil.isNotEmpty(roleName), SysRole::getRoleName, roleName);
        wrapper.like(StrUtil.isNotEmpty(roleCode), SysRole::getRoleCode, roleCode);
        wrapper.eq(StrUtil.isNotEmpty(status), SysRole::getStatus, status);
        wrapper.eq( SysRole::getIsDeleted, DelStatusEnums.DISABLE.getCode());

        return wrapper;
    }

    @Override
    public Result<List<SysRoleVO>> getAllRoles(String authorizationHeader) {
        if (authorizationHeader == null || !authorizationHeader.startsWith(jwtTokenUtil.getTokenHead())) {
            throw new GlobalException(GlobalExceptionEnum.ERROR_UNAUTHORIZED.getMessage());
        }

        List<SysRoleVO> sysRoleVOS = new ArrayList<>();

        LambdaQueryWrapper<SysRole> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(SysRole::getStatus, StatusEnums.ENABLE.getCode());

        List<SysRole> list = list(wrapper);
        if (!list.isEmpty()) {
            for (SysRole sysRole : list) {
                SysRoleVO sysRoleVO = new SysRoleVO();
                sysRoleVO.setRoleName(sysRole.getRoleName());
                sysRoleVO.setRoleCode(sysRole.getRoleCode());
                sysRoleVO.setRoleDesc(sysRole.getRoleDesc());
                sysRoleVOS.add(sysRoleVO);
            }
            return Result.success(sysRoleVOS);
        }
        return Result.success();
    }

    @Override
    public List<String> getUserRole(Long id) {
        return baseMapper.getUserRole(id);
    }

    @Override
    public List<SysRole> queryRoleListByRoleCode(List<String> roleCode) {

        LambdaQueryWrapper<SysRole> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        lambdaQueryWrapper.in(SysRole::getRoleCode, roleCode);
        lambdaQueryWrapper.eq(SysRole::getStatus,StatusEnums.ENABLE.getCode());

        return list(lambdaQueryWrapper);
    }

    @Override
    public Result<Boolean> add(SysRole sysRole) {

        if (sysRole.getId() > 0) {
            log.info("修改角色对象入参: {}", JSONUtil.parse(sysRole));
            return Result.success(updateById(sysRole));
        } else {

            sysRole.setStatus(StatusEnums.ENABLE.getCode());
            sysRole.setIsDeleted(DelStatusEnums.DISABLE.getCode());
            sysRole.setType(1);
            log.info("添加角色对象入参: {}", JSONUtil.parse(sysRole));

            save(sysRole);

            LambdaQueryWrapper<SysRole> lambdaQueryWrapper = new LambdaQueryWrapper<>();
            lambdaQueryWrapper.in(SysRole::getRoleCode, sysRole.getRoleCode());
            lambdaQueryWrapper.eq(SysRole::getIsDeleted, DelStatusEnums.DISABLE.getCode());

            SysRole sysRole1 = getOne(lambdaQueryWrapper);


            // 给角色绑定基础资源权限
            sysRoleResourceService.bindingRoleBasicResource(sysRole1.getId(), new ArrayList<>(Collections.singletonList(1L)));

            return Result.success();
        }
    }

    @Override
    public Result<List<Long>> getRoleResourceId(Long roleId) {
        return sysRoleResourceService.getRoleResourceId(roleId);
    }

    @Override
    public Result<Boolean> updateRoleResourceInfo(Long roleId, List<Long> resourceId) {
        log.info("修改角色资源信息入参: 角色ID: {} , 资源ID: {}", roleId, JSONUtil.parse(resourceId));

        sysRoleResourceService.deleteDataByRoleId(roleId);

        sysRoleResourceService.bindingRoleBasicResource(roleId, resourceId);

        return Result.success();
    }

}

