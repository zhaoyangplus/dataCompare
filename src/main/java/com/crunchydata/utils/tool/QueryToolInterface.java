package com.crunchydata.utils.tool;

import java.util.List;

public interface QueryToolInterface {
//    /**
//     * 构建 tableInfo对象
//     *
//     * @param tableName 表名
//     * @return
//     */
//    TableInfo buildTableInfo(String tableName);
//
//    /**
//     * 获取指定表信息
//     *
//     * @return
//     */
//    List<Map<String, Object>> getTableInfo(String tableName);
//
//    /**
//     * 获取当前schema下的所有表
//     *
//     * @return
//     */
//    List<Map<String, Object>> getTables();
//
//    /**
//     * 根据表名获取所有字段
//     *
//     * @param tableName
//     * @return2
//     */
//    List<ColumnInfo> getColumns(String tableName);
//
//
//    /**
//     * 根据表名和获取所有字段名称（不包括表名）
//     *
//     * @param tableName
//     * @return2
//     */
//    List<String> getColumnNames(String tableSchema,String tableName,String datasource);
//
//
    /**
     * 获取所有可用表名
     *
     * @return2
     */
    List<String> getTableNames(String schema);

    /**
     * 获取所有可用表名
     *
     * @return2
     */
    List<String> getTableNames();
//
//    /**
//     * 通过查询sql获取columns
//     * @param querySql
//     * @return
//     */
//    List<String> getColumnsByQuerySql(String querySql) throws SQLException;
//
//    /**
//     * 获取当前表maxId
//     * @param tableName
//     * @param primaryKey
//     * @return
//     */
//    long getMaxIdVal(String tableName,String primaryKey);
//
//    /**
//     * 获取schema下不包含主键的表
//     * @param schema
//     * @return2
//     */
//    List<String> getNoPrimaryKeyTableNames(String schema);
//
//    /**
//     * 获取所有可用表名(不带schema)
//     * @return
//     */
//    List<String> getTableNamesNoSchema(String schema);
//
//    /**
//     * 返回表行数
//     * @param tableName
//     * @return
//     */
//    Long getTableRows(String tableName);
//
//    /**
//     * 返回表的所有字段以及类型
//     * @param tableSchema
//     * @param tableName
//     * @return
//     */
//    List<Map<String, String>> getTableColumnsAndType(String tableSchema, String tableName);

}

