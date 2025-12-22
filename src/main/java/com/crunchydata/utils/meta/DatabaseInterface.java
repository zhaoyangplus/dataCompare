package com.crunchydata.utils.meta;

public interface DatabaseInterface {

    /**
     * Returns the minimal SQL to launch in order to determine the layout of the resultset for a given com.com.wugui.datax.admin.tool.database table
     *
     * @param tableName The name of the table to determine the layout for
     * @return The SQL to launch.
     */
    String getSQLQueryFields(String tableName);

    /**
     * 获取主键字段
     *
     * @return
     */
    String getSQLQueryPrimaryKey();

    String getSQLQueryTableNameComment();

    String getSQLQueryTablesNameComments();

    /**
     * 获取所有表名的sql
     *
     * @return
     */
    String getSQLQueryTables(String... tableSchema);

    /**
     * 获取所有表名的sql
     *
     * @return
     */
    String getSQLQueryTables();

    /**
     * 获取 Table schema
     *
     * @return
     */
    String getSQLQueryTableSchema(String... args);
    /**
     * 获取所有的字段的sql
     *
     * @return
     */
    String getSQLQueryColumns(String... args);

    /**
     * 获取表和字段注释的sql语句
     *
     * @return The SQL to launch.
     */
    String getSQLQueryComment(String schemaName, String tableName, String columnName);


    /**
     * 获取当前表maxId
     * @param tableName
     * @param primaryKey
     * @return
     */
    String getMaxId(String tableName,String primaryKey);

    /**
     * 获取schema下不包含主键的表
     * @return
     */
    String getSQLQueryNoPrimaryKeyTables(String... tableSchema);

    /**
     * 获取所有可用表名(不带schema)
     * @return
     */
    String getSQLQueryTablesNoSchema(String tableSchema);

    /**
     * 返回表行数
     * @param tableName
     * @return
     */
    String getTableRows(String tableName);

    /**
     * 返回表的所有字段以及类型
     * @param tableSchema
     * @param tableName
     * @return
     */
    String getTableColumnsAndType(String tableSchema, String tableName);

}
