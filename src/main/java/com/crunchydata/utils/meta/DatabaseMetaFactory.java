package com.crunchydata.utils.meta;

import com.crunchydata.utils.JdbcConstants;

public class DatabaseMetaFactory {

    //根据数据库类型返回对应的接口
    public static DatabaseInterface getByDbType(String dbType) {
        if (JdbcConstants.MYSQL.equals(dbType)) {
            return MySQLDatabaseMeta.getInstance();
        } else if (JdbcConstants.ORACLE.equals(dbType)) {
            return OracleDatabaseMeta.getInstance();
        } else if (JdbcConstants.POSTGRESQL.equals(dbType)) {
            return PostgresqlDatabaseMeta.getInstance();
        } else if (JdbcConstants.SQL_SERVER.equals(dbType)) {
            return SqlServerDatabaseMeta.getInstance();
        } else if(JdbcConstants.DB2.equals(dbType)) {
            return DB2DatabaseMeta.getInstance();
        } else if(JdbcConstants.HALO.equals(dbType)) {
            return HaloDatabaseMeta.getInstance();
        } else if(JdbcConstants.DM.equals(dbType)) {
            return DmDatabaseMeta.getInstance();
        } else {
            throw new UnsupportedOperationException("暂不支持的类型：".concat(dbType));
        }
    }
}
