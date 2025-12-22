package com.crunchydata.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.crunchydata.system.mybatis.base.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;

@Data
@TableName(value = "dc_resource", autoResultMap = true)
@EqualsAndHashCode(callSuper = true)
public class SysResource extends BaseEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private Integer parentId;

    private String uiPath;

    private String menuType;

    private String status;

    private String menuName;

    private String routeName;

    private String routePath;

    private String component;

    private String meta;

    private Integer weight;
}
