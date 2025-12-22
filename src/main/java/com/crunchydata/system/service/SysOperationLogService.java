package com.crunchydata.system.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.crunchydata.system.domain.SysOperationLog;

import java.util.List;

public interface SysOperationLogService extends IService<SysOperationLog> {

    /**
     * 清空
     *
     * @return
     */
    int clean();

    /**
     * 导出
     *
     * @param sysOperationLog
     * @return
     */
    List<SysOperationLog> getExportList(SysOperationLog sysOperationLog);

}
