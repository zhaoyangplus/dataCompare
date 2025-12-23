const local: App.I18n.Schema = {
  system: {
    title: '异构数据库对比平台',
    updateTitle: '系统版本更新通知',
    updateContent: '检测到系统有新版本发布，是否立即刷新页面？',
    updateConfirm: '立即刷新',
    updateCancel: '稍后再说'
  },
  common: {
    inputCannotContainSpace: '输入不能有空格',
    details: '详情',
    action: '操作',
    add: '新增',
    addSuccess: '添加成功',
    addFailed: '添加失败',
    submitting: '提交中',
    submittingTask: '提交任务中,请耐心等待...',
    backToHome: '返回首页',
    batchDelete: '批量删除',
    cancel: '取消',
    close: '关闭',
    check: '勾选',
    expandColumn: '展开列',
    columnSetting: '列设置',
    config: '配置',
    confirm: '确认',
    delete: '删除',
    deleteSuccess: '删除成功',
    confirmDelete: '确认删除吗？',
    edit: '编辑',
    warning: '警告',
    error: '错误',
    index: '序号',
    keywordSearch: '请输入关键词搜索',
    logout: '退出登录',
    logoutConfirm: '确认退出登录吗？',
    lookForward: '敬请期待',
    modify: '修改',
    modifySuccess: '修改成功',
    noData: '无数据',
    operate: '操作',
    pleaseCheckValue: '请检查输入的值是否合法',
    refresh: '刷新',
    reset: '重置',
    search: '搜索',
    switch: '切换',
    tip: '提示',
    trigger: '触发',
    update: '更新',
    updateSuccess: '更新成功',
    userCenter: '个人中心',
    yesOrNo: {
      yes: '是',
      no: '否'
    },
    testConnection: '测试连接',
    testSuccess: '测试成功',
    batchCreateTask: '批量创建任务',
    cancelSuccess: '取消成功',
    logDetails: '日志详情',
    refreshLog: '刷新日志',
    refreshSuccess: '刷新成功',
    editScript: '编辑脚本内容',
    confirmExecute: '确认执行吗？',
    more: '更多',
    dataMigration: '数据迁移',
    open: '开启',
    runOnce: '执行一次',
    queryLog: '查询日志',
    batchSetting: '批量设置',
    createTask: '创建任务'
  },
  request: {
    logout: '请求失败后登出用户',
    logoutMsg: '用户状态失效，请重新登录',
    logoutWithModal: '请求失败后弹出模态框再登出用户',
    logoutWithModalMsg: '用户状态失效，请重新登录',
    refreshToken: '请求的token已过期，刷新token',
    tokenExpired: 'token已过期'
  },
  theme: {
    themeSchema: {
      title: '主题模式',
      light: '亮色模式',
      dark: '暗黑模式',
      auto: '跟随系统'
    },
    grayscale: '灰色模式',
    colourWeakness: '色弱模式',
    layoutMode: {
      title: '布局模式',
      vertical: '左侧菜单模式',
      'vertical-mix': '左侧菜单混合模式',
      horizontal: '顶部菜单模式',
      'horizontal-mix': '顶部菜单混合模式',
      reverseHorizontalMix: '一级菜单与子级菜单位置反转'
    },
    recommendColor: '应用推荐算法的颜色',
    recommendColorDesc: '推荐颜色的算法参照',
    themeColor: {
      title: '主题颜色',
      primary: '主色',
      info: '信息色',
      success: '成功色',
      warning: '警告色',
      error: '错误色',
      followPrimary: '跟随主色'
    },
    scrollMode: {
      title: '滚动模式',
      wrapper: '外层滚动',
      content: '主体滚动'
    },
    page: {
      animate: '页面切换动画',
      mode: {
        title: '页面切换动画类型',
        'fade-slide': '滑动',
        fade: '淡入淡出',
        'fade-bottom': '底部消退',
        'fade-scale': '缩放消退',
        'zoom-fade': '渐变',
        'zoom-out': '闪现',
        none: '无'
      }
    },
    fixedHeaderAndTab: '固定头部和标签栏',
    header: {
      height: '头部高度',
      breadcrumb: {
        visible: '显示面包屑',
        showIcon: '显示面包屑图标'
      },
      multilingual: {
        visible: '显示多语言按钮'
      }
    },
    tab: {
      visible: '显示标签栏',
      cache: '标签栏信息缓存',
      height: '标签栏高度',
      mode: {
        title: '标签栏风格',
        chrome: '谷歌风格',
        button: '按钮风格'
      }
    },
    sider: {
      inverted: '深色侧边栏',
      width: '侧边栏宽度',
      collapsedWidth: '侧边栏折叠宽度',
      mixWidth: '混合布局侧边栏宽度',
      mixCollapsedWidth: '混合布局侧边栏折叠宽度',
      mixChildMenuWidth: '混合布局子菜单宽度'
    },
    footer: {
      visible: '显示底部',
      fixed: '固定底部',
      height: '底部高度',
      right: '底部局右'
    },
    watermark: {
      visible: '显示全屏水印',
      text: '水印文本'
    },
    themeDrawerTitle: '主题配置',
    pageFunTitle: '页面功能',
    resetCacheStrategy: {
      title: '重置缓存策略',
      close: '关闭页面',
      refresh: '刷新页面'
    },
    configOperation: {
      copyConfig: '复制配置',
      copySuccessMsg: '复制成功，请替换 src/theme/settings.ts 中的变量 themeSettings',
      resetConfig: '重置配置',
      resetSuccessMsg: '重置成功'
    }
  },
  route: {
    login: '登录',
    403: '无权限',
    404: '页面不存在',
    500: '服务器错误',
    'iframe-page': '外链页面',
    home: '首页',
    manage: '系统管理',
    manage_user: '用户管理',
    'manage_user-detail': '用户详情',
    manage_role: '角色管理',
    manage_menu: '菜单管理',
    datasource: '数据源管理',
    datasource_manage: '数据源',
    contrast: '对比管理',
    contrast_verifydata: '数据校验',
    contrast_verifydetails: '数据校验详情',
    contrast_verifyconfig: '校验配置'
  },
  page: {
    login: {
      common: {
        loginOrRegister: '登录 / 注册',
        userNamePlaceholder: '请输入用户名',
        phonePlaceholder: '请输入手机号',
        codePlaceholder: '请输入验证码',
        passwordPlaceholder: '请输入密码',
        confirmPasswordPlaceholder: '请再次输入密码',
        codeLogin: '验证码登录',
        confirm: '确定',
        back: '返回',
        validateSuccess: '验证成功',
        loginSuccess: '登录成功',
        welcomeBack: '欢迎回来，{userName} ！'
      },
      pwdLogin: {
        title: '密码登录',
        rememberMe: '记住我',
        forgetPassword: '忘记密码？',
        register: '注册账号',
        otherAccountLogin: '其他账号登录',
        otherLoginMode: '其他登录方式',
        superAdmin: '超级管理员',
        admin: '管理员',
        user: '普通用户'
      },
      codeLogin: {
        title: '验证码登录',
        getCode: '获取验证码',
        reGetCode: '{time}秒后重新获取',
        sendCodeSuccess: '验证码发送成功',
        imageCodePlaceholder: '请输入图片验证码'
      },
      register: {
        title: '注册账号',
        agreement: '我已经仔细阅读并接受',
        protocol: '《用户协议》',
        policy: '《隐私权政策》'
      },
      resetPwd: {
        title: '重置密码'
      },
      bindWeChat: {
        title: '绑定微信'
      }
    },
    home: {
      branchDesc:
        '为了方便大家开发和更新合并，我们对main分支的代码进行了精简，只保留了首页菜单，其余内容已移至example分支进行维护。预览地址显示的内容即为example分支的内容。',
      greeting: '欢迎回来，{userName}，数据校验，从这里开始!',
      weatherDesc:
        '异构数据库对比工具，致力于利用简洁直观的Web操作界面来高效地完成Oracle、MySQL、PostgreSQL等多种数据库之间的数据对比校验功能。',
      projectCount: '项目数',
      todo: '版本号',
      message: '消息',
      downloadCount: '下载量',
      registerCount: '注册量',
      schedule: '任务占比',
      study: '学习',
      work: '工作',
      rest: '休息',
      entertainment: '娱乐',
      taskTotal: '任务总数',
      successCount: '成功数',
      failCount: '失败数',
      awaitCount: '待执行',
      runningCount: '运行中',
      projectNews: {
        title: '项目动态',
        moreNews: '更多动态',
        desc1: '一键迁移功能目前支持Oracle、MySQL迁移至Halo!',
        desc2: '加油中...',
        desc3: '加油中...',
        desc4: '加油中...',
        desc5: '加油中...'
      },
      creativity: '创意'
    },
    manage: {
      common: {
        status: {
          enable: '启用',
          disable: '禁用'
        }
      },
      role: {
        title: '角色列表',
        roleName: '角色名称',
        roleCode: '角色编码',
        roleStatus: '角色状态',
        roleDesc: '角色描述',
        menuAuth: '菜单权限',
        buttonAuth: '按钮权限',
        form: {
          roleName: '请输入角色名称',
          roleCode: '请输入角色编码',
          roleStatus: '请选择角色状态',
          roleDesc: '请输入角色描述'
        },
        addRole: '新增角色',
        editRole: '编辑角色'
      },
      user: {
        title: '用户列表',
        userName: '用户名',
        userGender: '性别',
        nickName: '昵称',
        userPhone: '手机号',
        userEmail: '邮箱',
        userStatus: '用户状态',
        userRole: '用户角色',
        passWord: '登录密码',
        form: {
          userName: '请输入用户名',
          userGender: '请选择性别',
          nickName: '请输入昵称',
          userPhone: '请输入手机号',
          userEmail: '请输入邮箱',
          userStatus: '请选择用户状态',
          userRole: '请选择用户角色',
          passWord: '请输入登录密码'
        },
        addUser: '新增用户',
        editUser: '编辑用户',
        gender: {
          unknown: '未知',
          male: '男',
          female: '女'
        }
      },
      menu: {
        home: '首页',
        title: '菜单列表',
        id: 'ID',
        parentId: '父级菜单ID',
        menuType: '菜单类型',
        menuName: '菜单名称',
        routeName: '路由名称',
        routePath: '路由路径',
        pathParam: '路径参数',
        layout: '布局',
        page: '页面组件',
        i18nKey: '国际化key',
        icon: '图标',
        localIcon: '本地图标',
        iconTypeTitle: '图标类型',
        order: '排序',
        constant: '常量路由',
        keepAlive: '缓存路由',
        href: '外链',
        hideInMenu: '隐藏菜单',
        activeMenu: '高亮的菜单',
        multiTab: '支持多页签',
        fixedIndexInTab: '固定在页签中的序号',
        query: '路由参数',
        button: '按钮',
        buttonCode: '按钮编码',
        buttonDesc: '按钮描述',
        menuStatus: '菜单状态',
        form: {
          home: '请选择首页',
          menuType: '请选择菜单类型',
          menuName: '请输入菜单名称',
          routeName: '请输入路由名称',
          routePath: '请输入路由路径',
          pathParam: '请输入路径参数',
          page: '请选择页面组件',
          layout: '请选择布局组件',
          i18nKey: '请输入国际化key',
          icon: '请输入图标',
          localIcon: '请选择本地图标',
          order: '请输入排序',
          keepAlive: '请选择是否缓存路由',
          href: '请输入外链',
          hideInMenu: '请选择是否隐藏菜单',
          activeMenu: '请选择高亮的菜单的路由名称',
          multiTab: '请选择是否支持多标签',
          fixedInTab: '请选择是否固定在页签中',
          fixedIndexInTab: '请输入固定在页签中的序号',
          queryKey: '请输入路由参数Key',
          queryValue: '请输入路由参数Value',
          button: '请选择是否按钮',
          buttonCode: '请输入按钮编码',
          buttonDesc: '请输入按钮描述',
          menuStatus: '请选择菜单状态'
        },
        addMenu: '新增菜单',
        editMenu: '编辑菜单',
        addChildMenu: '新增子菜单',
        type: {
          directory: '目录',
          menu: '菜单'
        },
        iconType: {
          iconify: 'iconify图标',
          local: '本地图标'
        }
      }
    },
    datasource: {
      manage: {
        datasource: '数据源',
        datasourceName: '数据源名称',
        jdbcUsername: '用户名',
        jdbcPassword: '密码',
        jdbcUrl: 'jdbcUrl',
        jdbcDriverClass: 'jdbc驱动类',
        comments: '备注',
        form: {
          datasource: '请选择数据源',
          datasourceName: '请输入数据源名称',
          jdbcUsername: '请输入用户名',
          jdbcPassword: '请输入密码',
          jdbcUrl: 'jdbcUrl',
          jdbcDriverClass: 'jdbc驱动类',
          comments: '请输入备注'
        },
        datasourceRecord: {
          halo: 'Halo',
          mysql: 'MySQL',
          oracle: 'Oracle',
          postgresql: 'PostgreSQL',
          sqlserver: 'SQL Server',
          dm: '达梦数据库',
          db2: 'Db2',
          hive: 'Hive',
          polardb: 'PolarDB',
          tidb: 'TiDB',
          oceanbase: 'OceanBase',
          snowflake: 'Snowflake',
          mariadb: 'MariaDB',
          kingbase: 'KingbaseES',
          opengauss: 'OpenGauss'
        },
        addDatasource: '新增数据源',
        editDatasource: '编辑数据源',
        title: '数据源列表'
      }
    },
    contrast: {
      dataTitle: '数据对比列表',
      metaTitle: '元数据对比列表',
      taskName: '任务名称',
      AllResult: '总计对比结果',
      readerDatasourceId: '源端 ID',
      readerDatasource: '源端数据库',
      writerDatasourceId: '目标端 ID',
      writerDatasource: '目标端数据库',
      readerSchema: '源端Schema',
      writerSchema: '目标端Schema',
      createTime: '创建时间',
      form: {
        taskName: '请输入任务名称',
        readerDatasourceId: '请输入源端 ID',
        readerDatasource: '请选择源端数据库',
        writerDatasourceId: '请输入目标端 ID',
        writerDatasource: '请选择目标端数据库',
        readerSchema: '请输入源端Schema',
        writerSchema: '请输入目标端Schema',
        readerTables: '请选择校验的表'
      },
      addContrast: '新增对比任务',
      dataDetails: {
        title: '数据对比详情列表',
        readerTable: '源端表',
        writerTable: '目标端表',
        readerRecordRows: '源端表记录数',
        writerRecordRows: '目标端表记录数',
        isConsistent: '是否一致',
        isCorrect: {
          consistent: '一致',
          inconsistent: '不一致'
        },
        form: {
          readerTable: '请选择源端表',
          writerTable: '请选择目标端表',
          isCorrect: '请选择结果是否一致'
        },
        allTable: '全部结果',
        allCount: '源端共：{0} 张表，目标端共：{1} 张表，',
        mismatchCount: '不一致的表有 {0} 张',
        sourceTableNotExist: '源端表不存在',
        targetTableNotExist: '目标端表不存在'
      },
      verifyConfig: {
        title: '校验配置详情列表',
        configKey: '配置名称',
        configValue: '配置值',
        configType: '配置类型',
        form: {
          configKey: '请输入配置名称',
          configValue: '请输入配置值',
          configType: '请输入配置类型'
        },
        addConfig: '新增配置',
        editConfig: '编辑配置'
      },
      verifyDetails: {
        title: '数据校验列表',
        titleDetails: '数据校验详情列表',
        variationAnalysis: '差异分析',
        checkTotal: 'check对比总数',
        variationButton: '差异详情',
        tableName: '校验表',
        addVerify: '新增校验任务',
        sourceTableName: '源端表',
        targetTableName: '目标端表',
        sourceCount: '源端总数',
        targetCount: '目标端总数',
        percentage: '请输入百分比',
        samplingPercentage: '采样百分比',
        tips: '选择具体表或设置采样百分比（二选一），不选择默认全量比较',
        null: '无',
        pk: '主键',
        columnVerifyResult: '字段校验结果',
        equalCount: '相同的数量',
        notEqualCount: '不相同的数量',
        missingSourceCount: '源端缺失数量',
        missingTargetCount: '目标端缺失数量',
        stats: '校验结果',
        counts: '源端/目标端对比总数',
        tableNames: '源端/目标端表',
        sourceAndTarget: '源端表 → 目标端表',
        status: '校验状态',
        durationStr: '校验耗时',
        isStatusVerifyRecord: {
          all: '全部结果',
          outOfSync: '校验不一致',
          inSync: '校验一致',
          running: '校验中',
          skipped: '跳过校验',
          failed: '校验失败',
          selectStatus: '请选择校验状态'
        }
      }
    }
  },
  form: {
    required: '不能为空',
    userName: {
      required: '请输入用户名',
      invalid: '用户名格式不正确'
    },
    phone: {
      required: '请输入手机号',
      invalid: '手机号格式不正确'
    },
    pwd: {
      required: '请输入密码',
      invalid: '密码格式不正确，4-20位'
    },
    confirmPwd: {
      required: '请输入确认密码',
      invalid: '两次输入密码不一致'
    },
    code: {
      required: '请输入验证码',
      invalid: '验证码格式不正确'
    },
    email: {
      required: '请输入邮箱',
      invalid: '邮箱格式不正确'
    }
  },
  dropdown: {
    closeCurrent: '关闭',
    closeOther: '关闭其它',
    closeLeft: '关闭左侧',
    closeRight: '关闭右侧',
    closeAll: '关闭所有'
  },
  icon: {
    themeConfig: '主题配置',
    themeSchema: '主题模式',
    lang: '切换语言',
    fullscreen: '全屏',
    fullscreenExit: '退出全屏',
    reload: '刷新页面',
    collapse: '折叠菜单',
    expand: '展开菜单',
    pin: '固定',
    unpin: '取消固定'
  },
  datatable: {
    itemCount: '共 {total} 条'
  }
};

export default local;
