package com.crunchydata.services;

import com.crunchydata.models.JobJdbcDatasource;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

public interface DatasourceQueryService {

    /**
     * 根据数据源表id查询出可用的表
     *
     * @param id
     * @return
     */
    List<String> getTables(Long id,String tableSchema) throws IOException;

    List<String> getTables(JobJdbcDatasource jdbcDatasource) throws IOException;


    /**
     * 根据数据源id，表名查询出该表所有字段
     *
     * @param id
     * @return
     */
    List<String> getColumns(Long id, String tableSchema, String tableName) throws IOException;

    /**
     * 根据 sql 语句获取字段
     *
     * @param datasourceId
     * @param querySql
     * @return
     */
    List<String> getColumnsByQuerySql(Long datasourceId, String querySql) throws SQLException;

    /**
     * 获取PG table schema
     * @param id
     * @return
     */
    List<String> getTableSchema(Long id);

}

