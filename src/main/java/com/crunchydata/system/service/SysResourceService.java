package com.crunchydata.system.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.crunchydata.system.domain.SysResource;
import com.crunchydata.system.result.Result;
import com.crunchydata.system.vo.SysMenuTreeVO;
import com.crunchydata.system.vo.SysMenuVO;
import com.crunchydata.system.vo.SysRoutesVO;

import java.util.List;
import java.util.Map;

public interface SysResourceService extends IService<SysResource> {

    Result<Map<String, Object>> getUserRoutes(String authorizationHeader);

    Result<IPage<SysMenuVO>> getMenuList(Map<String, Object> params);

    Result<List<SysRoutesVO>> getConstantRoutes();

    List<String> getUserPermissions(Long id);

    Result<List<String>> getAllPages();

    Result<List<SysMenuTreeVO>> getMenuTree();

    Result<Integer> add(SysResource sysResource);
}
