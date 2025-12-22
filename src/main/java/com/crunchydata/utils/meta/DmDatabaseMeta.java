package com.crunchydata.utils.meta;

public class DmDatabaseMeta extends BaseDatabaseMeta implements DatabaseInterface {
    private volatile static DmDatabaseMeta single;

    public static DmDatabaseMeta getInstance() {
        if (single == null) {
            synchronized (DmDatabaseMeta.class) {
                if (single == null) {
                    single = new DmDatabaseMeta();
                }
            }
        }
        return single;
    }

    @Override
    public String getSQLQueryTables() {
        return "SELECT table_name FROM user_tables ORDER BY table_name";
    }

    @Override
    public String getSQLQueryTables(String... tableSchema) {
        return "select CONCAT(OWNER,'.',TABLE_NAME) from all_tables WHERE OWNER = '" + tableSchema[0] + "'";
    }

    @Override
    public String getSQLQueryTableSchema(String... args) {
        return "select distinct object_name TABLE_SCHEMA from all_objects where object_type='SCH'";
    }

    @Override
    public String getSQLQueryNoPrimaryKeyTables(String... tableSchema) {
        return null;
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

