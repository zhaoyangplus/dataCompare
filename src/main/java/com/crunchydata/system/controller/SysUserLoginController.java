package com.crunchydata.system.controller;

import com.crunchydata.system.result.Result;
import com.crunchydata.system.param.SysUserLoginParam;
import com.crunchydata.system.service.SysUserService;
import com.crunchydata.system.vo.LoginResult;
import com.crunchydata.system.vo.UserInfoVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class SysUserLoginController {

    private final SysUserService sysUserService;

    @PostMapping(value = "/login")
    public Result<LoginResult> login(@RequestBody SysUserLoginParam sysUserLoginParam) {
        return Result.success(sysUserService.login(sysUserLoginParam.getUserName(),
                sysUserLoginParam.getPassword()));
    }

    @GetMapping(value = "/getUserInfo")
    public Result<UserInfoVO> getUserInfo(@RequestHeader("Authorization") String authorizationHeader) {
        return sysUserService.getUserInfo(authorizationHeader);
    }

}
