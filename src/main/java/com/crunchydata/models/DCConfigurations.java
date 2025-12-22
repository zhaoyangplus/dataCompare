package com.crunchydata.models;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.ibm.db2.cmx.annotation.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@TableName("dc_configurations")
public class DCConfigurations {
    @TableId(value = "config_id", type = IdType.AUTO)
    private Long configId;
    private String configKey;
    private String configValue;
    @TableField("config_type")
    private String configType;
    private Long projectId;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss:SSS", timezone = "GMT+8")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss:SSS", timezone = "GMT+8")
    private LocalDateTime updatedAt;
}
