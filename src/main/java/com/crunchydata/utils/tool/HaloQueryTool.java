package com.crunchydata.utils.tool;

import com.crunchydata.models.JobJdbcDatasource;

import java.sql.SQLException;

public class HaloQueryTool extends BaseQueryTool implements QueryToolInterface {
    public HaloQueryTool(JobJdbcDatasource jobDatasource) throws SQLException {
        super(jobDatasource);
    }

}
