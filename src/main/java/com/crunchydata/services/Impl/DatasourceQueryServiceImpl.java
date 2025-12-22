package com.crunchydata.services.Impl;

import cn.hutool.core.util.ObjectUtil;
import com.crunchydata.models.JobJdbcDatasource;
import com.crunchydata.services.DatasourceQueryService;
import com.crunchydata.services.JobJdbcDatasourceService;
import com.crunchydata.utils.JdbcConstants;
import com.crunchydata.utils.tool.QueryToolFactory;
import com.crunchydata.utils.tool.BaseQueryTool;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@Service
public class DatasourceQueryServiceImpl implements DatasourceQueryService {

    @Autowired
    private JobJdbcDatasourceService jobDatasourceService;

    @Override
    public List<String> getTables(Long id, String tableSchema) throws IOException {
        //获取数据源对象
        JobJdbcDatasource datasource = jobDatasourceService.getById(id);
        //queryTool组装
        if (ObjectUtil.isNull(datasource)) {
            return List.of();
        }
        BaseQueryTool qTool = QueryToolFactory.getByDbType(datasource);
        if(StringUtils.isBlank(tableSchema)){
            return qTool.getTableNames();
        }else{
            return qTool.getTableNames(tableSchema);
        }
    }

    @Override
    public List<String> getTables(JobJdbcDatasource jdbcDatasource) throws IOException {
        //获取数据源对象
        JobJdbcDatasource datasource = (JobJdbcDatasource) jdbcDatasource;
        //queryTool组装
        if (ObjectUtil.isNull(datasource)) {
            return List.of();
        }
        String tableSchema = datasource.getDatabaseName();
        tableSchema = tableSchema.toUpperCase();
        datasource.setDatabaseName(null);

        String userName = datasource.getJdbcUsername();
        //  判断账密是否为密文
        if (userName == null) {
            datasource.setJdbcUsername(datasource.getJdbcUsername());
        }
        String pwd = datasource.getJdbcPassword();
        if (pwd == null) {
            datasource.setJdbcPassword(datasource.getJdbcPassword());
        }

        BaseQueryTool qTool = QueryToolFactory.getByDbType(datasource);

        if(StringUtils.isBlank(tableSchema)){
            return qTool.getTableNames();
        }else{
            return qTool.getTableNames(tableSchema);
        }
    }

    @Override
    public List<String> getTableSchema(Long id) {
        //获取数据源对象
        JobJdbcDatasource datasource = jobDatasourceService.getById(id);
        //queryTool组装
        if (ObjectUtil.isNull(datasource)) {
            return List.of();
        }
        BaseQueryTool qTool = QueryToolFactory.getByDbType(datasource);
        return qTool.getTableSchema();
    }



    @Override
    public List<String> getColumns(Long id, String tableSchema, String tableName) throws IOException {
//        //获取数据源对象
//        JobJdbcDatasource datasource = jobDatasourceService.getById(id);
//        //queryTool组装
//        if (ObjectUtil.isNull(datasource)) {
//            return Lists.newArrayList();
//        }
//        if (JdbcConstants.HBASE.equals(datasource.getDatasource())) {
//            return new HBaseQueryTool(datasource).getColumns(tableName);
//        } else if (JdbcConstants.MONGODB.equals(datasource.getDatasource())) {
//            return new MongoDBQueryTool(datasource).getColumns(tableName);
//        } else {
//            BaseQueryTool queryTool = QueryToolFactory.getByDbType(datasource);
//            return queryTool.getColumnNames(tableSchema, tableName, datasource.getDatasource());
//        }
        return getColumns(id, tableSchema, tableName);
    }

    @Override
    public List<String> getColumnsByQuerySql(Long datasourceId, String querySql) throws SQLException {
//        //获取数据源对象
//        JobJdbcDatasource jdbcDatasource = jobDatasourceService.getById(datasourceId);
//        //queryTool组装
//        if (ObjectUtil.isNull(jdbcDatasource)) {
//            return Lists.newArrayList();
//        }
//        BaseQueryTool queryTool = QueryToolFactory.getByDbType(jdbcDatasource);
//        return queryTool.getColumnsByQuerySql(querySql);
        return getColumnsByQuerySql(datasourceId, querySql);
    }

}

