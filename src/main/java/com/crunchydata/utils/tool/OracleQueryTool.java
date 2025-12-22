package com.crunchydata.utils.tool;

import com.crunchydata.models.JobJdbcDatasource;

import java.sql.SQLException;

public class OracleQueryTool extends BaseQueryTool implements QueryToolInterface {

    public OracleQueryTool(JobJdbcDatasource jobDatasource) throws SQLException {
        super(jobDatasource);
    }
}
