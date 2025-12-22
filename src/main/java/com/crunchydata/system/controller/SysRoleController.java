package com.crunchydata.system.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.crunchydata.system.result.Result;
import com.crunchydata.system.domain.SysRole;
import com.crunchydata.system.service.SysRoleService;
import com.crunchydata.system.vo.SysRoleVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/systemManage")
public class SysRoleController {

    private final SysRoleService sysRoleService;

    @GetMapping(value = "/getRoleList")
    public Result<IPage<SysRole>> list(@RequestParam Map<String, Object> params) {
        IPage<SysRole> sysUsers = sysRoleService.getPage(params);
        return Result.success(sysUsers);
    }

    @GetMapping(value = "/getAllRoles")
    public Result<List<SysRoleVO>> getAllRoles(@RequestHeader("Authorization") String authorizationHeader) {
        return sysRoleService.getAllRoles(authorizationHeader);
    }

    @PostMapping(value = "/addRole")
    public Result<Boolean> add(@RequestBody SysRole sysRole) {
        return sysRoleService.add(sysRole);
    }

//    @PostMapping(value = "/getRoleResourceId")
//    public Result<List<Long>> getRoleResourceId(@RequestBody Long roleId) {
//        return sysRoleService.getRoleResourceId(roleId);
//    }
//
//    @PostMapping(value = "/updateRoleResourceInfo")
//    public Result<Boolean> updateRoleResourceInfo(@RequestBody RoleParam roleParam) {
//        return sysRoleService.updateRoleResourceInfo(roleParam.getRoleId(), roleParam.getResourceId());
//    }

}
