import { transformRecordToOption, translateOptions, translateOptionsDb, translateOptionsSubMeta } from '@/utils/common';

/** 已支持的数据源信息 */
// export const datasourceRecord = [
//   { label: 'Halo', value: 'halo', imageUrl: '/src/assets/db-imgs/halo.png' },
//   { label: 'MySQL', value: 'mysql', imageUrl: '/src/assets/db-imgs/mysql.png' },
//   { label: 'Oracle', value: 'oracle', imageUrl: '/src/assets/db-imgs/oracle.png' },
//   { label: 'PostgreSQL', value: 'postgresql', imageUrl: '/src/assets/db-imgs/postgresql.png' },
//   { label: 'SQL Server', value: 'sqlserver', imageUrl: '/src/assets/db-imgs/sqlserver.png' },
//   { label: '达梦数据库', value: 'dm', imageUrl: '/src/assets/db-imgs/dm.png' },
//   { label: 'Db2', value: 'db2', imageUrl: '/src/assets/db-imgs/db2.png' },
//   { label: 'Hive', value: 'hive', imageUrl: '/src/assets/db-imgs/hive.png' }
// ];

import haloImg from '@/assets/db-imgs/halo.png';
import mysqlImg from '@/assets/db-imgs/mysql.png';
import oracleImg from '@/assets/db-imgs/oracle.png';
import postgresqlImg from '@/assets/db-imgs/postgresql.png';
import sqlserverImg from '@/assets/db-imgs/sqlserver.png';
import dmImg from '@/assets/db-imgs/dm.png';
import db2Img from '@/assets/db-imgs/db2.png';
import hiveImg from '@/assets/db-imgs/hive.png';
import polardbImg from '@/assets/db-imgs/polardb.png';


// export const enableStatusRecord: Record<Api.Common.EnableStatus, App.I18n.I18nKey> = {
//   '1': 'page.manage.common.status.enable',
//   '2': 'page.manage.common.status.disable'
// };

// export const enableStatusOptions = transformRecordToOption(enableStatusRecord);

// export const userGenderRecord: Record<Api.SystemManage.UserGender, App.I18n.I18nKey> = {
//   '1': 'page.manage.user.gender.male',
//   '2': 'page.manage.user.gender.female'
// };

// export const userGenderOptions = transformRecordToOption(userGenderRecord);

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

// export const userGenderRecord = [
//   { value: 1, label: 'page.manage.user.gender.male' },
//   { value: 2, label: 'page.manage.user.gender.female' }
// ];

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

/** 执行器注册方式 （自动、人工） */
export const registerTypeRecord: Record<Api.ExecutorManage.RegisterType, App.I18n.I18nKey> = {
  '0': 'page.executor.manage.register.autoRegister',
  '1': 'page.executor.manage.register.manualRegister'
};

export const numberRegisterTypeOptions = [
  { value: 0, label: 'page.executor.manage.register.autoRegister' },
  { value: 1, label: 'page.executor.manage.register.manualRegister' }
];

export const registerTypeOptions = [
  { value: '0', label: 'page.executor.manage.register.autoRegister' },
  { value: '1', label: 'page.executor.manage.register.manualRegister' }
];

/** 数据类型映射是否保留括号值 */
export const isRetainValueRecord: Record<Api.DtmManage.IsRetainValue, App.I18n.I18nKey> = {
  '0': 'page.task.datatype.form.value.notRetainValue',
  '1': 'page.task.datatype.form.value.retainValue'
};

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
  '0': 'page.manage.user.gender.unknown',
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
    label: 'page.datasource.manage.datasourceRecord.halo',
    value: 'halo',
    imageUrl: haloImg
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
    label: 'page.datasource.manage.datasourceRecord.dm',
    value: 'dm',
    imageUrl: dmImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.db2',
    value: 'db2',
    imageUrl: db2Img
  },
  {
    label: 'page.datasource.manage.datasourceRecord.hive',
    value: 'hive',
    imageUrl: hiveImg
  },
  {
    label: 'page.datasource.manage.datasourceRecord.polardb',
    value: 'polardb',
    imageUrl: polardbImg
  }
];

export const datasourceOptions = translateOptionsDb(datasourceRecord);

/** 已支持的元数据类型 */
export const subMetaTypeRecord = [
  {
    value: 1,
    label: 'page.task.submeta.subMetaTypeRecord.type'
  },
  {
    value: 2,
    label: 'page.task.submeta.subMetaTypeRecord.table'
  },
  {
    value: 3,
    label: 'page.task.submeta.subMetaTypeRecord.constraints'
  },
  {
    value: 4,
    label: 'page.task.submeta.subMetaTypeRecord.index'
  },
  {
    value: 5,
    label: 'page.task.submeta.subMetaTypeRecord.function'
  },
  {
    value: 6,
    label: 'page.task.submeta.subMetaTypeRecord.procedure'
  },
  {
    value: 7,
    label: 'page.task.submeta.subMetaTypeRecord.view'
  },
  {
    value: 8,
    label: 'page.task.submeta.subMetaTypeRecord.trigger'
  },
  {
    value: 9,
    label: 'page.task.submeta.subMetaTypeRecord.package'
  },
  {
    value: 10,
    label: 'page.task.submeta.subMetaTypeRecord.sequence'
  },
  {
    value: 11,
    label: 'page.task.submeta.subMetaTypeRecord.tablecomment'
  },
  {
    value: 12,
    label: 'page.task.submeta.subMetaTypeRecord.synonym'
  }
];

export const subMetaTypeOptions = translateOptionsSubMeta(subMetaTypeRecord);

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
