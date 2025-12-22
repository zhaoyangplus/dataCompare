package com.crunchydata.utils.meta;

public class PostgresqlDatabaseMeta extends BaseDatabaseMeta implements DatabaseInterface {

    private volatile static PostgresqlDatabaseMeta single;

    public static PostgresqlDatabaseMeta getInstance() {
        if (single == null) {
            synchronized (PostgresqlDatabaseMeta.class) {
                if (single == null) {
                    single = new PostgresqlDatabaseMeta();
                }
            }
        }
        return single;
    }

    @Override
    public String getSQLQueryPrimaryKey() {
        return "select column_name from information_schema.columns where table_schema='public' and table_name='tb_cis_patient_info' and is_identity = 'YES'";
    }

    @Override
    public String getSQLQueryTables() {
        return "select relname as tabname from pg_class c \n" +
                "where  relkind = 'r' and relname not like 'pg_%' and relname not like 'sql_%' group by relname order by relname limit 500";
    }


    @Override
    public String getSQLQueryTables(String... tableSchema) {
        // return "SELECT concat_ws('.',\"table_schema\",\"table_name\") FROM information_schema.tables \n" +
        //         "where (\"table_name\" not like 'pg_%' AND \"table_name\" not like 'sql_%') \n" +
        //         "and table_type='BASE TABLE' and table_schema='" + tableSchema[0] + "'";
        return "SELECT concat_ws('.',a.table_schema,a.table_name) FROM information_schema.tables a " +
                "LEFT JOIN pg_catalog.pg_class b on a.table_name = b.relname " +
                "LEFT JOIN pg_catalog.pg_namespace c ON c.oid = b.relnamespace " +
                "WHERE a.table_type='BASE TABLE' and b.relispartition = false and a.table_schema='" + tableSchema[0] + "' and c.nspname = '" + tableSchema[0] + "'";
    }

    @Override
    public String getSQLQueryTableSchema(String... args) {
        // return "select table_schema FROM information_schema.tables where \"table_name\" not like 'pg_%' or \"table_name\" not like 'sql_%' group by table_schema;";
        return "SELECT schema_name as table_schema FROM information_schema.schemata where schema_name not in ('pg_catalog', 'pg_toast', 'information_schema') order by schema_name;";
    }

    @Override
    public String getSQLQueryColumns(String... args) {
        return "SELECT a.attname as name \n" +
                "FROM pg_class as c,pg_attribute as a where c.relname = ? and a.attrelid = c.oid and a.attnum>0";
    }

    @Override
    public String getSQLQueryComment(String schemaName, String tableName, String columnName) {
        return null;
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
        return "SELECT a.table_name FROM information_schema.tables a " +
                "LEFT JOIN pg_catalog.pg_class b on a.table_name = b.relname " +
                "LEFT JOIN pg_catalog.pg_namespace c ON c.oid = b.relnamespace " +
                "WHERE a.table_type='BASE TABLE' and b.relispartition = false and a.table_schema='" + tableSchema + "' and c.nspname = '" + tableSchema + "'";
    }

    @Override
    public String getTableRows(String tableName) {
        return "SELECT COUNT(*) AS tableRows from "+tableName+" ";
    }

    @Override
    public String getTableColumnsAndType(String tableSchema, String tableName) {
        return "SELECT column_name as COLUMN_NAME,data_type as DATA_TYPE,character_maximum_length as DATA_LENGTH,is_nullable as IS_NULLABLE, column_default as COLUMN_DEFAULT FROM information_schema.columns WHERE table_schema = '"+tableSchema+"' AND table_name = '"+tableName+"' order by ordinal_position ";
    }

}
