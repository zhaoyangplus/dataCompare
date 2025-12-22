package com.crunchydata.utils.tool;

import com.crunchydata.models.JobJdbcDatasource;

import java.sql.SQLException;

public class DmQueryTool extends BaseQueryTool implements QueryToolInterface {
    public DmQueryTool(JobJdbcDatasource jobDatasource) throws SQLException {
        super(jobDatasource);
    }

}
