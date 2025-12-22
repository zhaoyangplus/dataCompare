package com.crunchydata.system.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.crunchydata.system.param.CreateUserParam;
import com.crunchydata.system.result.Result;
import com.crunchydata.system.service.SysUserService;
import com.crunchydata.system.vo.SysUserVO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/systemManage")
public class SysUserController {

    private final SysUserService sysUserService;

    @GetMapping(value = "/getUserList")
    public Result<IPage<SysUserVO>> list(@RequestParam Map<String, Object> params) {
        IPage<SysUserVO> sysUsers = sysUserService.getList(params);
        return Result.success(sysUsers);
    }

    @PostMapping(value = "/createUser")
    public Result<String> createUser(@RequestBody CreateUserParam createUserParam) {
        return sysUserService.createUser(createUserParam);
    }

    @PostMapping(value = "/update")
    public Result<String> updateUser(@RequestBody CreateUserParam createUserParam) {
        return sysUserService.updateUser(createUserParam);
    }

}
