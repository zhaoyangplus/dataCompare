package com.crunchydata.utils.tool;

import com.crunchydata.models.JobJdbcDatasource;

import java.sql.SQLException;

public class DB2SQLQueryTool extends BaseQueryTool implements QueryToolInterface {

    public DB2SQLQueryTool(JobJdbcDatasource jobDatasource) throws SQLException {
        super(jobDatasource);
    }

}
