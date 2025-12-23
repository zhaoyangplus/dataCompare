const local: App.I18n.Schema = {
  system: {
    title: 'HaloMigrationTool',
    updateTitle: 'System Version Update Notification',
    updateContent: 'A new version of the system has been detected. Do you want to refresh the page immediately?',
    updateConfirm: 'Refresh immediately',
    updateCancel: 'Later'
  },
  common: {
    inputCannotContainSpace: 'Input Cannot Contain Space',
    details: 'Details',
    action: 'Action',
    add: 'Add',
    addSuccess: 'Add Success',
    addFailed: 'Add Failed',
    submitting: 'Submitting',
    submittingTask: 'Submitting Task...',
    backToHome: 'Back to home',
    batchDelete: 'Batch Delete',
    cancel: 'Cancel',
    close: 'Close',
    check: 'Check',
    expandColumn: 'Expand Column',
    columnSetting: 'Column Setting',
    config: 'Config',
    confirm: 'Confirm',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    confirmDelete: 'Are you sure you want to delete?',
    edit: 'Edit',
    warning: 'Warning',
    error: 'Error',
    index: 'Index',
    keywordSearch: 'Please enter keyword',
    logout: 'Logout',
    logoutConfirm: 'Are you sure you want to log out?',
    lookForward: 'Coming soon',
    modify: 'Modify',
    modifySuccess: 'Modify Success',
    noData: 'No Data',
    operate: 'Operate',
    pleaseCheckValue: 'Please check whether the value is valid',
    refresh: 'Refresh',
    reset: 'Reset',
    search: 'Search',
    switch: 'Switch',
    tip: 'Tip',
    trigger: 'Trigger',
    update: 'Update',
    updateSuccess: 'Update Success',
    userCenter: 'User Center',
    yesOrNo: {
      yes: 'Yes',
      no: 'No'
    },
    testConnection: 'Test Connection',
    testSuccess: 'Test Success',
    batchCreateTask: 'Batch Create Task',
    cancelSuccess: 'Cancel Success',
    logDetails: 'Log Details',
    refreshLog: 'Refresh Log',
    refreshSuccess: 'Refresh Success',
    editScript: 'Edit Script Content',
    confirmExecute: 'Are you sure you want to execute?',
    more: 'More',
    dataMigration: 'Data Migration',
    open: 'Open',
    runOnce: 'Run Once',
    queryLog: 'Query Log',
    batchSetting: 'Batch Setting',
    createTask: 'Create Task'
  },
  request: {
    logout: 'Logout user after request failed',
    logoutMsg: 'User status is invalid, please log in again',
    logoutWithModal: 'Pop up modal after request failed and then log out user',
    logoutWithModalMsg: 'User status is invalid, please log in again',
    refreshToken: 'The requested token has expired, refresh the token',
    tokenExpired: 'The requested token has expired'
  },
  theme: {
    themeSchema: {
      title: 'Theme Schema',
      light: 'Light',
      dark: 'Dark',
      auto: 'Follow System'
    },
    grayscale: 'Grayscale',
    colourWeakness: 'Colour Weakness',
    layoutMode: {
      title: 'Layout Mode',
      vertical: 'Vertical Menu Mode',
      horizontal: 'Horizontal Menu Mode',
      'vertical-mix': 'Vertical Mix Menu Mode',
      'horizontal-mix': 'Horizontal Mix menu Mode',
      reverseHorizontalMix: 'Reverse first level menus and child level menus position'
    },
    recommendColor: 'Apply Recommended Color Algorithm',
    recommendColorDesc: 'The recommended color algorithm refers to',
    themeColor: {
      title: 'Theme Color',
      primary: 'Primary',
      info: 'Info',
      success: 'Success',
      warning: 'Warning',
      error: 'Error',
      followPrimary: 'Follow Primary'
    },
    scrollMode: {
      title: 'Scroll Mode',
      wrapper: 'Wrapper',
      content: 'Content'
    },
    page: {
      animate: 'Page Animate',
      mode: {
        title: 'Page Animate Mode',
        fade: 'Fade',
        'fade-slide': 'Slide',
        'fade-bottom': 'Fade Zoom',
        'fade-scale': 'Fade Scale',
        'zoom-fade': 'Zoom Fade',
        'zoom-out': 'Zoom Out',
        none: 'None'
      }
    },
    fixedHeaderAndTab: 'Fixed Header And Tab',
    header: {
      height: 'Header Height',
      breadcrumb: {
        visible: 'Breadcrumb Visible',
        showIcon: 'Breadcrumb Icon Visible'
      },
      multilingual: {
        visible: 'Display multilingual button'
      }
    },
    tab: {
      visible: 'Tab Visible',
      cache: 'Tag Bar Info Cache',
      height: 'Tab Height',
      mode: {
        title: 'Tab Mode',
        chrome: 'Chrome',
        button: 'Button'
      }
    },
    sider: {
      inverted: 'Dark Sider',
      width: 'Sider Width',
      collapsedWidth: 'Sider Collapsed Width',
      mixWidth: 'Mix Sider Width',
      mixCollapsedWidth: 'Mix Sider Collapse Width',
      mixChildMenuWidth: 'Mix Child Menu Width'
    },
    footer: {
      visible: 'Footer Visible',
      fixed: 'Fixed Footer',
      height: 'Footer Height',
      right: 'Right Footer'
    },
    watermark: {
      visible: 'Watermark Full Screen Visible',
      text: 'Watermark Text'
    },
    themeDrawerTitle: 'Theme Configuration',
    pageFunTitle: 'Page Function',
    resetCacheStrategy: {
      title: 'Reset Cache Strategy',
      close: 'Close Page',
      refresh: 'Refresh Page'
    },
    configOperation: {
      copyConfig: 'Copy Config',
      copySuccessMsg: 'Copy Success, Please replace the variable "themeSettings" in "src/theme/settings.ts"',
      resetConfig: 'Reset Config',
      resetSuccessMsg: 'Reset Success'
    }
  },
  route: {
    login: 'Login',
    403: 'No Permission',
    404: 'Page Not Found',
    500: 'Server Error',
    'iframe-page': 'Iframe',
    home: 'Home',
    manage: 'System Manage',
    manage_user: 'User Manage',
    'manage_user-detail': 'User Detail',
    manage_role: 'Role Manage',
    manage_menu: 'Menu Manage',
    datasource: 'Data Source Manage',
    datasource_manage: 'Data Source',
    task: 'Task Manage',
    task_batch: 'Batch Create Task',
    task_submeta: 'Build Metadata Task',
    task_manage: 'Task Manage',
    task_datatype: 'DataType Mapping',
    task_tasktemplate: 'Task Template',
    project: 'Project Manage',
    project_manage: 'Project List',
    project_automigrate: 'Project Automigrate',
    executor: 'Executor Manage',
    executor_manage: 'Executor List',
    contrast: 'Contrast Manage',
    contrast_datacontrast: 'Data Contrast',
    contrast_datadetails: 'Data Contrast Details',
    contrast_metacontrast: 'Meta Contrast',
    contrast_metadetails: 'Meta Contrast Details',
    contrast_verifydata: 'Data Verify',
    contrast_verifydetails: 'Data Verify Details',
    contrast_verifyconfig: 'Verify Config',
    report: 'Statistics Report',
    report_metareport: 'Meta Report',
    report_datareport: 'Data Report',
    log: 'Log Manage',
    log_manage: 'Log List',
    task_build: 'Create Task'
  },
  page: {
    login: {
      common: {
        loginOrRegister: 'Login / Register',
        userNamePlaceholder: 'Please enter user name',
        phonePlaceholder: 'Please enter phone number',
        codePlaceholder: 'Please enter verification code',
        passwordPlaceholder: 'Please enter password',
        confirmPasswordPlaceholder: 'Please enter password again',
        codeLogin: 'Verification code login',
        confirm: 'Confirm',
        back: 'Back',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Login successfully',
        welcomeBack: 'Welcome back, {userName} !'
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember me',
        forgetPassword: 'Forget password?',
        register: 'Register',
        otherAccountLogin: 'Other Account Login',
        otherLoginMode: 'Other Login Mode',
        superAdmin: 'Super Admin',
        admin: 'Admin',
        user: 'User'
      },
      codeLogin: {
        title: 'Verification Code Login',
        getCode: 'Get verification code',
        reGetCode: 'Reacquire after {time}s',
        sendCodeSuccess: 'Verification code sent successfully',
        imageCodePlaceholder: 'Please enter image verification code'
      },
      register: {
        title: 'Register',
        agreement: 'I have read and agree to',
        protocol: '《User Agreement》',
        policy: '《Privacy Policy》'
      },
      resetPwd: {
        title: 'Reset Password'
      },
      bindWeChat: {
        title: 'Bind WeChat'
      }
    },
    home: {
      branchDesc:
        'For the convenience of everyone in developing and updating the merge, we have streamlined the code of the main branch, only retaining the homepage menu, and the rest of the content has been moved to the example branch for maintenance. The preview address displays the content of the example branch.',
      greeting: 'Welcome back, {userName}, Data migration starts here!',
      weatherDesc:
        'Halo database migration tool is committed to using simple and intuitive Web interface to efficiently and stably complete the data migration function between Oracle, MySQL and other databases to Halo database .',
      projectCount: 'Project Count',
      todo: 'Version Number',
      message: 'Message',
      downloadCount: 'Download Count',
      registerCount: 'Register Count',
      schedule: 'Task Ratio',
      study: 'Study',
      work: 'Work',
      rest: 'Rest',
      entertainment: 'Entertainment',
      taskTotal: 'Task Total',
      successCount: 'Success Count',
      failCount: 'Fail Count',
      awaitCount: 'Await Count',
      runningCount: 'Running Count',
      projectNews: {
        title: 'Project News',
        moreNews: 'More News',
        desc1: 'The one-click migration function currently supports Oracle and MySQL to migrate to Halo!',
        desc2: '...',
        desc3: '...',
        desc4: '...',
        desc5: '...'
      },
      creativity: 'Creativity'
    },
    manage: {
      common: {
        status: {
          enable: 'Enable',
          disable: 'Disable'
        }
      },
      role: {
        title: 'Role List',
        roleName: 'Role Name',
        roleCode: 'Role Code',
        roleStatus: 'Role Status',
        roleDesc: 'Role Description',
        menuAuth: 'Menu Auth',
        buttonAuth: 'Button Auth',
        form: {
          roleName: 'Please enter role name',
          roleCode: 'Please enter role code',
          roleStatus: 'Please select role status',
          roleDesc: 'Please enter role description'
        },
        addRole: 'Add Role',
        editRole: 'Edit Role'
      },
      user: {
        title: 'User List',
        userName: 'User Name',
        userGender: 'Gender',
        nickName: 'Nick Name',
        userPhone: 'Phone Number',
        userEmail: 'Email',
        userStatus: 'User Status',
        userRole: 'User Role',
        passWord: 'Login Password',
        form: {
          userName: 'Please enter user name',
          userGender: 'Please select gender',
          nickName: 'Please enter nick name',
          userPhone: 'Please enter phone number',
          userEmail: 'Please enter email',
          userStatus: 'Please select user status',
          userRole: 'Please select user role',
          passWord: 'Please enter login password'
        },
        addUser: 'Add User',
        editUser: 'Edit User',
        gender: {
          unknown: 'Unknown',
          male: 'Male',
          female: 'Female'
        }
      },
      monitor: {
        CPUUse: 'CPU Usage Rate',
        storageUse: 'Internal Storage Usage Rate',
        averageLoad: 'Average Load'
      },
      menu: {
        home: 'Home',
        title: 'Menu List',
        id: 'ID',
        parentId: 'Parent ID',
        menuType: 'Menu Type',
        menuName: 'Menu Name',
        routeName: 'Route Name',
        routePath: 'Route Path',
        pathParam: 'Path Param',
        layout: 'Layout Component',
        page: 'Page Component',
        i18nKey: 'I18n Key',
        icon: 'Icon',
        localIcon: 'Local Icon',
        iconTypeTitle: 'Icon Type',
        order: 'Order',
        constant: 'Constant',
        keepAlive: 'Keep Alive',
        href: 'Href',
        hideInMenu: 'Hide In Menu',
        activeMenu: 'Active Menu',
        multiTab: 'Multi Tab',
        fixedIndexInTab: 'Fixed Index In Tab',
        query: 'Query Params',
        button: 'Button',
        buttonCode: 'Button Code',
        buttonDesc: 'Button Desc',
        menuStatus: 'Menu Status',
        form: {
          home: 'Please select home',
          menuType: 'Please select menu type',
          menuName: 'Please enter menu name',
          routeName: 'Please enter route name',
          routePath: 'Please enter route path',
          pathParam: 'Please enter path param',
          page: 'Please select page component',
          layout: 'Please select layout component',
          i18nKey: 'Please enter i18n key',
          icon: 'Please enter iconify name',
          localIcon: 'Please enter local icon name',
          order: 'Please enter order',
          keepAlive: 'Please select whether to cache route',
          href: 'Please enter href',
          hideInMenu: 'Please select whether to hide menu',
          activeMenu: 'Please select route name of the highlighted menu',
          multiTab: 'Please select whether to support multiple tabs',
          fixedInTab: 'Please select whether to fix in the tab',
          fixedIndexInTab: 'Please enter the index fixed in the tab',
          queryKey: 'Please enter route parameter Key',
          queryValue: 'Please enter route parameter Value',
          button: 'Please select whether it is a button',
          buttonCode: 'Please enter button code',
          buttonDesc: 'Please enter button description',
          menuStatus: 'Please select menu status'
        },
        addMenu: 'Add Menu',
        editMenu: 'Edit Menu',
        addChildMenu: 'Add Child Menu',
        type: {
          directory: 'Directory',
          menu: 'Menu'
        },
        iconType: {
          iconify: 'Iconify Icon',
          local: 'Local Icon'
        }
      }
    },
    datasource: {
      manage: {
        datasource: 'Datasource',
        datasourceName: 'Datasource name',
        jdbcUsername: 'User name',
        jdbcPassword: 'Password',
        jdbcUrl: 'Jdbc url',
        jdbcDriverClass: 'Jdbc driver class',
        comments: 'Comments',
        form: {
          datasource: 'Please select datasource',
          datasourceName: 'Please enter datasource name',
          jdbcUsername: 'Please enter user name',
          jdbcPassword: 'Please enter password',
          jdbcUrl: 'Please enter jdbc url',
          jdbcDriverClass: 'Please enter jdbc driver class',
          comments: 'Please enter comments'
        },
        datasourceRecord: {
          halo: 'Halo',
          mysql: 'MySQL',
          oracle: 'Oracle',
          postgresql: 'PostgreSQL',
          sqlserver: 'SQL Server',
          dm: 'Dameng',
          db2: 'Db2',
          hive: 'Hive'
        },
        addDatasource: 'Add Datasource',
        editDatasource: 'Edit Datasource',
        title: 'Datasource List'
      }
    },
    project: {
      manage: {
        title: 'Project List',
        projectName: 'Project name',
        description: 'Project description',
        userName: 'User Name',
        updateTime: 'Update Time',
        triggerStatus: 'Trigger Status',
        runningStatus: 'Running Status',
        form: {
          projectName: 'Please enter project name',
          description: 'Please enter project description'
        },
        addProject: 'Add Project',
        editProject: 'Edit Project'
      },
      autoMigrate: {
        logDetails: 'log Detail',
        runningStatus: {
          unstart: 'unstart',
          running: 'running',
          abnormal: 'abnormal',
          finally: 'finally',
          stopping: 'stopping',
          stopped: 'stopped'
        },
        addProject: 'Add One-click Migration Task'
      }
    },
    executor: {
      manage: {
        title: 'Executor List',
        executorName: 'Executor Name',
        groupID: 'Group ID',
        registerType: 'Register Type',
        order: 'Order',
        onlineMachine: 'Online Machine Address',
        updateTime: 'Update Time',
        form: {
          groupID: 'Please enter Group ID',
          executorName: 'Please enter Executor Name',
          onlineMachine: 'Please enter Machine Address',
          order: 'Please enter Order'
        },
        addExecutor: 'Add Executor',
        editExecutor: 'Edit Executor',
        register: {
          autoRegister: 'Auto Register',
          manualRegister: 'Manual Register'
        }
      }
    },
    task: {
      batch: {
        readerDataSource: 'Source DataSource',
        readerSchema: 'Source Schema',
        readerTables: 'Source Tables',
        writerDataSource: 'Target DataSource',
        writerSchema: 'Target Schema',
        writerTables: 'Target Tables',
        readerSplitPk: 'Split Primary Key',
        template: 'Task Template',
        form: {
          readerDataSource: 'Please select source',
          readerSchema: 'Please select source schema',
          writerDataSource: 'Please select target',
          writerSchema: 'Please select target schema',
          readerSplitPk: 'Please enter split primary key',
          template: 'Please select task template'
        },
        createTask: 'Batch Create Task',
        showChekModalTitle: 'Table Discrepancies',
        checkTables: 'Check Table Consistency Between Source And Target',
        sourceSpecific: 'Source-Specific Tables',
        targetSpecific: 'Target-Specific Tables',
        uncheck: 'One-Click Deselect',
        createTaskLoading: 'Data migration tasks are being created in batches',
        templateTooltip: 'The executor and JVM memory are specified in the task template'
      },
      submeta: {
        readerDataSource: 'Source DataSource',
        readerSchema: 'Source Schema',
        writerDataSource: 'Target DataSource',
        metadataIds: 'Metadata Collection',
        template: 'Task Template',
        selectAndSql: 'Filter Condition',
        migrationConfig: 'Migration Config',
        tableAndColSwitch: 'Quotes Check Switch',
        mysqlCommandSwitch: 'MySQL Command Switch',
        mysqlIp: 'IP Address',
        mysqlPort: 'Port',
        mysqlUser: 'User Name',
        mysqlPwd: 'Pwd',
        tableSplitSwitch: 'Table Split Switch',
        form: {
          readerDataSource: 'Please select source',
          readerSchema: 'Please select source schema',
          writerDataSource: 'Please select target',
          template: 'Please select task template',
          selectAndSql: 'Please enter sql and clause'
        },
        subMetaTypeRecord: {
          type: 'TYPE',
          table: 'TABLE',
          constraints: 'CONSTRAINTS',
          index: 'INDEX',
          function: 'FUNCTION',
          procedure: 'PROCEDURE',
          view: 'VIEW',
          trigger: 'TRIGGER',
          package: 'PACKAGE',
          sequence: 'SEQUENCE',
          tablecomment: 'TABLECOMMENT',
          synonym: 'SYNONYM'
        },
        createTask: 'Build Metadata Task',
        AndSqlTooltip: 'Enter an SQL AND clause, ensuring its syntax adheres to metadata query rules.',
        processAlertTitle: 'You are advised to perform the following steps to migrate the database',
        processAlertContent1: 'First, migrate basic table structures',
        processAlertDescription1:
          'Quickly establish the foundational framework of the target database to prepare for subsequent data migration.',
        processAlertContent2: 'Next, migrate the full dataset',
        processAlertDescription2:
          'With the basic table structures in place, this phase focuses on data transfer, avoiding overhead such as index maintenance and accelerating migration speed.',
        processAlertContent3: 'Migrate subsequent script tasks only after data is fully written',
        processAlertDescription3:
          'After completing the data migration, execute all necessary constraints, indexes, and other metadata scripts.',
        processAlertNote:
          'By adhering to these steps, you will not only improve overall migration efficiency but also minimize the risk of errors, ensuring a smooth transition between the source and target databases.',
        MySqlTooltip: 'When enabled, you need to configure the connection parameters below.',
        metaHistoryLog: 'List of Historical Log Information (Last 10 Times)',
        tableSplitTooltip: 'When enabled, it will split the table structure into individual tasks.'
      },
      manage: {
        jobDesc: 'Task Name',
        projectName: 'Project Name',
        jobCron: 'Metadata Type',
        triggerStatus: 'Trigger Status',
        lastHandleCode: 'Executing Status',
        isStatusValid: 'Metadata Status',
        registerNode: 'Register Node',
        updateTime: 'Update Time',
        glueType: 'Glue Type',
        isBigType: 'Include LOBs',
        jvmParam: 'JVM Startup Parameters',
        jobGroup: 'Executor',
        projectId: 'Belonging Project',
        executorRouteStrategy: 'Routing Strategy',
        executorBlockStrategy: 'Blocking Handling',
        executorFailRetryCount: 'Fail Retry Count',
        executorTimeout: 'Timeout (minutes)',
        editorCode: 'Code Block',
        form: {
          jobDesc: 'Please enter task name',
          jvmParam: '-Xms1024m -Xmx1024m -XX:+HeapDumpOnOutOfMemoryError'
        },
        glueTypeRecord: {
          datax: 'DataX Task',
          shell: 'Shell Task'
        },
        lastHandleCodeRecord: {
          await: 'await',
          running: 'running',
          success: 'success',
          error: 'error',
          timeout: 'timeout'
        },
        isStatusValidRecord: {
          valid: 'VALID',
          invalid: 'INVALID',
          enabled: 'ENABLED',
          disabled: 'DISABLED',
          null: 'NULL'
        },
        routeStrategiesRecord: {
          first: 'FIRST',
          last: 'LAST',
          round: 'ROUND',
          random: 'RANDOM',
          consistentHash: 'CONSISTENT_HASH',
          leastFrequentlyUsed: 'LEAST_FREQUENTLY_USED',
          leastRecentlyUsed: 'LEAST_RECENTLY_USED',
          failover: 'FAILOVER',
          busyover: 'BUSYOVER'
        },
        blockStrategiesRecord: {
          serialExecution: 'SERIAL_EXECUTION',
          discardLater: 'DISCARD_LATER',
          coverEarly: 'COVER_EARLY'
        },
        isBigTypeOptions: {
          yes: 'yes',
          no: 'no'
        },
        batchStart: 'Batch Start',
        confirmBatchStart: 'Are you sure you want to batch start?',
        failRestart: 'Fail Restart',
        confirmFailRestart: 'Are you sure you want to fail restart?',
        batchStop: 'Batch Stop',
        confirmBatchStop: 'Are you sure you want to batch stop?',
        editTask: 'Edit Task',
        title: 'Task List',
        editScript: 'Edit Script',
        filePath: 'File Path',
        setModalTitle: 'Batch set the data writing mode',
        setModalMsg:
          'When the table contains large fields, using the default write method may fail and you need to switch to the halowriter mode'
      },
      build: {
        readerTable: 'Source Table',
        writerTable: 'Target Table',
        readerTableField: 'Source Field',
        writerTableField: 'Target Field',
        querySql: 'SQL',
        where: 'Where',
        preSql: 'Pre Sql',
        postSql: 'Post Sql',
        form: {
          readerTable: 'Please select source table',
          writerTable: 'Please select target table',
          querySql: 'SQL queries are generally used for multi-table queries',
          where: 'WHERE condition, no need to add WHERE again.',
          preSql: 'Pre-execution SQL is executed before the INSERT operation.',
          postSql:
            "Post-execution SQL statements are executed after the INSERT operation, with multiple statements separated by ';'"
        },
        createTask: 'Single table build task',
        getColumnsError: 'Please select the source data source first.',
        buildTaskJson: 'Click to generate the task JSON.',
        editTaskJson: 'Edit Task JSON'
      },
      datatype: {
        title: 'Datatype List',
        dataSource: 'Data Source',
        sourceType: 'Source Type',
        targetType: 'Target Type',
        value: 'Retain values in parentheses',
        updateTime: 'Update Time',
        form: {
          dataSource: 'Please select data source',
          sourceType: 'Please enter source type',
          targetType: 'Please enter target type',
          example: 'Example',
          mapsTo: 'maps to',
          value: {
            retainValue: 'Retain',
            notRetainValue: 'Not Retain'
          }
        },
        addDtm: 'Add data type mapping',
        editDtm: 'Edit data type mapping'
      },
      tasktemplate: {
        title: 'Task Template List',
        taskID: 'Task ID',
        taskDesc: 'Task Description',
        projectName: 'Project Affiliation',
        routingPolicy: 'Routing policy',
        userName: 'userName',
        registerNode: 'Register Node',
        form: {
          enterTaskDesc: 'Please Enter Task',
          projectAffiliation: 'Project Affiliation'
        },
        look: 'Examine',
        addTemplate: 'Add Template',
        editTemplate: 'Edit Template'
      }
    },
    contrast: {
      dataTitle: 'Data contrast list',
      metaTitle: 'Meta contrast list',
      taskName: 'Task name',
      AllResult: 'Total comparison result',
      readerDatasourceId: 'Source ID',
      readerDatasource: 'Source name',
      writerDatasourceId: 'Target ID',
      writerDatasource: 'Target name',
      readerSchema: 'Source schema',
      writerSchema: 'Target schema',
      createTime: 'Create Time',
      form: {
        taskName: 'Please enter task name',
        readerDatasourceId: 'Please enter source ID',
        readerDatasource: 'Please select source',
        writerDatasourceId: 'Please enter target ID',
        writerDatasource: 'Please select target',
        readerSchema: 'Please enter source schema',
        writerSchema: 'Please enter target schema'
      },
      metaType: {
        dataContrast: 'Data contrast',
        metaContrast: 'Meta contrast'
      },
      addContrast: 'Add contrast task',
      dataDetails: {
        title: 'Data contrast details',
        readerTable: 'Reader table',
        writerTable: 'Writer table',
        readerRecordRows: 'Reader record rows',
        writerRecordRows: 'Writer record rows',
        isConsistent: 'Is Consistent',
        isCorrect: {
          consistent: 'Consistent',
          inconsistent: 'In consistent'
        },
        form: {
          readerTable: 'Please select reader table',
          writerTable: 'Please select writer table',
          isCorrect: 'Please select isCorrect'
        },
        allTable: 'All result',
        allCount: 'Source: {0} tables, Target: {1} tables, ',
        mismatchCount: 'Mismatched tables: {0}',
        sourceTableNotExist: 'Source table not exist',
        targetTableNotExist: 'Target table not exist'
      },
      verifyConfig: {
        title: 'Verify Config Detail List',
        configKey: 'Config Key',
        configValue: 'Config Value',
        configType: 'Config Type',
        form: {
          configKey: 'Please input config key',
          configValue: 'Please input config value',
          configType: 'Please input config type'
        },
        addConfig: 'Add config',
        editConfig: 'Edit config'
      },
      verifyDetails: {
        title: 'Data validation List',
        titleDetails: 'Data validation details List',
        tableName: 'TableName',
        addVerify: 'Add Verify Task',
        variationAnalysis: 'Variation Analysis',
        checkTotal: 'check Total',
        variationButton: 'variation Details',
        sourceTableName: 'Source Table',
        targetTableName: 'Target Table',
        sourceCount: 'Source Count',
        targetCount: 'Target Count',
        percentage: 'Please select percentage',
        samplingPercentage: 'Sampling Percentage',
        tips: 'Select a specific table or set the sampling percentage (one of two options) instead of the default full comparison',
        null: 'null',
        pk: 'PK',
        columnVerifyResult: 'Column Verify Result',
        equalCount: 'Equal Count',
        notEqualCount: 'Not Equal Count',
        missingSourceCount: 'Missing Source Count',
        missingTargetCount: 'Missing Target Count',
        stats: 'Verify Result',
        counts: 'Source/Target Total',
        tableNames: 'Source/Target Table',
        sourceAndTarget: 'Source Table → Target Table',
        status: 'Status',
        durationStr: 'Verify Duration',
        isStatusVerifyRecord: {
          all: 'ALL Result',
          outOfSync: 'OutOfSync',
          inSync: 'InSync',
          running: 'Running',
          skipped: 'Skipped',
          failed: 'Failed',
          selectStatus: 'Please Select Status'
        }
      },
      metaDetails: {
        title: 'Meta contrast details',
        readerTable: 'Reader object',
        writerTable: 'Writer object',
        metaType: 'Meta type',
        tableName: 'Object name',
        fastSelect: 'Fast Select',
        isConsistent: 'Is Consistent',
        objectName: 'Object fast name',
        metaInfo: 'This statement is for comparison purposes only and is not a complete statement.',
        sideBySide: 'Side by side',
        lineByLine: 'Line by line',
        switchSql: 'Switch sql',
        isCorrect: {
          consistent: 'Consistent',
          inconsistent: 'In consistent'
        },
        form: {
          readerTable: 'Please select reader object',
          writerTable: 'Please select writer object',
          tableName: 'Please enter object name',
          fastSelect: 'Fast Select',
          isCorrect: 'Please select isCorrect'
        },
        allTable: 'All result',
        allCount: 'Source: {0} objects, Target: {1} objects, ',
        mismatchCount: 'Mismatched objects: {0}',
        sourceTableNotExist: 'Source object not exist',
        targetTableNotExist: 'Target object not exist'
      }
    },
    report: {
      metaTitle: 'Metadata Migration Task Statistics',
      dataTitle: 'Data Migration Task Statistics',
      metaReport: {
        metaType: 'Meta Type',
        allCount: 'All Count',
        sucessCount: 'Success Count',
        failCount: 'Fail Count',
        waitCount: 'Wait Count',
        executeCount: 'Running Count'
      }
    },
    log: {
      look: 'Examine',
      title: 'Log List',
      taskID: 'Task ID',
      taskDesc: 'Task description',
      metaType: 'Meta Type',
      triggerTime: 'Trigger Time',
      triggerCode: 'Trigger Result',
      triggerMsg: 'Trigger Remark',
      handleTime: 'Handle Time',
      handleCode: 'Handle Result',
      handleMsg: 'Handle Remark',
      form: {
        enterTaskDesc: 'Please Enter Task',
        all: 'All Result',
        allExecutor: 'All Executor',
        executor: 'Executor',
        result: 'Result',
        success: 'Success',
        fail: 'Fail',
        running: 'Running'
      },
      clearLog: 'Clear Logs',
      selectClearType: 'Please select clear type',
      clearType: 'Clear Type',
      clearMonth1: 'Clear logs older than 1 month',
      clearMonth3: 'Clear logs older than 3 months',
      clearMonth6: 'Clear logs older than 6 months',
      clearYear1: 'Clear logs older than 1 year',
      clear1k: 'Clear first 1k logs',
      clear10k: 'Clear first 10k logs',
      clear30k: 'Clear first 30k logs',
      clear100k: 'Clear first 100k logs',
      clearAll: 'Clear all logs',
      clearSuccess: 'Clear success',
      clearFail: 'Clear fail'
    }
  },
  form: {
    required: 'Cannot be empty',
    userName: {
      required: 'Please enter user name',
      invalid: 'User name format is incorrect'
    },
    phone: {
      required: 'Please enter phone number',
      invalid: 'Phone number format is incorrect'
    },
    pwd: {
      required: 'Please enter password',
      invalid: '6-18 characters, including letters, numbers, and underscores'
    },
    confirmPwd: {
      required: 'Please enter password again',
      invalid: 'The two passwords are inconsistent'
    },
    code: {
      required: 'Please enter verification code',
      invalid: 'Verification code format is incorrect'
    },
    email: {
      required: 'Please enter email',
      invalid: 'Email format is incorrect'
    }
  },
  dropdown: {
    closeCurrent: 'Close Current',
    closeOther: 'Close Other',
    closeLeft: 'Close Left',
    closeRight: 'Close Right',
    closeAll: 'Close All'
  },
  icon: {
    themeConfig: 'Theme Configuration',
    themeSchema: 'Theme Schema',
    lang: 'Switch Language',
    fullscreen: 'Fullscreen',
    fullscreenExit: 'Exit Fullscreen',
    reload: 'Reload Page',
    collapse: 'Collapse Menu',
    expand: 'Expand Menu',
    pin: 'Pin',
    unpin: 'Unpin'
  },
  datatable: {
    itemCount: 'Total {total} items'
  }
};

export default local;
