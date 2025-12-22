package com.crunchydata.utils.meta;

public class DB2DatabaseMeta extends BaseDatabaseMeta implements DatabaseInterface {
    private volatile static DB2DatabaseMeta single;

    public static DB2DatabaseMeta getInstance() {
        if (single == null) {
            synchronized (DB2DatabaseMeta.class) {
                if (single == null) {
                    single = new DB2DatabaseMeta();
                }
            }
        }
        return single;
    }

    @Override
    public String getSQLQueryTablesNameComments() {
        return "SELECT TABNAME, REMARKS FROM SYSCAT.TABLES WHERE TABSCHEMA = ?";
    }

    @Override
    public String getSQLQueryTableNameComment() {
        return "SELECT TABNAME, REMARKS FROM SYSCAT.TABLES WHERE TABSCHEMA = ? AND TABNAME = ?";
    }

    @Override
    public String getSQLQueryPrimaryKey() {
        return "SELECT COLNAME FROM SYSCAT.KEYCOLUSE WHERE TABSCHEMA = ? AND TABNAME = ?";
    }

    @Override
    public String getSQLQueryComment(String schemaName, String tableName, String columnName) {
        return String.format("SELECT REMARKS FROM SYSCAT.COLUMNS WHERE TABSCHEMA = '%s' AND TABNAME = '%s' AND COLNAME = '%s'", schemaName, tableName, columnName);
    }

    @Override
    public String getSQLQueryNoPrimaryKeyTables(String... tableSchema) {
        return "SELECT tabname as TABLE_NAME FROM syscat.tables " +
                " WHERE not exists ( " +
                "   SELECT 1 FROM syscat.indexes WHERE syscat.tables.tabname = syscat.indexes.tabname " +
                "   AND syscat.tables.tabschema = syscat.indexes.tabschema " +
                "   AND uniquerule = 'P') " +
                " AND tabschema = '"+tableSchema[0]+"'";
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

    @Override
    public String getSQLQueryColumns(String... args) {
        return "SELECT COLNAME FROM SYSCAT.COLUMNS WHERE TABSCHEMA = ? AND TABNAME = ?";
    }

    @Override
    public String getSQLQueryTableSchema(String... args) {
        return "SELECT SCHEMANAME FROM SYSCAT.SCHEMATA WHERE SCHEMANAME NOT IN('NULLID','ROOT','SQLJ','SYSCAT','SYSFUN','SYSIBM','SYSIBMADM','SYSIBMINTERNAL','SYSIBMTS','SYSPROC','SYSPUBLIC','SYSSTAT','SYSTOOLS')";
    }

    @Override
    public String getSQLQueryTables() {
        return "SELECT CONCAT(TABSCHEMA,CONCAT('.',TABNAME)) AS TABNAME, REMARKS FROM SYSCAT.TABLES WHERE TABSCHEMA = CURRENT SCHEMA";
    }

    @Override
    public String getSQLQueryTables(String... tableSchema) {
        return String.format("SELECT CONCAT(TABSCHEMA,CONCAT('.',TABNAME)) AS TABNAME, REMARKS FROM SYSCAT.TABLES WHERE TABSCHEMA = '%s' AND TYPE = 'T' ", tableSchema[0]);
    }

}
