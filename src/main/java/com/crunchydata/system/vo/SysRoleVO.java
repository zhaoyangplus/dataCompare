package com.crunchydata.system.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;

@Data
@EqualsAndHashCode(callSuper = false)
public class SysRoleVO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private String roleName;

    private String roleCode;

    private String roleDesc;
}
