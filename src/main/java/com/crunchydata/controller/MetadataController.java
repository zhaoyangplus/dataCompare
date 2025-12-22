package com.crunchydata.controller;

import com.crunchydata.models.JobJdbcDatasource;
import com.crunchydata.result.ReturnT;
import com.crunchydata.services.DatasourceQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("api/metadata")
public class MetadataController {

    @Autowired
    private DatasourceQueryService datasourceQueryService;

//    /**
//     * 根据数据源id获取mongo库名
//     *
//     * @param datasourceId
//     * @return
//     */
//    @GetMapping("/getDBs")
//    public ReturnT<List<String>> getDBs(Long datasourceId) throws IOException {
//        return new ReturnT<>(datasourceQueryService.getDBs(datasourceId));
//    }
//
//
//    /**
//     * 根据数据源id,dbname获取CollectionNames
//     *
//     * @param datasourceId
//     * @return
//     */
//    @GetMapping("/collectionNames")
//    public ReturnT<List<String>> getCollectionNames(Long datasourceId,String dbName) throws IOException {
//        return new ReturnT<>(datasourceQueryService.getCollectionNames(datasourceId,dbName));
//    }
//
//    /**
//     * 获取PG table schema
//     *
//     * @param datasourceId
//     * @return
//     */
//    @GetMapping("/getDBSchema")
//    public ReturnT<List<String>> getTableSchema(Long datasourceId) {
//        return new ReturnT<>(datasourceQueryService.getTableSchema(datasourceId));
//    }

    /**
     * 获取PG table schema
     *
     * @param datasourceId
     * @return
     */
    @GetMapping("/newGetDBSchema")
    public ReturnT<List<String>> newGetDBSchema(Long datasourceId) {
        return new ReturnT<>(datasourceQueryService.getTableSchema(datasourceId));
    }

//    /**
//     * 根据数据源id获取可用表名
//     *
//     * @param datasourceId
//     * @return
//     */
//    @GetMapping("/getTables")
//    public ReturnT<List<String>> getTableNames(Long datasourceId,String tableSchema) throws IOException {
//        return new ReturnT<>(datasourceQueryService.getTables(datasourceId,tableSchema));
//    }

    /**
     * 根据数据源id获取可用表名 (兼容新前端架构)
     *
     * @param datasourceId
     * @return
     */
    @GetMapping("/newGetTables")
    public ReturnT<List<String>> newGetTables(Long datasourceId,String tableSchema) throws IOException {
        return new ReturnT(datasourceQueryService.getTables(datasourceId,tableSchema));
    }

    @PostMapping("/getTablesPy")
    public ReturnT<List<String>> getTableNames(@RequestBody JobJdbcDatasource jobJdbcDatasource) throws IOException {
        return new ReturnT<>(datasourceQueryService.getTables(jobJdbcDatasource));
    }

    /**
     * 根据数据源id和表名获取所有字段 (兼容新前端架构)
     *
     * @param datasourceId
     * @return
     */
    @GetMapping("/newGetColumns")
    public ReturnT<List<String>> newGetColumns(Long datasourceId, String tableSchema, String tableName) throws IOException {
        return new ReturnT(datasourceQueryService.getColumns(datasourceId, tableSchema, tableName));
    }

//    /**
//     * 根据数据源id和表名获取所有字段
//     *
//     * @param datasourceId 数据源id
//     * @param tableName    表名
//     * @return
//     */
//    @GetMapping("/getColumns")
//    public ReturnT<List<String>> getColumns(Long datasourceId, String tableSchema, String tableName) throws IOException {
//        return new ReturnT<>(datasourceQueryService.getColumns(datasourceId, tableSchema, tableName));
//    }

    /**
     * 根据数据源id和sql语句获取所有字段 (兼容新前端架构)
     *
     * @param datasourceId 数据源id
     * @param querySql     表名
     * @return
     */
    @GetMapping("/newGetColumnsByQuerySql")
    public ReturnT<List<String>> newGetColumnsByQuerySql(Long datasourceId, String querySql) throws SQLException {
        return new ReturnT(datasourceQueryService.getColumnsByQuerySql(datasourceId, querySql));
    }

//    /**
//     * 根据数据源id和sql语句获取所有字段
//     *
//     * @param datasourceId 数据源id
//     * @param querySql     表名
//     * @return
//     */
//    @GetMapping("/getColumnsByQuerySql")
//    public ReturnT<List<String>> getColumnsByQuerySql(Long datasourceId, String querySql) throws SQLException {
//        return new ReturnT<>(datasourceQueryService.getColumnsByQuerySql(datasourceId, querySql));
//    }

}

