package com.crunchydata.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.crunchydata.system.domain.SysOperationLog;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SysOperationLogMapper extends BaseMapper<SysOperationLog> {

    int clean();

}
