package com.crunchydata.utils.tool;

import com.crunchydata.models.JobJdbcDatasource;

import java.sql.SQLException;

public class SqlServerQueryTool extends BaseQueryTool implements QueryToolInterface {
    public SqlServerQueryTool(JobJdbcDatasource jobDatasource) throws SQLException {
        super(jobDatasource);
    }
}
