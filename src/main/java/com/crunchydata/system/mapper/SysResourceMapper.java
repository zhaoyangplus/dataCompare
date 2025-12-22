package com.crunchydata.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.crunchydata.system.domain.SysResource;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SysResourceMapper extends BaseMapper<SysResource> {

    List<SysResource> getUserRoutes(String id);

    List<String> getUserPermissions(Long id);

}
