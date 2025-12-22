package com.crunchydata.system.param;

import lombok.Data;

import java.util.List;

@Data
public class RoleParam {


    private Long roleId;

    private List<Long> resourceId;

}
