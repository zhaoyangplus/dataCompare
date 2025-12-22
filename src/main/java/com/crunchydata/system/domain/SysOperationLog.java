package com.crunchydata.system.domain;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.crunchydata.system.mybatis.base.BaseEntity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.io.Serial;
import java.io.Serializable;

@Data
@TableName(value = "dc_operation_log", autoResultMap = true)
@EqualsAndHashCode(callSuper = true)
public class SysOperationLog extends BaseEntity implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private Integer BusinessType;

    private String method;

    private String requestMethod;

    private String description;

    private String reqIp;

    private String operName;

    private String operLocation;

    private String reqParam;

    private String resp;

    private String errorMsg;

    private String status;

    /**
     * 开始时间
     */
    @JsonIgnore
    @TableField(exist = false)
    private String beginTime;

    /**
     * 结束时间
     */
    @JsonIgnore
    @TableField(exist = false)
    private String endTime;

}
