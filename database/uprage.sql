-- pgcompare.dc_configurations definition

-- Drop table

-- DROP TABLE dc_configurations;

CREATE TABLE dc_configurations (
	config_id int8 NOT NULL DEFAULT nextval('pgcompare.configurations_config_id_seq'::regclass), -- 配置项唯一标识符
	config_key varchar(255) NOT NULL, -- 配置项的键（例如：source-dbname, repo-host）
	config_value varchar(255) NOT NULL, -- 配置项的值（例如：localhost, testcompare）
	config_type varchar(50) NOT NULL, -- 配置项的类型（例如：system, repository, source, target）
	project_id int8 NULL, -- 关联的项目 ID（可选）
	created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP, -- 配置项的创建时间
	updated_at timestamp NULL DEFAULT CURRENT_TIMESTAMP, -- 配置项的最后更新时间
	CONSTRAINT configurations_pkey PRIMARY KEY (config_id)
);
COMMENT ON TABLE pgcompare.dc_configurations IS '存储系统配置、仓库配置、源数据库配置和目标数据库配置的表';

-- Column comments

COMMENT ON COLUMN pgcompare.dc_configurations.config_id IS '配置项唯一标识符';
COMMENT ON COLUMN pgcompare.dc_configurations.config_key IS '配置项的键（例如：source-dbname, repo-host）';
COMMENT ON COLUMN pgcompare.dc_configurations.config_value IS '配置项的值（例如：localhost, testcompare）';
COMMENT ON COLUMN pgcompare.dc_configurations.config_type IS '配置项的类型（例如：system, repository, source, target）';
COMMENT ON COLUMN pgcompare.dc_configurations.project_id IS '关联的项目 ID（可选）';
COMMENT ON COLUMN pgcompare.dc_configurations.created_at IS '配置项的创建时间';
COMMENT ON COLUMN pgcompare.dc_configurations.updated_at IS '配置项的最后更新时间';





INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(2, 'batch-fetch-size', '2000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(3, 'batch-commit-size', '2000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(4, 'batch-progress-report-size', '1000000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(5, 'database-sort', 'true', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(6, 'loader-threads', '0', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(7, 'log-destination', 'stdout', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(8, 'log-level', 'info', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(9, 'message-queue-size', '1000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(10, 'number-cast', 'notation', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(11, 'observer-throttle', 'true', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(13, 'observer-vacuum', 'true', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(14, 'stage-table-parallel', '0', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(15, 'standard-number-format', '0000000000000000000000.0000000000000000000000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(16, 'repo-dbname', 'pgcompare', 'repository', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(17, 'repo-host', 'localhost', 'repository', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(18, 'repo-password', 'postgres', 'repository', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(19, 'repo-port', '5432', 'repository', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(20, 'repo-schema', 'pgcompare', 'repository', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(21, 'repo-sslmode', 'disable', 'repository', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(22, 'repo-user', 'postgres', 'repository', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(23, 'source-database-hash', 'true', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(24, 'source-dbname', 'testcompare', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(25, 'source-host', 'localhost', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(26, 'source-password', 'postgres', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(27, 'source-port', '5432', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(28, 'source-schema', 'public', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(29, 'source-sslmode', 'disable', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(30, 'source-type', 'postgres', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(31, 'source-user', 'postgres', 'source', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(32, 'target-database-hash', 'true', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(33, 'target-dbname', 'orcl', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(34, 'target-host', 'localhost', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(35, 'target-password', 'testcompare', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(36, 'target-port', '1521', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(37, 'target-schema', 'testcompare', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(38, 'target-sslmode', 'disable', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(39, 'target-type', 'oracle', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(40, 'target-user', 'testcompare', 'target', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(1, 'project', '1', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO dc_configurations
(config_id, config_key, config_value, config_type, project_id, created_at, updated_at)
VALUES(12, 'observer-throttle-size', '2000000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');











-- pgcompare.dc_reconciliation_results definition

-- Drop table

-- DROP TABLE dc_reconciliation_results;

CREATE TABLE dc_reconciliation_results (
	id int4 NOT NULL DEFAULT nextval('pgcompare.reconciliation_results_id_seq'::regclass),
	tid int8 NOT NULL,
	pk varchar(20) NULL,
	compare_status varchar(50) NOT NULL,
	equal_count int4 NULL DEFAULT 0,
	not_equal_count int4 NULL DEFAULT 0,
	missing_source_count int4 NULL DEFAULT 0,
	missing_target_count int4 NULL DEFAULT 0,
	result_details varchar(255) NULL,
	created_at timestamptz NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at timestamptz NULL DEFAULT CURRENT_TIMESTAMP,
	table_name varchar(255) NULL,
	CONSTRAINT reconciliation_results_pkey PRIMARY KEY (id)
);




-- pgcompare.job_jdbc_datasource definition

-- Drop table

-- DROP TABLE job_jdbc_datasource;

CREATE TABLE job_jdbc_datasource (
	id bigserial NOT NULL,
	datasource_name varchar(200) NOT NULL,
	datasource_group varchar(200) NULL DEFAULT 'Default'::character varying,
	jdbc_username varchar(100) NULL DEFAULT NULL::character varying,
	jdbc_password varchar(200) NULL DEFAULT NULL::character varying,
	jdbc_url varchar(500) NOT NULL,
	jdbc_driver_class varchar(200) NULL DEFAULT NULL::character varying,
	status numeric(1) NOT NULL DEFAULT 1,
	create_by varchar(20) NULL DEFAULT NULL::character varying,
	create_date timestamp NULL DEFAULT CURRENT_TIMESTAMP(0),
	update_by varchar(20) NULL DEFAULT NULL::character varying,
	update_date timestamp NULL,
	"comments" varchar(1000) NULL DEFAULT NULL::character varying,
	datasource varchar(45) NOT NULL,
	zk_adress varchar(200) NULL DEFAULT NULL::character varying,
	database_name varchar(45) NULL DEFAULT NULL::character varying,
	CONSTRAINT job_jdbc_datasource_pkey PRIMARY KEY (id)
);



INSERT INTO job_jdbc_datasource
(id, datasource_name, datasource_group, jdbc_username, jdbc_password, jdbc_url, jdbc_driver_class, status, create_by, create_date, update_by, update_date, "comments", datasource, zk_adress, database_name)
VALUES(1, '本地', 'Default', 'postgres', 'postgres', 'jdbc:postgresql://localhost:5432/pgcompare', 'org.postgresql.Driver', 1, 'admin', '2024-12-31 14:38:50.000', NULL, NULL, NULL, 'postgresql', NULL, NULL);
INSERT INTO job_jdbc_datasource
(id, datasource_name, datasource_group, jdbc_username, jdbc_password, jdbc_url, jdbc_driver_class, status, create_by, create_date, update_by, update_date, "comments", datasource, zk_adress, database_name)
VALUES(4, 'pgtest', 'Default', 'postgres', 'postgres', 'jdbc:postgresql://localhost:5432/testcompare', 'org.postgresql.Driver', 1, 'admin', '2024-12-31 14:41:18.000', NULL, NULL, NULL, 'postgresql', NULL, NULL);
INSERT INTO job_jdbc_datasource
(id, datasource_name, datasource_group, jdbc_username, jdbc_password, jdbc_url, jdbc_driver_class, status, create_by, create_date, update_by, update_date, "comments", datasource, zk_adress, database_name)
VALUES(5, 'testcompare', 'Default', 'testcompare', 'testcompare', 'jdbc:oracle:thin:@//localhost:1521/orcl', 'oracle.jdbc.OracleDriver', 1, 'admin', '2024-12-31 14:41:18.000', NULL, NULL, NULL, 'oracle', NULL, NULL);
