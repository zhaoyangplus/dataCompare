package com.crunchydata.services;

import java.util.Map;

public interface JobDataContrastService {

    /**
     * 日志信息
     * @param logFileName
     * @return
     */
    Map<String, Object> logDetail(String logFileName);
}
