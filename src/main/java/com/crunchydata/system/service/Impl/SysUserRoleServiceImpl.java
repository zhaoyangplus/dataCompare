package com.crunchydata.system.service.Impl;


import cn.hutool.json.JSONUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.crunchydata.system.result.Result;
import com.crunchydata.system.domain.SysRole;
import com.crunchydata.system.domain.SysUserRole;
import com.crunchydata.system.enums.DelStatusEnums;
import com.crunchydata.system.exception.GlobalException;
import com.crunchydata.system.mapper.SysUserRoleMapper;
import com.crunchydata.system.service.SysRoleService;
import com.crunchydata.system.service.SysUserRoleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class SysUserRoleServiceImpl extends ServiceImpl<SysUserRoleMapper, SysUserRole>
        implements SysUserRoleService {


    final SysRoleService sysRoleService;

    public void delUserRoleInfo(Long userId) {

        log.info("根据用户ID删除用户角色: {}", userId);

        LambdaQueryWrapper<SysUserRole> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(SysUserRole::getUserId, userId);

        baseMapper.delete(queryWrapper);
    }

    /**
     * 绑定用户角色
     *
     * @param roleCodes 角色code集合
     * @param userId    用户Id
     * @return boolean
     */
    @Override
    @Transactional(rollbackFor = GlobalException.class)
    public Result<Boolean> bindingUserRoles(List<String> roleCodes, Long userId) {

        // 先删除
        delUserRoleInfo(userId);

        List<SysRole> sysRoles = sysRoleService.queryRoleListByRoleCode(roleCodes);

        if (sysRoles.isEmpty()) {
            log.error("bindingUserRoles -> 入参: {}", JSONUtil.parse(roleCodes));
            throw new GlobalException("未找到传入角色CODE信息");
        }

        List<SysUserRole> userRoles = new ArrayList<>();

        for (SysRole sysRole : sysRoles) {
            SysUserRole sysUserRole = new SysUserRole();
            sysUserRole.setRoleId(sysRole.getId());
            sysUserRole.setUserId(userId);
            sysUserRole.setIsDeleted(DelStatusEnums.DISABLE.getCode());

            userRoles.add(sysUserRole);
        }

        log.info("绑定用户角色 -> saveBatch: {}", JSONUtil.parse(userRoles));

        return Result.success(saveBatch(userRoles));
    }

}
