package com.crunchydata.system.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class SysMenuVO extends Meta implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;

    private Integer parentId;

    private String uiPath;

    private String menuType;

    private String status;

    private String menuName;

    private String routeName;

    private String routePath;

    private String component;

    private Integer weight;

    private List<SysMenuVO> children;

}
