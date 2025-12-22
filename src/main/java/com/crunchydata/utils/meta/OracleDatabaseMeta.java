package com.crunchydata.utils.meta;

public class OracleDatabaseMeta extends BaseDatabaseMeta implements DatabaseInterface {

    private volatile static OracleDatabaseMeta single;

    public static OracleDatabaseMeta getInstance() {
        if (single == null) {
            synchronized (OracleDatabaseMeta.class) {
                if (single == null) {
                    single = new OracleDatabaseMeta();
                }
            }
        }
        return single;
    }


    @Override
    public String getSQLQueryComment(String schemaName, String tableName, String columnName) {
        return String.format("select B.comments \n" +
                "  from user_tab_columns A, user_col_comments B\n" +
                " where a.COLUMN_NAME = b.column_name\n" +
                "   and A.Table_Name = B.Table_Name\n" +
                "   and A.Table_Name = upper('%s')\n" +
                "   AND A.column_name  = '%s'", tableName, columnName);
    }

    @Override
    public String getSQLQueryPrimaryKey() {
        return "select cu.column_name from user_cons_columns cu, user_constraints au where cu.constraint_name = au.constraint_name and au.owner = ? and au.constraint_type = 'P' and au.table_name = ?";
    }

    @Override
    public String getSQLQueryTablesNameComments() {
        return "select table_name,comments from user_tab_comments";
    }

    @Override
    public String getSQLQueryTableNameComment() {
        return "select table_name,comments from user_tab_comments where table_name = ?";
    }

    @Override
    public String getSQLQueryTables(String... tableSchema) {
        //return "select owner || '.' || table_name AS table_name from all_tables where owner='" + tableSchema[0] + "' ORDER BY table_name";
        return "select owner || '.' || object_name AS table_name from ALL_OBJECTS where object_type = 'TABLE' AND temporary != 'Y' AND owner='" + tableSchema[0] + "' ORDER BY object_name";
    }

    @Override
    public String getSQLQueryTableSchema(String... args) {
        return "select username from sys.dba_users ORDER BY username";
    }


    @Override
    public String getSQLQueryTables() {
        return "select table_name from user_tab_comments";
    }

    @Override
    public String getSQLQueryColumns(String... args) {
        return "select table_name,comments from user_tab_comments where table_name = ?";
    }

    @Override
    public  String getSQLQueryNoPrimaryKeyTables(String... tableSchema){
        return "SELECT DISTINCT A.TABLE_NAME FROM ALL_TABLES A " +
                "LEFT JOIN ALL_CONSTRAINTS B ON A.TABLE_NAME = B.TABLE_NAME " +
                "AND B.OWNER = '"+tableSchema[0]+"' AND B.CONSTRAINT_TYPE = 'P' " +
                "WHERE A.OWNER='"+tableSchema[0]+"' AND B.CONSTRAINT_TYPE IS NULL ORDER BY A.TABLE_NAME ";
    }

    @Override
    public String getSQLQueryTablesNoSchema(String tableSchema) {
        //return "select table_name AS table_name from all_tables where owner='" + tableSchema + "' ORDER BY table_name";
        return "select object_name AS table_name from ALL_OBJECTS where object_type = 'TABLE' AND temporary != 'Y' AND owner='" + tableSchema + "' ORDER BY object_name";
    }

    @Override
    public String getTableRows(String tableName) {
        return "SELECT COUNT(*) AS tableRows from "+tableName+" ";
    }

    @Override
    public String getTableColumnsAndType(String tableSchema, String tableName) {
        return "SELECT column_name, data_type, CHAR_COL_DECL_LENGTH as DATA_LENGTH,'' AS a,'' AS b FROM all_tab_columns WHERE owner = '"+tableSchema+"' AND table_name = '"+tableName+"' ORDER BY COLUMN_ID ";
    }

}

