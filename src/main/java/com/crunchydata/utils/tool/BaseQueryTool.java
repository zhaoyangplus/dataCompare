package com.crunchydata.utils.tool;

import cn.hutool.core.util.StrUtil;
import com.crunchydata.models.JobJdbcDatasource;
import com.crunchydata.utils.JdbcUtils;
import com.crunchydata.utils.meta.DatabaseInterface;
import com.crunchydata.utils.meta.DatabaseMetaFactory;
import com.crunchydata.utils.LocalCacheUtil;
import com.zaxxer.hikari.HikariDataSource;
import org.apache.commons.lang3.StringUtils;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public abstract class BaseQueryTool implements QueryToolInterface {

    //    protected static final Logger logger = LoggerFactory.getLogger(BaseQueryTool.class);
    /**
     * 用于获取查询语句
     */
    private DatabaseInterface sqlBuilder;

    private DataSource datasource;

    private Connection connection;
    /**
     * 当前数据库名
     */
    private String currentSchema;
    private String currentDatabase;

    private static ThreadLocal<Connection> connectionThreadLocal = new ThreadLocal<>();

    /**
     * 构造方法
     *
     * @param jobDatasource
     */
    BaseQueryTool(JobJdbcDatasource jobDatasource) throws SQLException {
        if (LocalCacheUtil.get(jobDatasource.getDatasourceName()) == null) {
            getDataSource(jobDatasource);
        } else {
            this.connection = (Connection) LocalCacheUtil.get(jobDatasource.getDatasourceName());
            if (!this.connection.isValid(500)) {
                LocalCacheUtil.remove(jobDatasource.getDatasourceName());
                getDataSource(jobDatasource);
            }
        }
        sqlBuilder = DatabaseMetaFactory.getByDbType(jobDatasource.getDatasource());
        currentSchema = getSchema(jobDatasource.getJdbcUsername());
        currentDatabase = jobDatasource.getDatasource();
        LocalCacheUtil.set(jobDatasource.getDatasourceName(), this.connection, 4 * 60 * 60 * 1000);
    }

    private void getDataSource(JobJdbcDatasource jobDatasource) throws SQLException {
        String userName = jobDatasource.getJdbcUsername();

        //这里默认使用 hikari 数据源
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setUsername(userName);
        dataSource.setPassword(jobDatasource.getJdbcPassword());
        dataSource.setJdbcUrl(jobDatasource.getJdbcUrl());
        dataSource.setDriverClassName(jobDatasource.getJdbcDriverClass());
        dataSource.setMaximumPoolSize(1);
        dataSource.setMinimumIdle(0);
        dataSource.setConnectionTimeout(30000);
        this.datasource = dataSource;
//        this.connection = this.datasource.getConnection();
        connectionThreadLocal.set(dataSource.getConnection());
        this.connection = connectionThreadLocal.get();
    }

    //根据connection获取schema
    private String getSchema(String jdbcUsername) {
        String res = null;
        try {
            res = connection.getCatalog();
        } catch (SQLException e) {
            try {
                res = connection.getSchema();
            } catch (SQLException e1) {
//                logger.error("[SQLException getSchema Exception] --> "
//                        + "the exception message is:" + e1.getMessage());
                // 此处借用此异常抛出
                throw new UnsupportedOperationException(e1.getMessage());
            }
//            logger.error("[getSchema Exception] --> "
//                    + "the exception message is:" + e.getMessage());
            // 此处借用此异常抛出
            throw new UnsupportedOperationException(e.getMessage());
        }
        // 如果res是null，则将用户名当作 schema
        if (StrUtil.isBlank(res) && StringUtils.isNotBlank(jdbcUsername)) {
            res = jdbcUsername.toUpperCase();
        }
        return res;
    }

    public List<String> getTableSchema() {
        List<String> schemas = new ArrayList<>();
        Statement stmt = null;
        ResultSet rs = null;
        try {
            stmt = connection.createStatement();
            //获取sql
            String sql = getSQLQueryTableSchema();
            rs = stmt.executeQuery(sql);
            while (rs.next()) {
                String tableName = rs.getString(1);
                schemas.add(tableName);
            }
        } catch (SQLException e) {
//            logger.error("[getTableNames Exception] --> "
//                    + "the exception message is:" + e.getMessage());
            throw new UnsupportedOperationException("[getTableNames Exception] --> "
                    + "the exception message is:" + e.getMessage());
        } finally {
            JdbcUtils.close(rs);
            JdbcUtils.close(stmt);
        }
        return schemas;
    }

    protected String getSQLQueryTableSchema() {
        return sqlBuilder.getSQLQueryTableSchema();
    }

    @Override
    public List<String> getTableNames(String tableSchema) {
        List<String> tables = new ArrayList<String>();
        Statement stmt = null;
        ResultSet rs = null;
        try {
            stmt = connection.createStatement();
            //获取sql
            String sql = getSQLQueryTables(tableSchema);
            rs = stmt.executeQuery(sql);
            while (rs.next()) {
                String tableName = rs.getString(1);
                tables.add(tableName);
            }
            tables.sort(Comparator.naturalOrder());
        } catch (SQLException e) {
//            logger.error("[getTableNames Exception] --> "
//                    + "the exception message is:" + e.getMessage());
            // 此处借用此异常抛出
            throw new UnsupportedOperationException(e.getMessage());
        } finally {
            JdbcUtils.close(rs);
            JdbcUtils.close(stmt);
        }
        return tables;
    }

    @Override
    public List<String> getTableNames() {
        List<String> tables = new ArrayList<String>();
        Statement stmt = null;
        ResultSet rs = null;
        try {
            stmt = connection.createStatement();
            //获取sql
            String sql = getSQLQueryTables();
            rs = stmt.executeQuery(sql);
            while (rs.next()) {
                String tableName = rs.getString(1);
                tables.add(tableName);
            }
        } catch (SQLException e) {
//            logger.error("[getTableNames Exception] --> "
//                    + "the exception message is:" + e.getMessage());
            // 此处借用此异常抛出
            throw new UnsupportedOperationException(e.getMessage());
        } finally {
            JdbcUtils.close(rs);
            JdbcUtils.close(stmt);
        }
        return tables;
    }

    protected String getSQLQueryTables(String tableSchema) {
        return sqlBuilder.getSQLQueryTables(tableSchema);
    }

    /**
     * 不需要其他参数的可不重写
     *
     * @return
     */
    protected String getSQLQueryTables() {
        return sqlBuilder.getSQLQueryTables();
    }
}
