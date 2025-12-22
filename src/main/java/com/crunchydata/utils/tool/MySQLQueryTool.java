package com.crunchydata.utils.tool;

import com.crunchydata.models.JobJdbcDatasource;

import java.sql.SQLException;

public class MySQLQueryTool extends BaseQueryTool implements QueryToolInterface {

    public MySQLQueryTool(JobJdbcDatasource jobDatasource) throws SQLException {
        super(jobDatasource);
    }

}
