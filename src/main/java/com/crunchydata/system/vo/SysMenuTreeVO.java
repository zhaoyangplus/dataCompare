package com.crunchydata.system.vo;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;


@Data
@EqualsAndHashCode(callSuper = false)
public class SysMenuTreeVO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private Long id;

    private Integer pId;

    private String label;

    private List<SysMenuTreeVO> children;

}
