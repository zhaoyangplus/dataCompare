package com.crunchydata.system.param;

import lombok.Data;

@Data
public class SysUserLoginParam {

    private String userName;

    private String password;

    /**
     * 图形验证码
     */
    private String code;

    /**
     * 唯一标识
     */
    private String uuid = "";

}
