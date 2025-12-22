package com.crunchydata.utils.tool;


import com.crunchydata.models.JobJdbcDatasource;
import com.crunchydata.utils.JdbcConstants;

import java.sql.SQLException;

public class QueryToolFactory {

    public static BaseQueryTool getByDbType(JobJdbcDatasource jobDatasource) {
        //获取dbType
        String datasource = jobDatasource.getDatasource();
        if (JdbcConstants.MYSQL.equals(datasource)) {
            return getMySQLQueryToolInstance(jobDatasource);
        } else if (JdbcConstants.ORACLE.equals(datasource)) {
            return getOracleQueryToolInstance(jobDatasource);
        } else if (JdbcConstants.POSTGRESQL.equals(datasource)) {
            return getPostgresqlQueryToolInstance(jobDatasource);
        } else if (JdbcConstants.SQL_SERVER.equals(datasource)) {
            return getSqlserverQueryToolInstance(jobDatasource);
        }else if (JdbcConstants.DB2.equals(datasource)) {
            return getDB2QueryToolInstance(jobDatasource);
        }else if (JdbcConstants.HALO.equals(datasource)) {
            return getHaloQueryToolInstance(jobDatasource);
        }else if (JdbcConstants.DM.equals(datasource)) {
            return getDmQueryToolInstance(jobDatasource);
        }
        throw new UnsupportedOperationException("找不到该类型: ".concat(datasource));
    }

    private static BaseQueryTool getMySQLQueryToolInstance(JobJdbcDatasource jdbcDatasource) {
        try {
            return new MySQLQueryTool(jdbcDatasource);
        } catch (Exception e) {
            throw new UnsupportedOperationException(JdbcConstants.MYSQL + " 连接失败", e);
        }
    }

    private static BaseQueryTool getOracleQueryToolInstance(JobJdbcDatasource jdbcDatasource) {
        try {
            return new OracleQueryTool(jdbcDatasource);
        } catch (SQLException e) {
            throw new UnsupportedOperationException(JdbcConstants.ORACLE + " 连接失败", e);
        }
    }

    private static BaseQueryTool getPostgresqlQueryToolInstance(JobJdbcDatasource jdbcDatasource) {
        try {
            return new PostgresqlQueryTool(jdbcDatasource);
        } catch (SQLException e) {
            throw new UnsupportedOperationException(JdbcConstants.POSTGRESQL + " 连接失败", e);
        }
    }

    private static BaseQueryTool getSqlserverQueryToolInstance(JobJdbcDatasource jdbcDatasource) {
        try {
            return new SqlServerQueryTool(jdbcDatasource);
        } catch (SQLException e) {
            throw new UnsupportedOperationException(JdbcConstants.SQL_SERVER + " 连接失败", e);
        }
    }


    private static BaseQueryTool getDB2QueryToolInstance(JobJdbcDatasource jdbcDatasource) {
        try {
            return new DB2SQLQueryTool(jdbcDatasource);
        } catch (SQLException e) {
            throw new UnsupportedOperationException(JdbcConstants.DB2 + " 连接失败", e);
        }
    }

    private static BaseQueryTool getHaloQueryToolInstance(JobJdbcDatasource jdbcDatasource) {
        try {
            return new HaloQueryTool(jdbcDatasource);
        } catch (SQLException e) {
            throw new UnsupportedOperationException(JdbcConstants.HALO + " 连接失败", e);
        }
    }

    private static BaseQueryTool getDmQueryToolInstance(JobJdbcDatasource jdbcDatasource) {
        try {
            return new DmQueryTool(jdbcDatasource);
        } catch (SQLException e) {
            throw new UnsupportedOperationException(JdbcConstants.DM + " 连接失败", e);
        }
    }

}
