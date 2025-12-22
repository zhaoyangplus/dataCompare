package com.crunchydata.utils.meta;

public class SqlServerDatabaseMeta extends BaseDatabaseMeta implements DatabaseInterface {
    private volatile static SqlServerDatabaseMeta single;

    public static SqlServerDatabaseMeta getInstance() {
        if (single == null) {
            synchronized (SqlServerDatabaseMeta.class) {
                if (single == null) {
                    single = new SqlServerDatabaseMeta();
                }
            }
        }
        return single;
    }

    @Override
    public String getSQLQueryTables() {
        return "SELECT Name FROM SysObjects Where XType='U' ORDER BY Name";
    }

    @Override
    public String getSQLQueryTables(String... tableSchema) {
        return "select schema_name(schema_id)+'.'+object_name(object_id) from sys.objects \n" +
                "where type ='U' \n" +
                "and schema_name(schema_id) ='" + tableSchema[0] + "'";

    }

    @Override
    public String getSQLQueryTableSchema(String... args) {
        return "select distinct schema_name(schema_id) from sys.objects where type ='U';";
    }

    @Override
    public String getSQLQueryNoPrimaryKeyTables(String... tableSchema) {
        return "SELECT DISTINCT A.TABLE_NAME FROM INFORMATION_SCHEMA.TABLES A " +
                "LEFT JOIN INFORMATION_SCHEMA.TABLE_CONSTRAINTS B ON A.TABLE_NAME = B.TABLE_NAME " +
                "AND B.TABLE_CATALOG = '"+tableSchema[0]+"' AND B.CONSTRAINT_TYPE = 'PRIMARY KEY' " +
                "WHERE A.TABLE_TYPE='BASE TABLE' AND A.TABLE_CATALOG='"+tableSchema[0]+"' " +
                "AND A.TABLE_SCHEMA != 'cdc' AND A.TABLE_NAME != 'systranschemas' " +
                "AND B.CONSTRAINT_TYPE IS NULL ORDER BY A.TABLE_NAME";
    }

    @Override
    public String getSQLQueryTablesNoSchema(String tableSchema) {
        return null;
    }

    @Override
    public String getTableRows(String tableName) {
        return null;
    }

    @Override
    public String getTableColumnsAndType(String tableSchema, String tableName) {
        return null;
    }

}
