package com.crunchydata.system.vo;

import cn.hutool.json.JSON;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = false)
public class SysRoutesVO implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    private String name;

    private String path;

    private String component;

    private JSON meta;

    private List<SysRoutesVO> children;

}
