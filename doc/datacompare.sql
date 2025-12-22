/*
 Navicat Premium Dump SQL

 Source Server         : postgresql
 Source Server Type    : PostgreSQL
 Source Server Version : 150007 (150007)
 Source Host           : localhost:5432
 Source Catalog        : pgcompare
 Source Schema         : pgcompare

 Target Server Type    : PostgreSQL
 Target Server Version : 150007 (150007)
 File Encoding         : 65001

 Date: 22/12/2025 17:22:14
*/


-- ----------------------------
-- Sequence structure for common_data_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."common_data_id_seq";
CREATE SEQUENCE "pgcompare"."common_data_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for configurations_config_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."configurations_config_id_seq";
CREATE SEQUENCE "pgcompare"."configurations_config_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_config_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_config_id_seq";
CREATE SEQUENCE "pgcompare"."dc_config_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_operation_log_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_operation_log_id_seq";
CREATE SEQUENCE "pgcompare"."dc_operation_log_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_project_pid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_project_pid_seq";
CREATE SEQUENCE "pgcompare"."dc_project_pid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_reconciliation_results_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_reconciliation_results_id_seq";
CREATE SEQUENCE "pgcompare"."dc_reconciliation_results_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_resource_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_resource_id_seq";
CREATE SEQUENCE "pgcompare"."dc_resource_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_result_cid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_result_cid_seq";
CREATE SEQUENCE "pgcompare"."dc_result_cid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_role_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_role_id_seq";
CREATE SEQUENCE "pgcompare"."dc_role_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_role_resource_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_role_resource_id_seq";
CREATE SEQUENCE "pgcompare"."dc_role_resource_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_table_column_column_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_table_column_column_id_seq";
CREATE SEQUENCE "pgcompare"."dc_table_column_column_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_table_tid_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_table_tid_seq";
CREATE SEQUENCE "pgcompare"."dc_table_tid_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_user_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_user_id_seq";
CREATE SEQUENCE "pgcompare"."dc_user_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for dc_user_role_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."dc_user_role_id_seq";
CREATE SEQUENCE "pgcompare"."dc_user_role_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for job_data_contrast_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."job_data_contrast_id_seq";
CREATE SEQUENCE "pgcompare"."job_data_contrast_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for job_jdbc_datasource_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "pgcompare"."job_jdbc_datasource_id_seq";
CREATE SEQUENCE "pgcompare"."job_jdbc_datasource_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for common_data
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."common_data";
CREATE TABLE "pgcompare"."common_data" (
  "id" int4 NOT NULL DEFAULT nextval('"pgcompare".common_data_id_seq'::regclass),
  "category" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "content" text COLLATE "pg_catalog"."default" NOT NULL,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP(0),
  "pid" int8
)
;

-- ----------------------------
-- Records of common_data
-- ----------------------------

-- ----------------------------
-- Table structure for dc_config
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_config";
CREATE TABLE "pgcompare"."dc_config" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".dc_config_id_seq'::regclass),
  "param_type" varchar(50) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "param_key" varchar(50) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "param_value" varchar(255) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "param_name" varchar(2000) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "status" char(1) COLLATE "pg_catalog"."default" DEFAULT '0'::bpchar,
  "remark" varchar(500) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "modify_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "valid" int4 DEFAULT 1
)
;
COMMENT ON TABLE "pgcompare"."dc_config" IS '系统配置信息表';

-- ----------------------------
-- Records of dc_config
-- ----------------------------

-- ----------------------------
-- Table structure for dc_configurations
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_configurations";
CREATE TABLE "pgcompare"."dc_configurations" (
  "config_id" int8 NOT NULL DEFAULT nextval('"pgcompare".configurations_config_id_seq'::regclass),
  "config_key" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "config_value" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "config_type" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "project_id" int8,
  "created_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp(6) DEFAULT CURRENT_TIMESTAMP
)
;
COMMENT ON COLUMN "pgcompare"."dc_configurations"."config_id" IS '配置项唯一标识符';
COMMENT ON COLUMN "pgcompare"."dc_configurations"."config_key" IS '配置项的键（例如：source-dbname, repo-host）';
COMMENT ON COLUMN "pgcompare"."dc_configurations"."config_value" IS '配置项的值（例如：localhost, testcompare）';
COMMENT ON COLUMN "pgcompare"."dc_configurations"."config_type" IS '配置项的类型（例如：system, repository, source, target）';
COMMENT ON COLUMN "pgcompare"."dc_configurations"."project_id" IS '关联的项目 ID（可选）';
COMMENT ON COLUMN "pgcompare"."dc_configurations"."created_at" IS '配置项的创建时间';
COMMENT ON COLUMN "pgcompare"."dc_configurations"."updated_at" IS '配置项的最后更新时间';
COMMENT ON TABLE "pgcompare"."dc_configurations" IS '存储系统配置、仓库配置、源数据库配置和目标数据库配置的表';

-- ----------------------------
-- Records of dc_configurations
-- ----------------------------
INSERT INTO "pgcompare"."dc_configurations" VALUES (41, 'batch-compare-size', '2000', 'system', NULL, '2025-06-26 15:49:24.875', '2025-06-26 15:49:24.875');
INSERT INTO "pgcompare"."dc_configurations" VALUES (42, 'batch-offset-size', '0', 'system', NULL, '2025-09-28 11:28:17.575', '2025-09-28 11:28:17.575');
INSERT INTO "pgcompare"."dc_configurations" VALUES (43, 'batch-check-size', '1000', 'system', NULL, '2025-09-22 15:49:24.875', '2025-09-22 15:49:24.875');
INSERT INTO "pgcompare"."dc_configurations" VALUES (1, 'project', '2', 'baksystem', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (2, 'batch-fetch-size', '2000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (3, 'batch-commit-size', '2000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (4, 'batch-progress-report-size', '1000000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (5, 'database-sort', 'true', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (6, 'loader-threads', '0', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (7, 'log-destination', 'stdout', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (8, 'log-level', 'info', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (9, 'message-queue-size', '1000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (10, 'number-cast', 'notation', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (11, 'observer-throttle', 'true', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (12, 'observer-throttle-size', '2000000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (13, 'observer-vacuum', 'true', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (14, 'stage-table-parallel', '0', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');
INSERT INTO "pgcompare"."dc_configurations" VALUES (15, 'standard-number-format', '0000000000000000000000.0000000000000000000000', 'system', NULL, '2025-01-03 17:56:44.584', '2025-01-03 17:56:44.584');


-- ----------------------------
-- Table structure for dc_operation_log
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_operation_log";
CREATE TABLE "pgcompare"."dc_operation_log" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".dc_operation_log_id_seq'::regclass),
  "business_type" int2 NOT NULL,
  "method" varchar(100) COLLATE "pg_catalog"."default" DEFAULT ''::character varying,
  "request_method" varchar(10) COLLATE "pg_catalog"."default" DEFAULT ''::character varying,
  "description" varchar(255) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "req_ip" varchar(50) COLLATE "pg_catalog"."default" DEFAULT ''::character varying,
  "req_param" varchar(2000) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "resp" varchar(1000) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "error_msg" varchar(2000) COLLATE "pg_catalog"."default" DEFAULT ''::character varying,
  "create_id" int8,
  "create_by" varchar(12) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_time" timestamp(6),
  "update_id" int8,
  "update_by" varchar(12) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "update_time" timestamp(6),
  "is_deleted" int2,
  "delete_time" timestamp(6),
  "oper_name" varchar(20) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "oper_location" varchar(200) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "status" int2
)
;
COMMENT ON TABLE "pgcompare"."dc_operation_log" IS '系统操作日志';

-- ----------------------------
-- Records of dc_operation_log
-- ----------------------------

-- ----------------------------
-- Table structure for dc_project
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_project";
CREATE TABLE "pgcompare"."dc_project" (
  "pid" int8 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1
),
  "project_name" text COLLATE "pg_catalog"."default" NOT NULL DEFAULT 'default'::text,
  "project_config" jsonb
)
;

-- ----------------------------
-- Records of dc_project
-- ----------------------------
INSERT INTO "pgcompare"."dc_project" OVERRIDING SYSTEM VALUE VALUES (1, 'default', NULL);
INSERT INTO "pgcompare"."dc_project" OVERRIDING SYSTEM VALUE VALUES (2, 'datacompareceTest', NULL);
INSERT INTO "pgcompare"."dc_project" OVERRIDING SYSTEM VALUE VALUES (3, 'datacompareceTest2', NULL);
INSERT INTO "pgcompare"."dc_project" OVERRIDING SYSTEM VALUE VALUES (4, 'datacompareceTest3', NULL);
INSERT INTO "pgcompare"."dc_project" OVERRIDING SYSTEM VALUE VALUES (5, 'datacompareceTest4', NULL);
INSERT INTO "pgcompare"."dc_project" OVERRIDING SYSTEM VALUE VALUES (7, '测试001', NULL);
INSERT INTO "pgcompare"."dc_project" OVERRIDING SYSTEM VALUE VALUES (8, '执行一下看看', NULL);

-- ----------------------------
-- Table structure for dc_reconciliation_results
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_reconciliation_results";
CREATE TABLE "pgcompare"."dc_reconciliation_results" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".dc_reconciliation_results_id_seq'::regclass),
  "pid" int8 NOT NULL,
  "tid" int8 NOT NULL,
  "table_name" varchar(255) COLLATE "pg_catalog"."default",
  "pk" varchar(20) COLLATE "pg_catalog"."default",
  "compare_status" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "equal_count" int8 DEFAULT 0,
  "not_equal_count" int8 DEFAULT 0,
  "missing_source_count" int8 DEFAULT 0,
  "missing_target_count" int8 DEFAULT 0,
  "result_details" text COLLATE "pg_catalog"."default",
  "created_at" timestamptz(6) DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz(6) DEFAULT CURRENT_TIMESTAMP
)
;


-- ----------------------------
-- Table structure for dc_resource
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_resource";
CREATE TABLE "pgcompare"."dc_resource" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".dc_resource_id_seq'::regclass),
  "parent_id" int4 NOT NULL,
  "ui_path" varchar(200) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "menu_type" varchar(1) COLLATE "pg_catalog"."default" NOT NULL,
  "status" varchar(1) COLLATE "pg_catalog"."default" NOT NULL,
  "menu_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "route_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "route_path" varchar(255) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "component" varchar(40) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "meta" varchar(455) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "weight" int4,
  "create_id" int8 NOT NULL,
  "create_by" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "update_id" int8,
  "update_by" varchar(255) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_time" timestamp(6) NOT NULL,
  "update_time" timestamp(6),
  "is_deleted" int2 NOT NULL DEFAULT '0'::smallint,
  "delete_time" timestamp(6)
)
;
COMMENT ON TABLE "pgcompare"."dc_resource" IS '资源表';

-- ----------------------------
-- Records of dc_resource
-- ----------------------------
INSERT INTO "pgcompare"."dc_resource" VALUES (1, 0, 'home/', '2', '1', '首页', 'home', '/home', 'layout.base$view.home', '{"iconType": "1","icon": "mdi:monitor-dashboard", "order": 0, "title": "home", "i18nKey": "route.home"}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (2, 0, '/exception', '1', '1', '异常页面', 'exception', '/exception', 'layout.base', '{"iconType": "1","icon": "ant-design:exception-outlined", "order": 7, "title": "exception", "i18nKey": "route.exception"}', 7, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (3, 2, '/exception/403', '2', '1', '403', 'exception_403', '/exception/403', 'view.403', '{"iconType": "1","icon": "ic:baseline-block", "title": "exception_403", "i18nKey": "route.exception_403"}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (4, 2, '/exception/404', '2', '1', '404', 'exception_404', '/exception/404', 'view.404', '{"iconType": "1","icon": "ic:baseline-web-asset-off", "title": "exception_404", "i18nKey": "route.exception_404"}', 2, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (5, 2, '/exception/500', '2', '1', '500', 'exception_500', '/exception/500', 'view.500', '{"iconType": "1","icon": "ic:baseline-wifi-off", "title": "exception_500", "i18nKey": "route.exception_500"}', 3, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (6, 0, '/about', '2', '1', '关于', 'about', '/about', 'layout.base$view.about', '{"iconType": "1","icon": "fluent:book-information-24-regular", "order": 10, "title": "about", "i18nKey": "route.about"}', 10, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-04-03 05:38:24', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (7, 0, '/function', '1', '1', '系统功能', 'function', '/function', 'layout.base', '{"iconType": "1","icon": "icon-park-outline:all-application", "order": 6, "title": "function", "i18nKey": "route.function"}', 6, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (8, 7, '/function/multi-tab', '2', '1', '多标签页', 'function_multi-tab', '/function/multi-tab', 'view.function_multi-tab', '{"iconType": "1","icon": "ic:round-tab", "title": "function_multi-tab", "i18nKey": "route.function_multi-tab", "multiTab": true, "hideInMenu": true, "activeMenu": "function_tab"}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (9, 0, '/multi-menu', '1', '1', '多级菜单', 'multi-menu', '/multi-menu', 'layout.base', '{"iconType": "1","icon": "mdi:menu", "order": 4, "title": "multi-menu", "i18nKey": "route.multi-menu"}', 4, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (10, 9, '/multi-menu/first', '1', '1', '菜单一', 'multi-menu_first', '/multi-menu/first', NULL, '{"iconType": "1","icon": "mdi:menu", "order": 1, "title": "multi-menu_first", "i18nKey": "route.multi-menu_first"}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (11, 10, '/multi-menu/first/child', '2', '1', '菜单一子菜单', 'multi-menu_first_child', '/multi-menu/first/child', 'view.multi-menu_first_child', '{"iconType": "1","icon": "mdi:menu", "order": 1, "title": "multi-menu_first_child", "i18nKey": "route.multi-menu_first_child"}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (12, 9, '/multi-menu/second', '1', '1', '菜单二', 'multi-menu_second', '/multi-menu/second', NULL, '{"iconType": "1","icon": "mdi:menu", "order": 13, "title": "multi-menu_second", "i18nKey": "route.multi-menu_second"}', 13, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (14, 12, '/multi-menu/second/child', '1', '1', '菜单二子菜单', 'multi-menu_second_child', '/multi-menu/second/child', NULL, '{"iconType": "1","icon": "mdi:menu", "order": 1, "title": "multi-menu_second_child", "i18nKey": "route.multi-menu_second_child"}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (15, 14, '/multi-menu/second/child/home', '2', '1', '菜单二子菜单首页', 'multi-menu_second_child_home', '/multi-menu/second/child/home', 'view.multi-menu_second_child_home', '{"iconType": "1","icon": "mdi:menu", "order": 1, "title": "multi-menu_second_child_home", "i18nKey": "route.multi-menu_second_child_home"}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (16, 7, '/function/tab', '2', '1', '标签页', 'function_tab', '/function/tab', 'view.function_tab', '{"iconType": "1","icon": "ic:round-tab", "title": "function_tab", "i18nKey": "route.function_tab"}', 2, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (17, 0, '/user-center', '2', '1', '个人中心', 'user-center', '/user-center', 'layout.base$view.user-center', '{"iconType": "1","icon": "mdi:monitor-dashboard", "title": "个人中心", "i18nKey": "route.user-center", "hideInMenu": true}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-04-03 05:38:50', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (18, 0, '/manage', '1', '1', '系统管理', 'manage', '/manage', 'layout.base', '{"iconType": "1","icon": "carbon:cloud-service-management", "order": 9, "title": "系统管理", "i18nKey": "route.manage"}', 9, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (19, 18, '/manage/user', '2', '1', '用户管理', 'manage_user', '/manage/user', 'view.manage_user', '{"iconType": "1","icon": "ic:round-manage-accounts", "order": 1, "title": "用户管理", "i18nKey": "route.manage_user"}', 1, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (20, 18, '/manage/role', '2', '1', '角色管理', 'manage_role', '/manage/role', 'view.manage_role', '{"iconType": "1","icon": "carbon:user-role", "order": 2, "title": "角色管理", "i18nKey": "route.manage_role"}', 2, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (21, 18, '/manage/menu', '2', '1', '菜单管理', 'manage_menu', '/manage/menu', 'view.manage_menu', '{"iconType": "1","icon": "material-symbols:route", "order": 3, "title": "菜单管理", "i18nKey": "route.manage_menu"}', 3, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 0, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (22, 18, '/manage/user-detail/:id', '3', '1', '用户详情', 'manage_user-detail', '/manage/user-detail/:id', 'view.manage_user-detail', '{"title": "manage_user-detail", "i18nKey": "route.manage_user-detail", "hideInMenu": true}', 4, 1, 'admin', 1, 'admin', '2024-03-09 08:49:27', '2024-03-09 08:49:30', 1, '2024-03-09 08:49:34');
INSERT INTO "pgcompare"."dc_resource" VALUES (23, 0, '403', '4', '1', '403', '403', '/403', 'layout.blank$view.403', '{"constant": true, "hideInMenu": true, "title": "403", "i18nKey": "route.403"}', 1, 1, 'admin', 1, 'admin', '2024-03-26 08:49:27', '2024-03-26 08:49:30', 0, NULL);
INSERT INTO "pgcompare"."dc_resource" VALUES (24, 0, '404', '4', '1', '404', '404', '/404', 'layout.blank$view.404', '{"constant": true, "hideInMenu": true, "title": "404", "i18nKey": "route.404"}', 1, 1, 'admin', 1, 'admin', '2024-03-26 08:49:27', '2024-03-26 08:49:30', 0, NULL);
INSERT INTO "pgcompare"."dc_resource" VALUES (25, 0, '500', '4', '1', '500', '500', '/500', 'layout.blank$view.500', '{"constant": true, "hideInMenu": true, "title": "500", "i18nKey": "route.500"}', 1, 1, 'admin', 1, 'admin', '2024-03-26 08:49:27', '2024-03-26 08:49:30', 0, NULL);
INSERT INTO "pgcompare"."dc_resource" VALUES (26, 0, 'login', '4', '1', '登录', 'login', '/login/:module(pwd-login|code-login|register|reset-pwd|bind-wechat)?', 'layout.blank$view.login', '{"constant": true, "hideInMenu": true, "title": "login", "i18nKey": "route.login"}', 1, 1, 'admin', 1, 'admin', '2024-03-26 08:49:27', '2024-03-26 08:49:30', 0, NULL);
INSERT INTO "pgcompare"."dc_resource" VALUES (27, 19, '/manage/user:add', '3', '1', '用户添加权限', 'manage:user:add', '', '', '', 1, 1, 'admin', 1, 'admin', '2024-04-01 08:49:27', '2024-04-04 03:29:53', 0, NULL);

-- ----------------------------
-- Table structure for dc_result
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_result";
CREATE TABLE "pgcompare"."dc_result" (
  "cid" int4 NOT NULL DEFAULT nextval('"pgcompare".dc_result_cid_seq'::regclass),
  "rid" numeric,
  "tid" int8,
  "table_name" text COLLATE "pg_catalog"."default",
  "status" varchar COLLATE "pg_catalog"."default",
  "compare_start" timestamptz(6),
  "equal_cnt" int4,
  "missing_source_cnt" int4,
  "missing_target_cnt" int4,
  "not_equal_cnt" int4,
  "source_cnt" int4,
  "target_cnt" int4,
  "compare_end" timestamptz(6),
  "result_message" text COLLATE "pg_catalog"."default"
)
;


-- ----------------------------
-- Table structure for dc_role
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_role";
CREATE TABLE "pgcompare"."dc_role" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".dc_role_id_seq'::regclass),
  "role_name" varchar(16) COLLATE "pg_catalog"."default" NOT NULL,
  "role_code" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "status" varchar(1) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "role_desc" varchar(255) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "type" int2 NOT NULL,
  "create_id" int8 NOT NULL,
  "create_by" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "update_id" int8,
  "update_by" varchar(255) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_time" timestamp(6) NOT NULL,
  "update_time" timestamp(6),
  "is_deleted" int2 DEFAULT '0'::smallint,
  "delete_time" timestamp(6)
)
;
COMMENT ON TABLE "pgcompare"."dc_role" IS '角色表';

-- ----------------------------
-- Records of dc_role
-- ----------------------------
INSERT INTO "pgcompare"."dc_role" VALUES (1, '超级管理员', 'SUPBER_ADMIN', '1', '权限超级大，拥有所有权限', 2, 1, 'admin', 1, 'admin', '2024-03-09 10:21:23', '2024-03-09 10:21:25', 0, NULL);
INSERT INTO "pgcompare"."dc_role" VALUES (2, '普通管理员', 'ADMIN', '1', '只拥有部分管理权限', 2, 1, 'admin', 1, 'admin', '2024-03-09 10:21:23', '2024-03-09 10:21:25', 0, NULL);

-- ----------------------------
-- Table structure for dc_role_resource
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_role_resource";
CREATE TABLE "pgcompare"."dc_role_resource" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".dc_role_resource_id_seq'::regclass),
  "role_id" int8 NOT NULL,
  "resource_id" int8 NOT NULL,
  "create_id" int8,
  "create_by" varchar(45) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "update_id" int8,
  "update_by" varchar(16) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_time" timestamp(6),
  "update_time" timestamp(6),
  "is_deleted" int2 NOT NULL DEFAULT '0'::smallint,
  "delete_time" timestamp(6)
)
;
COMMENT ON TABLE "pgcompare"."dc_role_resource" IS '角色资源关联表';

-- ----------------------------
-- Records of dc_role_resource
-- ----------------------------
INSERT INTO "pgcompare"."dc_role_resource" VALUES (1, 1, 1, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (2, 1, 2, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (3, 1, 3, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (4, 1, 4, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (5, 1, 5, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (6, 1, 6, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (7, 1, 7, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (8, 1, 8, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (9, 1, 9, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (10, 1, 10, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (11, 1, 11, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (12, 1, 12, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (14, 1, 14, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (15, 1, 15, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (16, 1, 16, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (17, 1, 17, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (18, 1, 18, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (19, 1, 19, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (20, 1, 20, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (21, 1, 21, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (22, 1, 22, 1, 'admin', 1, 'admin', '2024-03-11 10:24:29', NULL, 0, NULL);
INSERT INTO "pgcompare"."dc_role_resource" VALUES (23, 1, 27, 1, 'admin', 1, 'admin', '2024-04-01 10:24:29', NULL, 0, NULL);

-- ----------------------------
-- Table structure for dc_source
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_source";
CREATE TABLE "pgcompare"."dc_source" (
  "tid" int8,
  "table_name" text COLLATE "pg_catalog"."default",
  "batch_nbr" int4,
  "pk" jsonb,
  "pk_hash" varchar(100) COLLATE "pg_catalog"."default",
  "column_hash" varchar(100) COLLATE "pg_catalog"."default",
  "compare_result" char(1) COLLATE "pg_catalog"."default",
  "thread_nbr" int4
)
;

-- ----------------------------
-- Records of dc_source
-- ----------------------------
INSERT INTO "pgcompare"."dc_source" VALUES (370, 'students', 1, '{"id": 2}', 'c76c172f4fa3449f41530525a2511dff', '75e892df1f1b489e6a7c7a5ce1191c94', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (370, 'students', 1, '{"id": 4}', '608fe08830b16108bbf606333125de30', 'c75f9613aed54cbbebcbe513f1e4d32c', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (370, 'students', 1, '{"id": 5}', 'a6051eceb532c8cf6547634a118dcc84', '4cc93c52e0c2e4697f2003c29d15ced9', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (369, 'employees', 1, '{"id": 3}', '4c93a9727d6b4558337c6ada1361b22d', 'a720c5d4e309153a0eb61e906a4200d3', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (369, 'employees', 1, '{"id": 6}', '51c27baa33922f5df51ecc9db59510d4', 'bc087477ed5319c5f82dee9ca1c63df8', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (372, 'students', 1, '{"id": 2}', 'c76c172f4fa3449f41530525a2511dff', '75e892df1f1b489e6a7c7a5ce1191c94', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (372, 'students', 1, '{"id": 4}', '608fe08830b16108bbf606333125de30', 'c75f9613aed54cbbebcbe513f1e4d32c', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (372, 'students', 1, '{"id": 5}', 'a6051eceb532c8cf6547634a118dcc84', '4cc93c52e0c2e4697f2003c29d15ced9', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (371, 'employees', 1, '{"id": 3}', '4c93a9727d6b4558337c6ada1361b22d', 'a720c5d4e309153a0eb61e906a4200d3', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (371, 'employees', 1, '{"id": 6}', '51c27baa33922f5df51ecc9db59510d4', 'bc087477ed5319c5f82dee9ca1c63df8', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (374, 'students', 1, '{"id": 2}', 'c76c172f4fa3449f41530525a2511dff', '75e892df1f1b489e6a7c7a5ce1191c94', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (374, 'students', 1, '{"id": 4}', '608fe08830b16108bbf606333125de30', 'c75f9613aed54cbbebcbe513f1e4d32c', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (374, 'students', 1, '{"id": 5}', 'a6051eceb532c8cf6547634a118dcc84', '4cc93c52e0c2e4697f2003c29d15ced9', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (373, 'employees', 1, '{"id": 3}', '4c93a9727d6b4558337c6ada1361b22d', 'a720c5d4e309153a0eb61e906a4200d3', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (373, 'employees', 1, '{"id": 6}', '51c27baa33922f5df51ecc9db59510d4', 'bc087477ed5319c5f82dee9ca1c63df8', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (376, 'students', 1, '{"id": 2}', 'c76c172f4fa3449f41530525a2511dff', '75e892df1f1b489e6a7c7a5ce1191c94', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (376, 'students', 1, '{"id": 4}', '608fe08830b16108bbf606333125de30', 'c75f9613aed54cbbebcbe513f1e4d32c', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (376, 'students', 1, '{"id": 5}', 'a6051eceb532c8cf6547634a118dcc84', '4cc93c52e0c2e4697f2003c29d15ced9', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (375, 'employees', 1, '{"id": 3}', '4c93a9727d6b4558337c6ada1361b22d', 'a720c5d4e309153a0eb61e906a4200d3', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (375, 'employees', 1, '{"id": 6}', '51c27baa33922f5df51ecc9db59510d4', 'bc087477ed5319c5f82dee9ca1c63df8', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (379, 'employees', 1, '{"id": 3}', '4c93a9727d6b4558337c6ada1361b22d', '8a6236516fc20ff21b433fd14193d682', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (379, 'employees', 1, '{"id": 6}', '51c27baa33922f5df51ecc9db59510d4', 'fc07c2017eeffc6e553abb869dbd4166', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (380, 'students', 1, '{"id": 2}', 'c76c172f4fa3449f41530525a2511dff', 'ddb81fbb51958152b17463fe543421ce', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (380, 'students', 1, '{"id": 4}', '608fe08830b16108bbf606333125de30', '0677f404982055365b8310d8f7ec1282', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (380, 'students', 1, '{"id": 5}', 'a6051eceb532c8cf6547634a118dcc84', 'ed8dfd64ec0f2636c8f7fc333c23e7dd', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (381, 'students', 1, '{"id": 2}', 'c76c172f4fa3449f41530525a2511dff', '75e892df1f1b489e6a7c7a5ce1191c94', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (381, 'students', 1, '{"id": 4}', '608fe08830b16108bbf606333125de30', 'c75f9613aed54cbbebcbe513f1e4d32c', 'n', 0);
INSERT INTO "pgcompare"."dc_source" VALUES (381, 'students', 1, '{"id": 5}', 'a6051eceb532c8cf6547634a118dcc84', '4cc93c52e0c2e4697f2003c29d15ced9', 'n', 0);

-- ----------------------------
-- Table structure for dc_table
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_table";
CREATE TABLE "pgcompare"."dc_table" (
  "pid" int8 NOT NULL DEFAULT 1,
  "tid" int8 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1
),
  "table_alias" text COLLATE "pg_catalog"."default",
  "status" varchar(10) COLLATE "pg_catalog"."default" DEFAULT 'disabled'::character varying,
  "batch_nbr" int4 DEFAULT 1,
  "parallel_degree" int4 DEFAULT 1
)
;


-- ----------------------------
-- Table structure for dc_table_column
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_table_column";
CREATE TABLE "pgcompare"."dc_table_column" (
  "tid" int8 NOT NULL,
  "column_id" int8 NOT NULL GENERATED ALWAYS AS IDENTITY (
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1
),
  "column_alias" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "status" varchar(15) COLLATE "pg_catalog"."default" DEFAULT 'compare'::character varying
)
;


-- ----------------------------
-- Table structure for dc_table_column_map
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_table_column_map";
CREATE TABLE "pgcompare"."dc_table_column_map" (
  "tid" int8 NOT NULL,
  "column_id" int8 NOT NULL,
  "column_origin" varchar(10) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 'source'::character varying,
  "column_name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "data_type" varchar(30) COLLATE "pg_catalog"."default" NOT NULL,
  "data_class" varchar(20) COLLATE "pg_catalog"."default" DEFAULT 'string'::character varying,
  "data_length" int4,
  "number_precision" int4,
  "number_scale" int4,
  "column_nullable" bool DEFAULT true,
  "column_primarykey" bool DEFAULT false,
  "map_expression" varchar(500) COLLATE "pg_catalog"."default",
  "supported" bool DEFAULT true,
  "preserve_case" bool DEFAULT false,
  "map_type" varchar(15) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 'column'::character varying
)
;


-- ----------------------------
-- Table structure for dc_table_history
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_table_history";
CREATE TABLE "pgcompare"."dc_table_history" (
  "tid" int8 NOT NULL,
  "load_id" varchar(100) COLLATE "pg_catalog"."default",
  "batch_nbr" int4 NOT NULL,
  "start_dt" timestamptz(6) NOT NULL,
  "end_dt" timestamptz(6),
  "action_result" jsonb,
  "action_type" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "row_count" int8
)
;


-- ----------------------------
-- Table structure for dc_table_map
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_table_map";
CREATE TABLE "pgcompare"."dc_table_map" (
  "tid" int8 NOT NULL,
  "dest_type" varchar(20) COLLATE "pg_catalog"."default" NOT NULL DEFAULT 'target'::character varying,
  "schema_name" text COLLATE "pg_catalog"."default" NOT NULL,
  "table_name" text COLLATE "pg_catalog"."default" NOT NULL,
  "parallel_degree" int4 DEFAULT 1,
  "mod_column" varchar(200) COLLATE "pg_catalog"."default",
  "table_filter" varchar(200) COLLATE "pg_catalog"."default",
  "schema_preserve_case" bool DEFAULT false,
  "table_preserve_case" bool DEFAULT false
)
;


-- ----------------------------
-- Table structure for dc_target
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_target";
CREATE TABLE "pgcompare"."dc_target" (
  "tid" int8,
  "table_name" text COLLATE "pg_catalog"."default",
  "batch_nbr" int4,
  "pk" jsonb,
  "pk_hash" varchar(100) COLLATE "pg_catalog"."default",
  "column_hash" varchar(100) COLLATE "pg_catalog"."default",
  "compare_result" char(1) COLLATE "pg_catalog"."default",
  "thread_nbr" int4
)
;


-- ----------------------------
-- Table structure for dc_user
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_user";
CREATE TABLE "pgcompare"."dc_user" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".dc_user_id_seq'::regclass),
  "nick_name" varchar(30) COLLATE "pg_catalog"."default" NOT NULL,
  "user_name" varchar(30) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "status" varchar(1) COLLATE "pg_catalog"."default" NOT NULL,
  "otp_secret" varchar(100) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "user_gender" varchar(2) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "user_phone" varchar(20) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "user_email" varchar(30) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "last_login_time" timestamp(6),
  "last_login_ip" varchar(50) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_id" int8,
  "create_by" varchar(12) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_time" timestamp(6),
  "update_id" int8,
  "update_by" varchar(12) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "update_time" timestamp(6),
  "is_deleted" int2,
  "delete_time" timestamp(6)
)
;
COMMENT ON TABLE "pgcompare"."dc_user" IS '用户表';

-- ----------------------------
-- Records of dc_user
-- ----------------------------
INSERT INTO "pgcompare"."dc_user" VALUES (1, '管理员', 'admin', '$2a$10$qbdPPGSnLm2oQwgLXyX8wOTgVZLHnm2pqS.We5.n6do3YfVxobCUy', '1', '', '1', '13189770694', 'abc@qq.com', '2025-12-22 10:14:29.176', '10.16.6.22', 1, 'admin', '2020-01-01 19:00:00', 1, 'admin', '2024-03-10 11:42:46', 0, NULL);
INSERT INTO "pgcompare"."dc_user" VALUES (2, 'Soybean', 'soybean', '$2a$10$qbdPPGSnLm2oQwgLXyX8wOTgVZLHnm2pqS.We5.n6do3YfVxobCUy', '1', NULL, '1', '13892700749', '123@qq.com', '2024-04-09 22:49:09', '192.168.2.128', 1, 'admin', '2024-03-09 21:56:34', NULL, NULL, NULL, 0, NULL);

-- ----------------------------
-- Table structure for dc_user_role
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."dc_user_role";
CREATE TABLE "pgcompare"."dc_user_role" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".dc_user_role_id_seq'::regclass),
  "user_id" int8 NOT NULL,
  "role_id" int8 NOT NULL,
  "create_id" int8,
  "create_by" varchar(45) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "update_id" int8,
  "update_by" varchar(45) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_time" timestamp(6) NOT NULL,
  "update_time" timestamp(6),
  "is_deleted" int2 NOT NULL DEFAULT '0'::smallint,
  "delete_time" timestamp(6)
)
;
COMMENT ON TABLE "pgcompare"."dc_user_role" IS '用户角色关联表';

-- ----------------------------
-- Records of dc_user_role
-- ----------------------------
INSERT INTO "pgcompare"."dc_user_role" VALUES (1, 1, 1, 1, 'admin', 1, 'admin', '2024-03-09 10:37:52', '2024-03-09 10:38:04', 0, NULL);
INSERT INTO "pgcompare"."dc_user_role" VALUES (2, 2, 1, 1, 'admin', 1, 'admin', '2024-03-10 13:10:39', '2024-03-10 13:10:41', 0, NULL);

-- ----------------------------
-- Table structure for job_data_contrast
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."job_data_contrast";
CREATE TABLE "pgcompare"."job_data_contrast" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".job_data_contrast_id_seq'::regclass),
  "task_name" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "reader_datasource_id" int8 NOT NULL,
  "writer_datasource_id" int8 NOT NULL,
  "reader_schema" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "writer_schema" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP(0),
  "update_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP(0),
  "meta_type" varchar(10) COLLATE "pg_catalog"."default",
  "pid" int8
)
;


-- ----------------------------
-- Table structure for job_jdbc_datasource
-- ----------------------------
DROP TABLE IF EXISTS "pgcompare"."job_jdbc_datasource";
CREATE TABLE "pgcompare"."job_jdbc_datasource" (
  "id" int8 NOT NULL DEFAULT nextval('"pgcompare".job_jdbc_datasource_id_seq'::regclass),
  "datasource_name" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
  "datasource_group" varchar(200) COLLATE "pg_catalog"."default" DEFAULT 'Default'::character varying,
  "jdbc_username" varchar(100) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "jdbc_password" varchar(200) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "jdbc_url" varchar(500) COLLATE "pg_catalog"."default" NOT NULL,
  "jdbc_driver_class" varchar(200) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "status" numeric(1,0) NOT NULL DEFAULT 1,
  "create_by" varchar(20) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "create_date" timestamp(6) DEFAULT CURRENT_TIMESTAMP(0),
  "update_by" varchar(20) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "update_date" timestamp(6),
  "comments" varchar(1000) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "datasource" varchar(45) COLLATE "pg_catalog"."default" NOT NULL,
  "zk_adress" varchar(200) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying,
  "database_name" varchar(45) COLLATE "pg_catalog"."default" DEFAULT NULL::character varying
)
;

-- ----------------------------
-- Records of job_jdbc_datasource
-- ----------------------------
INSERT INTO "pgcompare"."job_jdbc_datasource" VALUES (1, 'dataCompareM', 'Default', 'root', 'root', 'jdbc:mysql://localhost:3306/testcompare?useSSL=false', 'com.mysql.cj.jdbc.Driver', 1, 'admin', '2025-12-17 15:13:42', NULL, NULL, NULL, 'mysql', NULL, NULL);
INSERT INTO "pgcompare"."job_jdbc_datasource" VALUES (2, 'dataCompareP', 'Default', 'postgres', 'postgres', 'jdbc:postgresql://localhost:5432/testcompare', 'org.postgresql.Driver', 1, 'admin', '2025-12-17 15:14:40', NULL, NULL, NULL, 'postgresql', NULL, NULL);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."common_data_id_seq"
OWNED BY "pgcompare"."common_data"."id";
SELECT setval('"pgcompare"."common_data_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."configurations_config_id_seq"
OWNED BY "pgcompare"."dc_configurations"."config_id";
SELECT setval('"pgcompare"."configurations_config_id_seq"', 45, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_config_id_seq"
OWNED BY "pgcompare"."dc_config"."id";
SELECT setval('"pgcompare"."dc_config_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_operation_log_id_seq"
OWNED BY "pgcompare"."dc_operation_log"."id";
SELECT setval('"pgcompare"."dc_operation_log_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_project_pid_seq"
OWNED BY "pgcompare"."dc_project"."pid";
SELECT setval('"pgcompare"."dc_project_pid_seq"', 8, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_reconciliation_results_id_seq"
OWNED BY "pgcompare"."dc_reconciliation_results"."id";
SELECT setval('"pgcompare"."dc_reconciliation_results_id_seq"', 33, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_resource_id_seq"
OWNED BY "pgcompare"."dc_resource"."id";
SELECT setval('"pgcompare"."dc_resource_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_result_cid_seq"
OWNED BY "pgcompare"."dc_result"."cid";
SELECT setval('"pgcompare"."dc_result_cid_seq"', 427, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_role_id_seq"
OWNED BY "pgcompare"."dc_role"."id";
SELECT setval('"pgcompare"."dc_role_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_role_resource_id_seq"
OWNED BY "pgcompare"."dc_role_resource"."id";
SELECT setval('"pgcompare"."dc_role_resource_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_table_column_column_id_seq"
OWNED BY "pgcompare"."dc_table_column"."column_id";
SELECT setval('"pgcompare"."dc_table_column_column_id_seq"', 978, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_table_tid_seq"
OWNED BY "pgcompare"."dc_table"."tid";
SELECT setval('"pgcompare"."dc_table_tid_seq"', 381, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_user_id_seq"
OWNED BY "pgcompare"."dc_user"."id";
SELECT setval('"pgcompare"."dc_user_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."dc_user_role_id_seq"
OWNED BY "pgcompare"."dc_user_role"."id";
SELECT setval('"pgcompare"."dc_user_role_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."job_data_contrast_id_seq"
OWNED BY "pgcompare"."job_data_contrast"."id";
SELECT setval('"pgcompare"."job_data_contrast_id_seq"', 4, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "pgcompare"."job_jdbc_datasource_id_seq"
OWNED BY "pgcompare"."job_jdbc_datasource"."id";
SELECT setval('"pgcompare"."job_jdbc_datasource_id_seq"', 2, true);

-- ----------------------------
-- Indexes structure for table dc_config
-- ----------------------------
CREATE UNIQUE INDEX "param_key_idx" ON "pgcompare"."dc_config" USING btree (
  "param_key" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table dc_config
-- ----------------------------
ALTER TABLE "pgcompare"."dc_config" ADD CONSTRAINT "dc_config_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table dc_configurations
-- ----------------------------
ALTER TABLE "pgcompare"."dc_configurations" ADD CONSTRAINT "configurations_pkey" PRIMARY KEY ("config_id");

-- ----------------------------
-- Primary Key structure for table dc_operation_log
-- ----------------------------
ALTER TABLE "pgcompare"."dc_operation_log" ADD CONSTRAINT "dc_operation_log_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for dc_project
-- ----------------------------
SELECT setval('"pgcompare"."dc_project_pid_seq"', 8, true);

-- ----------------------------
-- Primary Key structure for table dc_project
-- ----------------------------
ALTER TABLE "pgcompare"."dc_project" ADD CONSTRAINT "dc_project_pk" PRIMARY KEY ("pid");

-- ----------------------------
-- Primary Key structure for table dc_reconciliation_results
-- ----------------------------
ALTER TABLE "pgcompare"."dc_reconciliation_results" ADD CONSTRAINT "reconciliation_results_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table dc_resource
-- ----------------------------
CREATE INDEX "dc_resource_ui_path_idx" ON "pgcompare"."dc_resource" USING btree (
  "ui_path" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table dc_resource
-- ----------------------------
ALTER TABLE "pgcompare"."dc_resource" ADD CONSTRAINT "dc_resource_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table dc_result
-- ----------------------------
CREATE INDEX "dc_result_idx1" ON "pgcompare"."dc_result" USING btree (
  "table_name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "compare_start" "pg_catalog"."timestamptz_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table dc_result
-- ----------------------------
ALTER TABLE "pgcompare"."dc_result" ADD CONSTRAINT "dc_result_pk" PRIMARY KEY ("cid");

-- ----------------------------
-- Primary Key structure for table dc_role
-- ----------------------------
ALTER TABLE "pgcompare"."dc_role" ADD CONSTRAINT "dc_role_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table dc_role_resource
-- ----------------------------
ALTER TABLE "pgcompare"."dc_role_resource" ADD CONSTRAINT "dc_role_resource_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Auto increment value for dc_table
-- ----------------------------
SELECT setval('"pgcompare"."dc_table_tid_seq"', 381, true);

-- ----------------------------
-- Primary Key structure for table dc_table
-- ----------------------------
ALTER TABLE "pgcompare"."dc_table" ADD CONSTRAINT "dc_table_pk" PRIMARY KEY ("tid");

-- ----------------------------
-- Auto increment value for dc_table_column
-- ----------------------------
SELECT setval('"pgcompare"."dc_table_column_column_id_seq"', 978, true);

-- ----------------------------
-- Primary Key structure for table dc_table_column
-- ----------------------------
ALTER TABLE "pgcompare"."dc_table_column" ADD CONSTRAINT "dc_table_column_pk" PRIMARY KEY ("column_id");

-- ----------------------------
-- Primary Key structure for table dc_table_column_map
-- ----------------------------
ALTER TABLE "pgcompare"."dc_table_column_map" ADD CONSTRAINT "dc_table_column_map_pk" PRIMARY KEY ("column_id", "column_origin", "column_name");

-- ----------------------------
-- Indexes structure for table dc_table_history
-- ----------------------------
CREATE INDEX "dc_table_history_idx1" ON "pgcompare"."dc_table_history" USING btree (
  "tid" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "start_dt" "pg_catalog"."timestamptz_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table dc_table_map
-- ----------------------------
ALTER TABLE "pgcompare"."dc_table_map" ADD CONSTRAINT "dc_table_map_pk" PRIMARY KEY ("tid", "dest_type", "schema_name", "table_name");

-- ----------------------------
-- Primary Key structure for table dc_user
-- ----------------------------
ALTER TABLE "pgcompare"."dc_user" ADD CONSTRAINT "dc_user_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table dc_user_role
-- ----------------------------
ALTER TABLE "pgcompare"."dc_user_role" ADD CONSTRAINT "dc_user_role_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table job_data_contrast
-- ----------------------------
ALTER TABLE "pgcompare"."job_data_contrast" ADD CONSTRAINT "job_data_contrast_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table job_jdbc_datasource
-- ----------------------------
ALTER TABLE "pgcompare"."job_jdbc_datasource" ADD CONSTRAINT "job_jdbc_datasource_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table dc_table_column
-- ----------------------------
ALTER TABLE "pgcompare"."dc_table_column" ADD CONSTRAINT "dc_table_column_fk" FOREIGN KEY ("tid") REFERENCES "pgcompare"."dc_table" ("tid") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table dc_table_column_map
-- ----------------------------
ALTER TABLE "pgcompare"."dc_table_column_map" ADD CONSTRAINT "dc_table_column_map_fk" FOREIGN KEY ("column_id") REFERENCES "pgcompare"."dc_table_column" ("column_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table dc_table_map
-- ----------------------------
ALTER TABLE "pgcompare"."dc_table_map" ADD CONSTRAINT "dc_table_map_fk" FOREIGN KEY ("tid") REFERENCES "pgcompare"."dc_table" ("tid") ON DELETE CASCADE ON UPDATE NO ACTION;
