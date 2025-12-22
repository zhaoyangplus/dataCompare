package com.crunchydata.system.service;


import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.crunchydata.system.result.Result;
import com.crunchydata.system.domain.SysUser;
import com.crunchydata.system.param.CreateUserParam;
import com.crunchydata.system.vo.LoginResult;
import com.crunchydata.system.vo.SysUserVO;
import com.crunchydata.system.vo.UserInfoVO;

import java.util.Map;

public interface SysUserService extends IService<SysUser> {

    /**
     * 分页获取数据
     *
     * @param params 查询参数
     * @return IPage<SysUserVO>
     */
    IPage<SysUserVO> getList(Map<String, Object> params);

    /**
     * 登录
     *
     * @param username 用户名
     * @param password 密码
     * @return 生成的JWT的token
     */
    LoginResult login(String username, String password);

    /**
     * 创建用户
     *
     * @param createUserParam 创建用户信息
     * @return 创建结果
     */
    Result<String> createUser(CreateUserParam createUserParam);

    /**
     * 获取用户信息
     *
     * @return UserInfoVO
     */
    Result<UserInfoVO> getUserInfo(String authorizationHeader);

    /**
     * 修改用户信息
     *
     * @param createUserParam 修改用户信息
     * @return 修改结果
     */
    Result<String> updateUser(CreateUserParam createUserParam);
}

