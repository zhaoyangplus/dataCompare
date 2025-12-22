package com.crunchydata;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@MapperScan({
        "com.crunchydata.mapper",        // 第一个 Mapper 包（DCConfigurationsMapper 所在）
        "com.crunchydata.system.mapper"  // 第二个 Mapper 包（SysUserMapper 所在）
})
@SpringBootApplication
public class DataCompareApplication {

    public static void main(String[] args) {
        SpringApplication.run(DataCompareApplication.class, args);
    }
}
