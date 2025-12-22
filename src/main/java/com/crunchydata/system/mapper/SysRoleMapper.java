package com.crunchydata.system.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.crunchydata.system.domain.SysRole;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SysRoleMapper  extends BaseMapper<SysRole> {
    /**
     * 获取用户角色
     *
     * @param id 用户id
     * @return List<String>
     */
    List<String> getUserRole(Long id);

}
