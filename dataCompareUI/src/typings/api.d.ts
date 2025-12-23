/**
 * Namespace Api
 *
 * All backend api type
 */
declare namespace Api {
  namespace Common {
    /** common params of paginating */
    interface PaginatingCommonParams {
      /** current page number */
      current: number;
      /** page size */
      size: number;
      /** total count */
      total: number;
    }

    /** common params of paginating query list data */
    interface PaginatingQueryRecord<T = any> extends PaginatingCommonParams {
      records: T[];
    }

    /** common search params of table */
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /**
     * enable status
     *
     * - "1": enabled
     * - "2": disabled
     */
    type EnableStatus = '1' | '2';

    /** common record */
    type CommonRecord<T = any> = {
      /** record id */
      id: number;
      /** record creator */
      createBy: string;
      /** record create time */
      createTime: string;
      /** record updater */
      updateBy: string;
      /** record update time */
      updateTime: string;
      /** record status */
      status: EnableStatus | 1;
    } & T;
  }

  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    interface LoginToken {
      token: string;
      refreshToken: string;
    }

    interface UserInfo {
      userId: string;
      userName: string;
      roles: string[];
      buttons: string[];
    }
  }

  /**
   * namespace Route
   *
   * backend api module: "route"
   */
  namespace Route {
    type ElegantConstRoute = import('@elegant-router/types').ElegantConstRoute;

    interface MenuRoute extends ElegantConstRoute {
      id: string;
    }

    interface UserRoute {
      routes: MenuRoute[];
      home: import('@elegant-router/types').LastLevelRouteKey;
    }
  }

  /**
   * namespace SystemManage
   *
   * backend api module: "systemManage"
   */
  namespace SystemManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** role */
    type Role = Common.CommonRecord<{
      /** role name */
      roleName: string;
      /** role code */
      roleCode: string;
      /** role description */
      roleDesc: string;
    }>;

    /** role search params */
    type RoleSearchParams = CommonType.RecordNullable<
      Pick<Api.SystemManage.Role, 'roleName' | 'roleCode' | 'status'> & CommonSearchParams
    >;

    /** role list */
    type RoleList = Common.PaginatingQueryRecord<Role>;

    /** all role */
    type AllRole = Pick<Role, 'id' | 'roleName' | 'roleCode'>;

    /**
     * user gender
     *
     * - "0": "unknown"
     * - "1": "male"
     * - "2": "female"
     */
    type UserGender = '1' | '2';

    /** user */
    type User = Common.CommonRecord<{
      /** user name */
      userName: string;
      /** user gender */
      userGender: UserGender | null;
      /** user nick name */
      nickName: string;
      /** user phone */
      userPhone: string;
      /** user email */
      userEmail: string;
      /** user role code collection */
      userRoles: string[];

      lastLoginIp: string;

      lastLoginTime: string;
    }>;

    /** user search params */
    type UserSearchParams = CommonType.RecordNullable<
      Pick<Api.SystemManage.User, 'userName' | 'userGender' | 'nickName' | 'userPhone' | 'userEmail' | 'status'> &
        CommonSearchParams
    >;

    /** user list */
    type UserList = Common.PaginatingQueryRecord<User>;

    /**
     * menu type
     *
     * - "1": directory
     * - "2": menu
     */
    type MenuType = '1' | '2';

    type MenuButton = {
      /**
       * button code
       *
       * it can be used to control the button permission
       */
      code: string;
      /** button description */
      desc: string;
    };

    /**
     * icon type
     *
     * - "1": iconify icon
     * - "2": local icon
     */
    type IconType = '1' | '2';

    type MenuPropsOfRoute = Pick<
      import('vue-router').RouteMeta,
      | 'i18nKey'
      | 'keepAlive'
      | 'constant'
      | 'order'
      | 'href'
      | 'hideInMenu'
      | 'activeMenu'
      | 'multiTab'
      | 'fixedIndexInTab'
      | 'query'
    >;

    type Menu = Common.CommonRecord<{
      /** parent menu id */
      parentId: number;
      /** menu type */
      menuType: MenuType;
      /** menu name */
      menuName: string;
      /** route name */
      routeName: string;
      /** route path */
      routePath: string;
      /** component */
      component?: string;
      /** iconify icon name or local icon name */
      icon: string;
      /** icon type */
      iconType: IconType;
      /** buttons */
      buttons?: MenuButton[] | null;
      /** children menu */
      children?: Menu[] | null;
    }> &
      MenuPropsOfRoute;

    /** menu list */
    type MenuList = Common.PaginatingQueryRecord<Menu>;

    type MenuTree = {
      id: number;
      label: string;
      pId: number;
      children?: MenuTree[];
    };
  }

  /**
   * namespace Datasource
   *
   * backend api module: "datasource"
   */
  namespace DatasourceManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** datasource */
    type Datasource = Common.CommonRecord<{
      id: number;
      datasource: string | null;
      datasourceName: string;
      jdbcUsername: string;
      jdbcPassword: string;
      jdbcUrl: string;
      jdbcDriverClass: string;
      comments: string;
    }>;

    /** datasource search params */
    type DatasourceSearchParams = CommonType.RecordNullable<
      Pick<Api.DatasourceManage.Datasource, 'datasource' | 'datasourceName'> & CommonSearchParams
    >;

    /** datasource list */
    type DatasourceList = Common.PaginatingQueryRecord<Datasource>;
  }

  /**
   * namespace TaskBatchAdd
   *
   * backend api module: "TaskBatchAdd"
   */
  namespace TaskBatchAdd {
    /** taskBatchAdd */
    type taskBatchAdd = Common.CommonRecord<{
      readerDatasourceId: number | null;
      readerDataSource: string | undefined | null;
      readerSchema: string | null;
      readerTables: string[];
      writerDatasourceId: number | null;
      writeDataSource: string | undefined | null;
      writerSchema: string | null;
      writerTables: string[];
      templateId: number | null;
      readerSplitPk: string | null;
    }>;
  }

  /**
   * namespace SubMetaAdd
   *
   * backend api module: "SubMetaAdd"
   */
  namespace SubMetaAdd {
    /** subMetaAdd */
    type subMetaAdd = Common.CommonRecord<{
      datasourceId_1: number | null;
      schema: string | null;
      metaIds: number[];
      datasourceId_2: number | null;
      templateId: number | null;
      logFileName: string;
      tablePartNameSwitch: boolean;
      tableAndColSwitch: boolean;
      mysqlCommandSwitch: boolean;
      mysqlIp: string | null;
      mysqlPort: string | null;
      mysqlUser: string | null;
      mysqlPwd: string | null;
      selectAndSql: string | null;
      logFilePathUrl: string;
      tableSplitSwitch: boolean;
    }>;
  }

  /**
   * namespace TaskManage
   *
   * backend api module: "task"
   */
  namespace TaskManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** task */
    type TaskInfo = Common.CommonRecord<{
      id: number;
      jobGroup: number | undefined;
      jobDesc: string | null;
      executorRouteStrategy: string;
      executorBlockStrategy: string;
      alarmEmail: string | null;
      glueType: string;
      projectIds: number[];
      executorFailRetryCount: number;
      executorTimeout: number;
      glueSource: string | null;
      jobJson: string | null;
      filePath: string;
      lastHandleCode: number | null;
      jobCron: number | null;
      isBigType: number | null;
      projectName: string;
      updateTime: string;
      triggerStatus: number;
      jvmParam: string;
      projectId: number | undefined;
      isStatusValid: string[] | string;
    }>;

    /** task search params */
    type TaskSearchParams = CommonType.RecordNullable<
      Pick<
        Api.TaskManage.TaskInfo,
        | 'jobGroup'
        | 'jobDesc'
        | 'projectIds'
        | 'glueType'
        | 'lastHandleCode'
        | 'jobCron'
        | 'isBigType'
        | 'triggerStatus'
        | 'isStatusValid'
      > &
        CommonSearchParams
    >;

    /** task list */
    type TaskList = Common.PaginatingQueryRecord<TaskInfo>;
  }

  /**
   * namespace project
   *
   * backend api module: "jobProject"
   */
  namespace ProjectManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** project */
    type Project = Common.CommonRecord<{
      id: number;
      name: string;
      description: string;
      userName: string;
      automation: number;
      updateTime: string;
      triggerStatus: number;
      runningStatus: number;
      loggerFilePath: string;
    }>;

    /** project search params */
    type ProjectSearchParams = CommonType.RecordNullable<
      Pick<Api.ProjectManage.Project, 'name' | 'description' | 'automation'> & CommonSearchParams
    >;

    /** project list */
    type ProjectList = Common.PaginatingQueryRecord<Project>;
  }

  /**
   * namespace executor
   *
   * backend api module: "jobGroup"
   */
  namespace ExecutorManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** executor */
    type Executor = Common.CommonRecord<{
      id: number;
      appName: string;
      title: string;
      addressType: RegisterType | null;
      order: string;
      addressList: string;
    }>;

    /** executor search params */
    type ExecutorSearchParams = CommonType.RecordNullable<
      Pick<Api.ExecutorManage.Executor, 'title'> & CommonSearchParams
    >;

    /** executor list */
    type ExecutorList = Common.PaginatingQueryRecord<Executor>;

    /**
     * register type
     *
     * - "0": autoRegister
     * - "1": manualRegister
     */
    type RegisterType = 0 | 1;
  }

  /**
   * namespace dtm
   *
   * backend api module: "dataTypeMapping"
   */
  namespace DtmManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** data type mapping */
    type dtm = Common.CommonRecord<{
      id: number;
      datasource: string | null;
      readerDataType: string | null;
      writerDataType: string | null;
      isRetainValue: IsRetainValue;
      // updateTime: string;
    }>;

    /** dtm search params */
    type DtmSearchParams = CommonType.RecordNullable<Pick<Api.DtmManage.dtm, 'datasource'> & CommonSearchParams>;

    /** dtm list */
    type DtmList = Common.PaginatingQueryRecord<dtm>;

    /**
     * is retain value
     *
     * - "0": not ratain
     * - "1": retain
     */
    type IsRetainValue = 0 | 1;
  }

  /**
   * namespace contrast
   *
   * backend api module: "dataContrast"
   */
  namespace ContrastManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** contrast */
    type contrast = Common.CommonRecord<{
      id: number;
      taskName: string | null;
      readerDatasourceId: number | null;
      readerDatasource: string;
      writerDatasourceId: number | null;
      writerDatasource: string;
      readerSchema: string | null;
      writerSchema: string | null;
      createTime: string;
      metaType: number;
      pid: number;
    }>;

    /** contrast search params */
    type ContrastSearchParams = CommonType.RecordNullable<
      Pick<Api.ContrastManage.contrast, 'taskName' | 'metaType'> & CommonSearchParams
    >;

    /** dc list */
    type ContrastList = Common.PaginatingQueryRecord<contrast>;

    /**
     * meta type(暂未使用)
     *
     * - "0": data contrast
     * - "2": meta contrast
     */
    type MetaType = '0' | '2';
  }

  /**
   * namespace dataDetails
   *
   * backend api module: "dataDetails"
   */
  namespace DataDetailsManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** dataDetails */
    type DataDetails = Common.CommonRecord<{
      id: number;
      taskId: number;
      readerTable: string | null;
      writerTable: string | null;
      tableName: string | null;
      readerRecordRows: string | null;
      writerRecordRows: string | null;
      readerInfo: string | null;
      writerInfo: string | null;
      mappingInfo: string | null;
      isCorrect: IsCorrect;
      fastQue: number;
      metaTypeId: string | null;
    }>;

    /** dataDetails search params */
    type DataDetailsSearchParams = CommonType.RecordNullable<
      Pick<
        Api.DataDetailsManage.DataDetails,
        'taskId' | 'tableName' | 'readerTable' | 'writerTable' | 'isCorrect' | 'fastQue' | 'metaTypeId'
      > &
        CommonSearchParams
    >;

    /** DataDetails list */
    type DataDetailsList = Common.PaginatingQueryRecord<DataDetails>;

    /**
     * is_correct
     *
     * - "-1": all
     * - "0": iscorrect
     * - "1": discorrect
     */
    type IsCorrect = -1 | 0 | 1;

    /** DetailsCount */
    type DetailsCount = Common.CommonRecord<{
      readertablecount: number;
      writertablecount: number;
      iscorrectcount: number;
    }>;
  }

  /**
   * namespace verifyDetails
   *
   * backend api module: "verifyDetails"
   */
  namespace VerifyDetailsManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** verifyDetails */
    type verifyDetails = Common.CommonRecord<{
      pid: number;
      tid: number;
      sourceTableName: string | null;
      targetTableName: string | null;
      sourceCnt: number;
      targetCnt: number;
      equalCnt: number;
      notEqualCnt: number;
      missingSourceCnt: number;
      missingTargetCnt: number;
      tableName: string | null;
      status: string | null;
      stats: string | null;
      counts: string;
      tableNames: string;
      durationStr: string;
      resultMessage: string;
    }>;

    /** verifyDetails search params */
    type VerifyDetailsSearchParams = CommonType.RecordNullable<
      Pick<Api.VerifyDetailsManage.verifyDetails, 'pid' | 'tid' | 'tableName' | 'status'> & CommonSearchParams
    >;

    /** verifyDetails list */
    type VerifyDetailsList = Common.PaginatingQueryRecord<verifyDetails>;
  }

  /**
   * namespace verifyDetailsList
   *
   * backend api module: "verifyDetailsList"
   */
  namespace VerifyDetailsListManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** verifyDetailsList */
    type verifyDetailsList = Common.CommonRecord<{
      id: number;
      pid: number;
      tid: number;
      tableName: string | null;
      pk: string;
      compareStatus: string;
      resultDetails: string | any;
      sourceTableName: string | null;
      targetTableName: string | null;
    }>;

    /** verifyDetailsList search params */
    type VerifyDetailsListSearchParams = CommonType.RecordNullable<
      Pick<Api.VerifyDetailsListManage.verifyDetailsList, 'pid' | 'tid' | 'pk' | 'resultDetails'> & CommonSearchParams
    >;

    /** verifyDetailsList list */
    type VerifyDetailsListList = Common.PaginatingQueryRecord<verifyDetailsList>;
  }

  /**
   * namespace verifyData
   *
   * backend api module: "verifyData"
   */
  namespace VerifyDataManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** verifyDetailsList */
    type verifyData = Common.CommonRecord<{
      batchNumber: number;
      projectName: string | null;
      sourceSchema: string | null;
      targetSchema: string | null;
      tables: string[];
      percentage: number | null;
      sourceId: number | null;
      targetId: number | null;
      logFileName: string;
    }>;

    /** verifyDetailsList search params */
    type VerifyDataSearchParams = CommonType.RecordNullable<
      Pick<Api.VerifyDataManage.verifyData, 'projectName' | 'percentage' | 'tables'> & CommonSearchParams
    >;

    /** verifyData list */
    type verifyDataList = Common.PaginatingQueryRecord<verifyData>;
  }

  /**
   * namespace verifyConfig
   *
   * backend api module: "verifyConfig"
   */
  namespace VerifyConfigManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** verifyConfig */
    type verifyConfig = Common.CommonRecord<{
      configId: number | null;
      configKey: string | null;
      configValue: string | null;
      configType: string | null;
      projectId: number | null;
    }>;

    /** verifyConfig search params */
    type VerifyConfigSearchParams = CommonType.RecordNullable<
      Pick<Api.VerifyConfigManage.verifyConfig, 'configId' | 'configKey' | 'configValue' | 'configType'> &
        CommonSearchParams
    >;

    /** verifyConfig list */
    type VerifyConfigList = Common.PaginatingQueryRecord<verifyConfig>;
  }

  /**
   * namespace report
   *
   * backend api module: "report"
   */
  namespace ReportManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** metaReport */
    type metaReport = Common.CommonRecord<{
      projectsIds: number;
      projectsName: string;
      metaTypeId: number | string;
      metaTypeName: string;
      allTotal: number;
      sucTotal: number;
      failTotal: number;
      awaitTotal: number;
      runningTotal: number;
    }>;

    /** metaReport search params */
    type ReportSearchParams = CommonType.RecordNullable<
      Pick<Api.ReportManage.metaReport, 'projectsIds'> & CommonSearchParams
    >;

    /** metaReport list */
    type ReportList = Common.PaginatingQueryRecord<metaReport>;
  }

  /**
   * namespace jobRegistry
   *
   * backend api module: "jobRegistry"
   */
  namespace JobRegistryManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** datasource */
    type JobRegistry = Common.CommonRecord<{
      id: number;
      registryGroup: string;
      registryKey: string;
      registryValue: string;
      cpuUsage: number;
      memoryUsage: number;
      loadAverage: number;
      updateTime: string;
    }>;

    /** jobRegistry search params */
    type JobRegistrySearchParams = CommonType.RecordNullable<
      Pick<Api.JobRegistryManage.JobRegistry, 'registryKey'> & CommonSearchParams
    >;

    /** jobRegistry list */
    type JobRegistryList = Common.PaginatingQueryRecord<JobRegistry>;
  }

  /**
   * namespace template
   *
   * backend api module: "taskTemplate"
   */
  namespace TemplateManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** template */
    type Template = Common.CommonRecord<{
      id: number;
      jobGroup: number;
      jobCron: string;
      jobDesc: string | null;
      userId: number;
      alarmEmail: string;
      executorRouteStrategy: string;
      executorHandler: string | null;
      executorParam: string;
      executorBlockStrategy: string;
      executorTimeout: number;
      executorFailRetryCount: number;
      glueType: string;
      glueSource: string;
      glueRemark: string;
      childJobId: string;
      triggerLastTime: string;
      triggerNextTime: string;
      jobJson: string;
      jvmParam: string;
      customParam: string;
      projectIds: number[];
      projectName: string;
      userName: string;
      registerNode: string[];
      projectId: number | null;
    }>;

    /** Template search params */
    type TemplateSearchParams = CommonType.RecordNullable<
      Pick<
        Api.TemplateManage.Template,
        'jobGroup' | 'jobDesc' | 'projectName' | 'executorHandler' | 'userId' | 'projectIds'
      > &
        CommonSearchParams
    >;

    /** Template list */
    type TemplateList = Common.PaginatingQueryRecord<Template>;
  }

  /**
   * namespace logInfo
   *
   * backend api module: "logInfo"
   */
  namespace LogInfoManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** logInfo */
    type LogInfo = Common.CommonRecord<{
      jobGroup: number | undefined;
      jobId: number | undefined;
      jobDesc: string | null;
      executorAddress: string;
      executorHandler: string | null;
      executorParam: string;
      executorShardingParam: string;
      executorFailRetryCount: number;
      triggerTime: number;
      triggerCode: number;
      triggerMsg: string;
      handleTime: string;
      handleCode: number;
      handleMsg: string;
      alarmStatus: number;
      processId: string;
      maxId: number;
      jobCron: string;
      logStatus: number;
      metaType: string;
      fromLineNum: number;
    }>;

    /** LogInfo search params */
    type LogInfoSearchParams = CommonType.RecordNullable<
      Pick<Api.LogInfoManage.LogInfo, 'jobGroup' | 'jobId' | 'jobDesc' | 'triggerCode' | 'logStatus' | 'metaType'> &
        CommonSearchParams
    >;

    /** LogInfo list */
    type LogInfoList = Common.PaginatingQueryRecord<LogInfo>;
  }

  /**
   * namespace TaskAdd
   *
   * backend api module: "TaskAdd"
   */
  namespace TaskAdd {
    /** taskAdd */
    type taskAdd = Common.CommonRecord<{
      readerDatasourceId: number | null;
      readerDataSource: string | undefined | null;
      readerSchema: string | null;
      readerTable: string | null;
      readerColumns: number[];
      writerDatasourceId: number | null;
      writeDataSource: string | undefined | null;
      writerSchema: string | null;
      writerTable: string | null;
      writerColumns: number[];
      templateId: number | null;
      readerSplitPk: string | null;
      querySql: string | null;
      where: string | null;
      preSql: string | null;
      postSql: string | null;
      configJson: string | null;
    }>;
  }

  /**
   * namespace AutoProjectCreate
   *
   * backend api module: "AutoProjectCreate"
   */
  namespace AutoProjectCreate {
    /** AutoProject */
    type AutoProject = Common.CommonRecord<{
      dataSource: string;
      description: string;
      jobGroup: number | null;
      jvmParam: string;
      datasourceId_1: number | null;
      schemaList: string[];
      datasourceId_2: number | null;
      logFileName: string;
      tablePartNameSwitch: boolean;
      tableAndColSwitch: boolean;
      mysqlCommandSwitch: boolean;
      mysqlIp: string | null;
      mysqlPort: string | null;
      mysqlUser: string | null;
      mysqlPwd: string | null;
      selectAndSql: string | null;
      tableSplitSwitch: boolean;
    }>;
  }
}
