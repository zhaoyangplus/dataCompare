package com.crunchydata.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.crunchydata.system.mybatis.base.BaseEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@TableName(value = "dc_user", autoResultMap = true)
@EqualsAndHashCode(callSuper = true)
public class SysUser extends BaseEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String nickName;

    private String userName;

    private String password;

    private String userGender;

    private String status;

    private String otpSecret;

    private String userPhone;

    private String userEmail;

    private LocalDateTime lastLoginTime;

    private String lastLoginIp;
}
