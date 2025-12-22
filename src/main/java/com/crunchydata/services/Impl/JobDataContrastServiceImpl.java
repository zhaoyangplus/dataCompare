package com.crunchydata.services.Impl;

import com.crunchydata.services.JobDataContrastService;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

@Service
public class JobDataContrastServiceImpl implements JobDataContrastService {
    @Override
    public Map<String, Object> logDetail(String logFileName) {
        Map<String, Object> result = new HashMap<>();
        String resourcePath = "/meta/log/" + logFileName + ".log";
        String resolvedPath = null;

        URL resourceUrl = this.getClass().getResource(resourcePath);
        if (resourceUrl != null) {
            resolvedPath = resourceUrl.toString();

            if ("file".equalsIgnoreCase(resourceUrl.getProtocol())) {
                try {
                    resolvedPath = resourceUrl.toURI().getPath();
                } catch (URISyntaxException e) {
                    result.put("success", false);
                    result.put("error", "无法解析资源URI: " + e.getMessage());
                    return result;
                }
            }
        } else {
            result.put("success", false);
            result.put("error", "警告：资源URL为null，文件可能不存在或路径错误");
            return result;
        }

        StringBuilder contentBuilder = new StringBuilder();
        try (InputStream inputStream = this.getClass().getResourceAsStream(resourcePath)) {
            if (inputStream == null) {
                result.put("success", false);
                result.put("error", "no log file");
                result.put("resourcePath", resolvedPath);
                return result;
            }

            contentBuilder.append("-----------------------------------------------------任务正在执行中...-----------------------------------------------------\n");

            try (BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    contentBuilder.append(line).append("\n");
                }
            }
        } catch (IOException e) {
            result.put("success", false);
            result.put("error", "read error: " + e.getMessage());
            result.put("resourcePath", resolvedPath);
            return result;
        }

        result.put("success", true);
        result.put("logContent", contentBuilder.toString());
        result.put("resourcePath", resolvedPath);
        return result;
    }
}
