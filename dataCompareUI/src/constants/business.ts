import { transformRecordToOption, translateOptions, translateOptionsDb, translateOptionsSubMeta } from '@/utils/common';

/** 已支持的数据源信息 */

import haloImg from '@/assets/db-imgs/halo.png';
import mysqlImg from '@/assets/db-imgs/mysql.png';
import oracleImg from '@/assets/db-imgs/oracle.png';
import postgresqlImg from '@/assets/db-imgs/postgresql.png';
import sqlserverImg from '@/assets/db-imgs/sqlserver.png';
import dmImg from '@/assets/db-imgs/dm.png';
import db2Img from '@/assets/db-imgs/db2.png';
import hiveImg from '@/assets/db-imgs/hive.png';
import polardbImg from '@/assets/db-imgs/polarDb.png';
import tidbImg from '@/assets/db-imgs/tidb.png';
import oceanbaseImg from '@/assets/db-imgs/oceanbase.png';
import snowflakeImg from '@/assets/db-imgs/snowflake.png';
import mariadbImg from '@/assets/db-imgs/mariadb.png';
import kingbaseImg from '@/assets/db-imgs/kingbase.png';
import opengaussImg from '@/assets/db-imgs/opengauss.png';


export const menuTypeRecord: Record<Api.SystemManage.MenuType, App.I18n.I18nKey> = {
  '1': 'page.manage.menu.type.directory',
  '2': 'page.manage.menu.type.menu'
};

export const menuTypeOptions = transformRecordToOption(menuTypeRecord);

export const menuIconTypeRecord: Record<Api.SystemManage.IconType, App.I18n.I18nKey> = {
  '1': 'page.manage.menu.iconType.iconify',
  '2': 'page.manage.menu.iconType.local'
};

export const menuIconTypeOptions = transformRecordToOption(menuIconTypeRecord);


/** 元、数据对比方式 （一致、不一致） */
export const isCorrectRecord: Record<Api.DataDetailsManage.IsCorrect, App.I18n.I18nKey> = {
  '-1': 'page.contrast.dataDetails.allTable',
  '0': 'page.contrast.dataDetails.isCorrect.consistent',
  '1': 'page.contrast.dataDetails.isCorrect.inconsistent'
};

export const numberIsCorrectOptions = [
  { value: -1, label: 'page.contrast.dataDetails.allTable' },
  { value: 0, label: 'page.contrast.dataDetails.isCorrect.consistent' },
  { value: 1, label: 'page.contrast.dataDetails.isCorrect.inconsistent' }
];

export const isCorrectOptions = [
  { value: '-1', label: 'page.contrast.dataDetails.allTable' },
  { value: '0', label: 'page.contrast.dataDetails.isCorrect.consistent' },
  { value: '1', label: 'page.contrast.dataDetails.isCorrect.inconsistent' }
];


export const numberRegisterTypeOptions = [
  { value: 0, label: 'page.executor.manage.register.autoRegister' },
  { value: 1, label: 'page.executor.manage.register.manualRegister' }
];

export const registerTypeOptions = [
  { value: '0', label: 'page.executor.manage.register.autoRegister' },
  { value: '1', label: 'page.executor.manage.register.manualRegister' }
];

export const numberIsRetainValueOptions = [
  { value: 0, label: 'page.task.datatype.form.value.notRetainValue' },
  { value: 1, label: 'page.task.datatype.form.value.retainValue' }
];

export const IsRetainValueOptions = [
  { value: '0', label: 'page.task.datatype.form.value.notRetainValue' },
  { value: '1', label: 'page.task.datatype.form.value.retainValue' }
];

/** 用户的启用/停用状态 */

export const enableStatusRecord: Record<Api.Common.EnableStatus, App.I18n.I18nKey> = {
  '1': 'page.manage.common.status.enable',
  '2': 'page.manage.common.status.disable'
};

export const numberEnableStatusOptions = [
  { value: 1, label: 'page.manage.common.status.enable' },
  { value: 2, label: 'page.manage.common.status.disable' }
];

export const enableStatusOptions = [
  { value: '1', label: 'page.manage.common.status.enable' },
  { value: '2', label: 'page.manage.common.status.disable' }
];

/** 用户性别 */

export const userGenderRecord: Record<Api.SystemManage.UserGender, App.I18n.I18nKey> = {
  '1': 'page.manage.user.gender.male',
  '2': 'page.manage.user.gender.female'
};

export const numberUserGenderOptions = [
  { value: 0, label: 'page.manage.user.gender.unknown' },
  { value: 1, label: 'page.manage.user.gender.male' },
  { value: 2, label: 'page.manage.user.gender.female' }
];

export const userGenderOptions = [
  { value: '0', label: 'page.manage.user.gender.unknown' },
  { value: '1', label: 'page.manage.user.gender.male' },
  { value: '2', label: 'page.manage.user.gender.female' }
];

export const datasourceRecord = [
  {
    label: 'page.datasource.manage.datasourceRecord.snowflake',
    value: 'snowflake',
    imageUrl: snowflakeImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.mysql',
    value: 'mysql',
    imageUrl: mysqlImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.oracle',
    value: 'oracle',
    imageUrl: oracleImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.postgresql',
    value: 'postgresql',
    imageUrl: postgresqlImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.sqlserver',
    value: 'sqlserver',
    imageUrl: sqlserverImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.db2',
    value: 'db2',
    imageUrl: db2Img
  },
  {
    label: 'page.datasource.manage.datasourceRecord.mariadb',
    value: 'mariadb',
    imageUrl: mariadbImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.hive',
    value: 'hive',
    imageUrl: hiveImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.halo',
    value: 'halo',
    imageUrl: haloImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.dm',
    value: 'dm',
    imageUrl: dmImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.polardb',
    value: 'polardb',
    imageUrl: polardbImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.tidb',
    value: 'tidb',
    imageUrl: tidbImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.oceanbase',
    value: 'oceanbase',
    imageUrl: oceanbaseImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.kingbase',
    value: 'kingbase',
    imageUrl: kingbaseImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.opengauss',
    value: 'opengauss',
    imageUrl: opengaussImg
  }
];

export const datasourceOptions = translateOptionsDb(datasourceRecord);

/** 是否包含大字段 */
export const isBigTypeRecord = [
  {
    value: 1,
    label: 'page.task.manage.isBigTypeOptions.yes'
  },
  {
    value: 0,
    label: 'page.task.manage.isBigTypeOptions.no'
  }
];

export const isBigTypeOptions = translateOptionsSubMeta(isBigTypeRecord);

/** 执行状态 */
export const lastHandleCodeRecord = [
  {
    value: 0,
    label: 'page.task.manage.lastHandleCodeRecord.await'
  },
  {
    value: 1,
    label: 'page.task.manage.lastHandleCodeRecord.running'
  },
  {
    value: 200,
    label: 'page.task.manage.lastHandleCodeRecord.success'
  },
  {
    value: 500,
    label: 'page.task.manage.lastHandleCodeRecord.error'
  },
  {
    value: 502,
    label: 'page.task.manage.lastHandleCodeRecord.timeout'
  }
];

export const lastHandleCodeOptions = translateOptionsSubMeta(lastHandleCodeRecord);

/** 任务类型 */
export const glueTypeRecord = [
  {
    value: 'DATAX',
    label: 'page.task.manage.glueTypeRecord.datax'
  },
  {
    value: 'GLUE_SHELL',
    label: 'page.task.manage.glueTypeRecord.shell'
  }
];

export const glueTypeOptions = translateOptions(glueTypeRecord);

/** 路由策略 */
export const routeStrategiesRecord = [
  {
    value: 'FIRST',
    label: 'page.task.manage.routeStrategiesRecord.first'
  },
  {
    value: 'LAST',
    label: 'page.task.manage.routeStrategiesRecord.last'
  },
  {
    value: 'ROUND',
    label: 'page.task.manage.routeStrategiesRecord.round'
  },
  {
    value: 'RANDOM',
    label: 'page.task.manage.routeStrategiesRecord.random'
  },
  {
    value: 'CONSISTENT_HASH',
    label: 'page.task.manage.routeStrategiesRecord.consistentHash'
  },
  {
    value: 'LEAST_FREQUENTLY_USED',
    label: 'page.task.manage.routeStrategiesRecord.leastFrequentlyUsed'
  },
  {
    value: 'LEAST_RECENTLY_USED',
    label: 'page.task.manage.routeStrategiesRecord.leastRecentlyUsed'
  },
  {
    value: 'FAILOVER',
    label: 'page.task.manage.routeStrategiesRecord.failover'
  },
  {
    value: 'BUSYOVER',
    label: 'page.task.manage.routeStrategiesRecord.busyover'
  }
];

export const routeStrategiesOptions = translateOptions(routeStrategiesRecord);

/** 阻塞处理 */
export const blockStrategiesRecord = [
  {
    value: 'SERIAL_EXECUTION',
    label: 'page.task.manage.blockStrategiesRecord.serialExecution'
  },
  {
    value: 'DISCARD_LATER',
    label: 'page.task.manage.blockStrategiesRecord.discardLater'
  },
  {
    value: 'COVER_EARLY',
    label: 'page.task.manage.blockStrategiesRecord.coverEarly'
  }
];

export const blockStrategiesOptions = translateOptions(blockStrategiesRecord);

/** 元数据状态 */
export const isStatusValidRecord = [
  {
    value: 'INVALID',
    label: 'page.task.manage.isStatusValidRecord.invalid'
  },
  {
    value: 'VALID',
    label: 'page.task.manage.isStatusValidRecord.valid'
  },
  {
    value: 'ENABLED',
    label: 'page.task.manage.isStatusValidRecord.enabled'
  },
  {
    value: 'DISABLED',
    label: 'page.task.manage.isStatusValidRecord.disabled'
  }
];

export const isStatusValidOptions = translateOptions(isStatusValidRecord);

/** 数据校验 */
export const isStatusVerifyRecord = [
  {
    value: 'out-of-sync',
    label: 'page.contrast.verifyDetails.isStatusVerifyRecord.outOfSync'
  },
  {
    value: 'in-sync',
    label: 'page.contrast.verifyDetails.isStatusVerifyRecord.inSync'
  },
  {
    value: 'running',
    label: 'page.contrast.verifyDetails.isStatusVerifyRecord.running'
  },
  {
    value: 'skipped',
    label: 'page.contrast.verifyDetails.isStatusVerifyRecord.skipped'
  },
  {
    value: 'failed',
    label: 'page.contrast.verifyDetails.isStatusVerifyRecord.failed'
  }
];

export const isStatusVerifyOptions = translateOptions(isStatusVerifyRecord);
