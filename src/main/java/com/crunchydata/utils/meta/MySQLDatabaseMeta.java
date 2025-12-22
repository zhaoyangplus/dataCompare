package com.crunchydata.utils.meta;

public class MySQLDatabaseMeta extends BaseDatabaseMeta implements DatabaseInterface {

    private volatile static MySQLDatabaseMeta single;

    public static MySQLDatabaseMeta getInstance() {
        if (single == null) {
            synchronized (MySQLDatabaseMeta.class) {
                if (single == null) {
                    single = new MySQLDatabaseMeta();
                }
            }
        }
        return single;
    }

    @Override
    public String getSQLQueryComment(String schemaName, String tableName, String columnName) {
        return String.format("SELECT COLUMN_COMMENT FROM information_schema.COLUMNS where TABLE_SCHEMA = '%s' and TABLE_NAME = '%s' and COLUMN_NAME = '%s'", schemaName, tableName, columnName);
    }

    @Override
    public String getSQLQueryNoPrimaryKeyTables(String... tableSchema) {
        return "SELECT DISTINCT A.TABLE_NAME FROM INFORMATION_SCHEMA.TABLES A " +
                "LEFT JOIN INFORMATION_SCHEMA.TABLE_CONSTRAINTS B ON A.TABLE_NAME = B.TABLE_NAME " +
                "AND B.TABLE_SCHEMA = '"+tableSchema[0]+"' AND B.CONSTRAINT_TYPE = 'PRIMARY KEY' " +
                "WHERE A.TABLE_TYPE='BASE TABLE' AND A.TABLE_SCHEMA='"+tableSchema[0]+"' AND B.CONSTRAINT_TYPE IS NULL ORDER BY A.TABLE_NAME ";
    }

    @Override
    public String getSQLQueryTablesNoSchema(String tableSchema) {
        return "SELECT TABLE_NAME AS table_name from INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '"+tableSchema+"' AND TABLE_TYPE = 'BASE TABLE'";
    }

    @Override
    public String getTableRows(String tableName) {
        return "SELECT COUNT(*) AS tableRows from "+tableName+" ";
    }

    @Override
    public String getTableColumnsAndType(String tableSchema, String tableName) {
        return "SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH AS DATA_LENGTH, IS_NULLABLE, COLUMN_DEFAULT FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = '"+tableSchema+"' AND TABLE_NAME = '"+tableName+"' ORDER BY ORDINAL_POSITION;";
    }

    @Override
    public String getSQLQueryPrimaryKey() {
        return "select column_name from information_schema.columns where table_schema=? and table_name=? and column_key = 'PRI'";
    }

    @Override
    public String getSQLQueryTables() {
        return "show tables";
    }

    @Override
    public String getSQLQueryColumns(String... args) {
        return "select column_name from information_schema.columns where table_schema=? and table_name=?";
    }

    @Override
    public String getSQLQueryTableSchema(String... args) {
        return "SHOW DATABASES";
    }

    @Override
    public String getSQLQueryTables(String... tableSchema) {
        //return "show tables from " + tableSchema[0] + " ";
        return "SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '"+tableSchema[0]+"' AND TABLE_TYPE = 'BASE TABLE';";
    }

}
