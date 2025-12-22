package com.crunchydata.system.service.Impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.crunchydata.system.domain.SysOperationLog;
import com.crunchydata.system.mapper.SysOperationLogMapper;
import com.crunchydata.system.service.SysOperationLogService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class SysOperationLogServiceImpl extends ServiceImpl<SysOperationLogMapper, SysOperationLog>
        implements SysOperationLogService {

    @Override
    public int clean() {
        return this.baseMapper.clean();
    }

    @Override
    public List<SysOperationLog> getExportList(SysOperationLog sysOperationLog) {
        return null;
    }
}
