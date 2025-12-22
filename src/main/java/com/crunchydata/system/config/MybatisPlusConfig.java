package com.crunchydata.system.config;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.core.handlers.MetaObjectHandler;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import com.crunchydata.system.mybatis.config.MybatisPlusMetaObjectHandler;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 *  MybatisPlusConfig
 */
@EnableTransactionManagement
@Configuration
//@MapperScan("com.crunchydata.system.mapper")
// 临时处理，后续调整
@MapperScan({
        "com.crunchydata.mapper",        // 第一个 Mapper 包（DCConfigurationsMapper 所在）
        "com.crunchydata.system.mapper"  // 第二个 Mapper 包（SysUserMapper 所在）
})
public class MybatisPlusConfig {

    /**
     * 新的分页插件
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.POSTGRE_SQL));
        return interceptor;
    }

    /**
     * 审计字段自动填充
     * @return {@link MetaObjectHandler}
     */
    @Bean
    public MybatisPlusMetaObjectHandler dbFieldFillHandler() {
        return new MybatisPlusMetaObjectHandler();
    }

}
