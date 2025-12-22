package com.crunchydata.system.vo;

import com.crunchydata.system.mybatis.base.BaseEntity;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class SysUserVO extends BaseEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;

    private String nickName;

    private String userName;

    private String userGender;

    private String status;

    private String userPhone;

    private String userEmail;

    private LocalDateTime lastLoginTime;

    private String lastLoginIp;

    private List<String> userRoles;
}
