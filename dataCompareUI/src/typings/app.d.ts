/** The global namespace for the app */
declare namespace App {
  /** Theme namespace */
  namespace Theme {
    type ColorPaletteNumber = import('@sa/color').ColorPaletteNumber;

    /** Theme setting */
    interface ThemeSetting {
      /** Theme scheme */
      themeScheme: UnionKey.ThemeScheme;
      /** grayscale mode */
      grayscale: boolean;
      /** colour weakness mode */
      colourWeakness: boolean;
      /** Whether to recommend color */
      recommendColor: boolean;
      /** Theme color */
      themeColor: string;
      /** Other color */
      otherColor: OtherColor;
      /** Whether info color is followed by the primary color */
      isInfoFollowPrimary: boolean;
      /** Reset cache strategy */
      resetCacheStrategy: UnionKey.ResetCacheStrategy;
      /** Layout */
      layout: {
        /** Layout mode */
        mode: UnionKey.ThemeLayoutMode;
        /** Scroll mode */
        scrollMode: UnionKey.ThemeScrollMode;
        /**
         * Whether to reverse the horizontal mix
         *
         * if true, the vertical child level menus in left and horizontal first level menus in top
         */
        reverseHorizontalMix: boolean;
      };
      /** Page */
      page: {
        /** Whether to show the page transition */
        animate: boolean;
        /** Page animate mode */
        animateMode: UnionKey.ThemePageAnimateMode;
      };
      /** Header */
      header: {
        /** Header height */
        height: number;
        /** Header breadcrumb */
        breadcrumb: {
          /** Whether to show the breadcrumb */
          visible: boolean;
          /** Whether to show the breadcrumb icon */
          showIcon: boolean;
        };
        /** Multilingual */
        multilingual: {
          /** Whether to show the multilingual */
          visible: boolean;
        };
      };
      /** Tab */
      tab: {
        /** Whether to show the tab */
        visible: boolean;
        /**
         * Whether to cache the tab
         *
         * If cache, the tabs will get from the local storage when the page is refreshed
         */
        cache: boolean;
        /** Tab height */
        height: number;
        /** Tab mode */
        mode: UnionKey.ThemeTabMode;
      };
      /** Fixed header and tab */
      fixedHeaderAndTab: boolean;
      /** Sider */
      sider: {
        /** Inverted sider */
        inverted: boolean;
        /** Sider width */
        width: number;
        /** Collapsed sider width */
        collapsedWidth: number;
        /** Sider width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixWidth: number;
        /** Collapsed sider width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixCollapsedWidth: number;
        /** Child menu width when the layout is 'vertical-mix' or 'horizontal-mix' */
        mixChildMenuWidth: number;
      };
      /** Footer */
      footer: {
        /** Whether to show the footer */
        visible: boolean;
        /** Whether fixed the footer */
        fixed: boolean;
        /** Footer height */
        height: number;
        /** Whether float the footer to the right when the layout is 'horizontal-mix' */
        right: boolean;
      };
      /** Watermark */
      watermark: {
        /** Whether to show the watermark */
        visible: boolean;
        /** Watermark text */
        text: string;
      };
      /** define some theme settings tokens, will transform to css variables */
      tokens: {
        light: ThemeSettingToken;
        dark?: {
          [K in keyof ThemeSettingToken]?: Partial<ThemeSettingToken[K]>;
        };
      };
    }

    interface OtherColor {
      info: string;
      success: string;
      warning: string;
      error: string;
    }

    interface ThemeColor extends OtherColor {
      primary: string;
    }

    type ThemeColorKey = keyof ThemeColor;

    type ThemePaletteColor = {
      [key in ThemeColorKey | `${ThemeColorKey}-${ColorPaletteNumber}`]: string;
    };

    type BaseToken = Record<string, Record<string, string>>;

    interface ThemeSettingTokenColor {
      /** the progress bar color, if not set, will use the primary color */
      nprogress?: string;
      container: string;
      layout: string;
      inverted: string;
      'base-text': string;
    }

    interface ThemeSettingTokenBoxShadow {
      header: string;
      sider: string;
      tab: string;
    }

    interface ThemeSettingToken {
      colors: ThemeSettingTokenColor;
      boxShadow: ThemeSettingTokenBoxShadow;
    }

    type ThemeTokenColor = ThemePaletteColor & ThemeSettingTokenColor;

    /** Theme token CSS variables */
    type ThemeTokenCSSVars = {
      colors: ThemeTokenColor & { [key: string]: string };
      boxShadow: ThemeSettingTokenBoxShadow & { [key: string]: string };
    };
  }

  /** Global namespace */
  namespace Global {
    type VNode = import('vue').VNode;
    type RouteLocationNormalizedLoaded = import('vue-router').RouteLocationNormalizedLoaded;
    type RouteKey = import('@elegant-router/types').RouteKey;
    type RouteMap = import('@elegant-router/types').RouteMap;
    type RoutePath = import('@elegant-router/types').RoutePath;
    type LastLevelRouteKey = import('@elegant-router/types').LastLevelRouteKey;

    /** The global header props */
    interface HeaderProps {
      /** Whether to show the logo */
      showLogo?: boolean;
      /** Whether to show the menu toggler */
      showMenuToggler?: boolean;
      /** Whether to show the menu */
      showMenu?: boolean;
    }

    /** The global menu */
    type Menu = {
      /**
       * The menu key
       *
       * Equal to the route key
       */
      key: string;
      /** The menu label */
      label: string;
      /** The menu i18n key */
      i18nKey?: I18n.I18nKey | null;
      /** The route key */
      routeKey: RouteKey;
      /** The route path */
      routePath: RoutePath;
      /** The menu icon */
      icon?: () => VNode;
      /** The menu children */
      children?: Menu[];
    };

    type Breadcrumb = Omit<Menu, 'children'> & {
      options?: Breadcrumb[];
    };

    /** Tab route */
    type TabRoute = Pick<RouteLocationNormalizedLoaded, 'name' | 'path' | 'meta'> &
      Partial<Pick<RouteLocationNormalizedLoaded, 'fullPath' | 'query' | 'matched'>>;

    /** The global tab */
    type Tab = {
      /** The tab id */
      id: string;
      /** The tab label */
      label: string;
      /**
       * The new tab label
       *
       * If set, the tab label will be replaced by this value
       */
      newLabel?: string;
      /**
       * The old tab label
       *
       * when reset the tab label, the tab label will be replaced by this value
       */
      oldLabel?: string;
      /** The tab route key */
      routeKey: LastLevelRouteKey;
      /** The tab route path */
      routePath: RouteMap[LastLevelRouteKey];
      /** The tab route full path */
      fullPath: string;
      /** The tab fixed index */
      fixedIndex?: number | null;
      /**
       * Tab icon
       *
       * Iconify icon
       */
      icon?: string;
      /**
       * Tab local icon
       *
       * Local icon
       */
      localIcon?: string;
      /** I18n key */
      i18nKey?: I18n.I18nKey | null;
    };

    /** Form rule */
    type FormRule = import('naive-ui').FormItemRule;

    /** The global dropdown key */
    type DropdownKey = 'closeCurrent' | 'closeOther' | 'closeLeft' | 'closeRight' | 'closeAll';
  }

  /**
   * I18n namespace
   *
   * Locales type
   */
  namespace I18n {
    type RouteKey = import('@elegant-router/types').RouteKey;

    type LangType = 'en-US' | 'zh-CN';

    type LangOption = {
      label: string;
      key: LangType;
    };

    type I18nRouteKey = Exclude<RouteKey, 'root' | 'not-found'>;

    type FormMsg = {
      required: string;
      invalid: string;
    };

    type Schema = {
      system: {
        title: string;
        updateTitle: string;
        updateContent: string;
        updateConfirm: string;
        updateCancel: string;
      };
      common: {
        inputCannotContainSpace: string;
        details: string;
        action: string;
        add: string;
        addSuccess: string;
        addFailed: string;
        submitting: string;
        submittingTask: string;
        backToHome: string;
        batchDelete: string;
        cancel: string;
        close: string;
        check: string;
        expandColumn: string;
        columnSetting: string;
        config: string;
        confirm: string;
        delete: string;
        deleteSuccess: string;
        confirmDelete: string;
        edit: string;
        warning: string;
        error: string;
        index: string;
        keywordSearch: string;
        logout: string;
        logoutConfirm: string;
        lookForward: string;
        modify: string;
        modifySuccess: string;
        noData: string;
        operate: string;
        pleaseCheckValue: string;
        refresh: string;
        reset: string;
        search: string;
        switch: string;
        tip: string;
        trigger: string;
        update: string;
        updateSuccess: string;
        userCenter: string;
        yesOrNo: {
          yes: string;
          no: string;
        };
        testConnection: string;
        testSuccess: string;
        batchCreateTask: string;
        cancelSuccess: string;
        logDetails: string;
        refreshLog: string;
        refreshSuccess: string;
        editScript: string;
        confirmExecute: string;
        more: string;
        dataMigration: string;
        open: string;
        runOnce: string;
        queryLog: string;
        batchSetting: string;
        createTask: string;
      };
      request: {
        logout: string;
        logoutMsg: string;
        logoutWithModal: string;
        logoutWithModalMsg: string;
        refreshToken: string;
        tokenExpired: string;
      };
      theme: {
        themeSchema: { title: string } & Record<UnionKey.ThemeScheme, string>;
        grayscale: string;
        colourWeakness: string;
        layoutMode: { title: string; reverseHorizontalMix: string } & Record<UnionKey.ThemeLayoutMode, string>;
        recommendColor: string;
        recommendColorDesc: string;
        themeColor: {
          title: string;
          followPrimary: string;
        } & Theme.ThemeColor;
        scrollMode: { title: string } & Record<UnionKey.ThemeScrollMode, string>;
        page: {
          animate: string;
          mode: { title: string } & Record<UnionKey.ThemePageAnimateMode, string>;
        };
        fixedHeaderAndTab: string;
        header: {
          height: string;
          breadcrumb: {
            visible: string;
            showIcon: string;
          };
          multilingual: {
            visible: string;
          };
        };
        tab: {
          visible: string;
          cache: string;
          height: string;
          mode: { title: string } & Record<UnionKey.ThemeTabMode, string>;
        };
        sider: {
          inverted: string;
          width: string;
          collapsedWidth: string;
          mixWidth: string;
          mixCollapsedWidth: string;
          mixChildMenuWidth: string;
        };
        footer: {
          visible: string;
          fixed: string;
          height: string;
          right: string;
        };
        watermark: {
          visible: string;
          text: string;
        };
        themeDrawerTitle: string;
        pageFunTitle: string;
        resetCacheStrategy: { title: string } & Record<UnionKey.ResetCacheStrategy, string>;
        configOperation: {
          copyConfig: string;
          copySuccessMsg: string;
          resetConfig: string;
          resetSuccessMsg: string;
        };
      };
      route: Record<I18nRouteKey, string>;
      page: {
        login: {
          common: {
            loginOrRegister: string;
            userNamePlaceholder: string;
            phonePlaceholder: string;
            codePlaceholder: string;
            passwordPlaceholder: string;
            confirmPasswordPlaceholder: string;
            codeLogin: string;
            confirm: string;
            back: string;
            validateSuccess: string;
            loginSuccess: string;
            welcomeBack: string;
          };
          pwdLogin: {
            title: string;
            rememberMe: string;
            forgetPassword: string;
            register: string;
            otherAccountLogin: string;
            otherLoginMode: string;
            superAdmin: string;
            admin: string;
            user: string;
          };
          codeLogin: {
            title: string;
            getCode: string;
            reGetCode: string;
            sendCodeSuccess: string;
            imageCodePlaceholder: string;
          };
          register: {
            title: string;
            agreement: string;
            protocol: string;
            policy: string;
          };
          resetPwd: {
            title: string;
          };
          bindWeChat: {
            title: string;
          };
        };
        home: {
          branchDesc: string;
          greeting: string;
          weatherDesc: string;
          projectCount: string;
          todo: string;
          message: string;
          downloadCount: string;
          registerCount: string;
          schedule: string;
          study: string;
          work: string;
          rest: string;
          entertainment: string;
          taskTotal: string;
          successCount: string;
          failCount: string;
          awaitCount: string;
          runningCount: string;
          projectNews: {
            title: string;
            moreNews: string;
            desc1: string;
            desc2: string;
            desc3: string;
            desc4: string;
            desc5: string;
          };
          creativity: string;
        };
        manage: {
          common: {
            status: {
              enable: string;
              disable: string;
            };
          };
          role: {
            title: string;
            roleName: string;
            roleCode: string;
            roleStatus: string;
            roleDesc: string;
            form: {
              roleName: string;
              roleCode: string;
              roleStatus: string;
              roleDesc: string;
            };
            addRole: string;
            editRole: string;
            menuAuth: string;
            buttonAuth: string;
          };
          user: {
            title: string;
            userName: string;
            userGender: string;
            nickName: string;
            userPhone: string;
            userEmail: string;
            userStatus: string;
            userRole: string;
            passWord: string;
            form: {
              userName: string;
              userGender: string;
              nickName: string;
              userPhone: string;
              userEmail: string;
              userStatus: string;
              userRole: string;
              passWord: string;
            };
            addUser: string;
            editUser: string;
            gender: {
              unknown: string;
              male: string;
              female: string;
            };
          };
          monitor: {
            CPUUse: string;
            storageUse: string;
            averageLoad: string;
          };
          menu: {
            home: string;
            title: string;
            id: string;
            parentId: string;
            menuType: string;
            menuName: string;
            routeName: string;
            routePath: string;
            pathParam: string;
            layout: string;
            page: string;
            i18nKey: string;
            icon: string;
            localIcon: string;
            iconTypeTitle: string;
            order: string;
            constant: string;
            keepAlive: string;
            href: string;
            hideInMenu: string;
            activeMenu: string;
            multiTab: string;
            fixedIndexInTab: string;
            query: string;
            button: string;
            buttonCode: string;
            buttonDesc: string;
            menuStatus: string;
            form: {
              home: string;
              menuType: string;
              menuName: string;
              routeName: string;
              routePath: string;
              pathParam: string;
              layout: string;
              page: string;
              i18nKey: string;
              icon: string;
              localIcon: string;
              order: string;
              keepAlive: string;
              href: string;
              hideInMenu: string;
              activeMenu: string;
              multiTab: string;
              fixedInTab: string;
              fixedIndexInTab: string;
              queryKey: string;
              queryValue: string;
              button: string;
              buttonCode: string;
              buttonDesc: string;
              menuStatus: string;
            };
            addMenu: string;
            editMenu: string;
            addChildMenu: string;
            type: {
              directory: string;
              menu: string;
            };
            iconType: {
              iconify: string;
              local: string;
            };
          };
        };
        datasource: {
          manage: {
            datasource: string;
            datasourceName: string;
            jdbcUsername: string;
            jdbcPassword: string;
            jdbcUrl: string;
            jdbcDriverClass: string;
            comments: string;
            form: {
              datasource: string;
              datasourceName: string;
              jdbcUsername: string;
              jdbcPassword: string;
              jdbcUrl: string;
              jdbcDriverClass: string;
              comments: string;
            };
            datasourceRecord: {
              halo: string;
              mysql: string;
              oracle: string;
              postgresql: string;
              sqlserver: string;
              dm: string;
              db2: string;
              hive: string;
            };
            addDatasource: string;
            editDatasource: string;
            title: string;
          };
        };
        project: {
          manage: {
            title: string;
            projectName: string;
            description: string;
            userName: string;
            updateTime: string;
            triggerStatus: string;
            runningStatus: string;
            form: {
              projectName: string;
              description: string;
            };
            addProject: string;
            editProject: string;
          };
          autoMigrate: {
            logDetails: string;
            runningStatus: {
              unstart: string;
              running: string;
              abnormal: string;
              finally: string;
              stopping: string;
              stopped: string;
            };
            addProject: string;
          };
        };
        executor: {
          manage: {
            title: string;
            executorName: string;
            groupID: string;
            registerType: string;
            order: string;
            onlineMachine: string;
            updateTime: string;
            form: {
              groupID: string;
              executorName: string;
              onlineMachine: string;
              order: string;
            };
            addExecutor: string;
            editExecutor: string;
            register: {
              autoRegister: string;
              manualRegister: string;
            };
          };
        };
        task: {
          batch: {
            readerDataSource: string;
            readerSchema: string;
            readerTables: string;
            writerDataSource: string;
            writerSchema: string;
            writerTables: string;
            readerSplitPk: string;
            template: string;
            form: {
              readerDataSource: string;
              readerSchema: string;
              writerDataSource: string;
              writerSchema: string;
              readerSplitPk: string;
              template: string;
            };
            createTask: string;
            showChekModalTitle: string;
            checkTables: string;
            sourceSpecific: string;
            targetSpecific: string;
            uncheck: string;
            createTaskLoading: string;
            templateTooltip: string;
          };
          submeta: {
            readerDataSource: string;
            readerSchema: string;
            writerDataSource: string;
            metadataIds: string;
            template: string;
            selectAndSql: string;
            migrationConfig: string;
            tableAndColSwitch: string;
            mysqlCommandSwitch: string;
            mysqlIp: string;
            mysqlPort: string;
            mysqlUser: string;
            mysqlPwd: string;
            tableSplitSwitch: string;
            form: {
              readerDataSource: string;
              readerSchema: string;
              writerDataSource: string;
              template: string;
              selectAndSql: string;
            };
            subMetaTypeRecord: {
              type: string;
              table: string;
              constraints: string;
              index: string;
              function: string;
              procedure: string;
              view: string;
              trigger: string;
              package: string;
              sequence: string;
              tablecomment: string;
              synonym: string;
            };
            createTask: string;
            AndSqlTooltip: string;
            processAlertTitle: string;
            processAlertContent1: string;
            processAlertDescription1: string;
            processAlertContent2: string;
            processAlertDescription2: string;
            processAlertContent3: string;
            processAlertDescription3: string;
            processAlertNote: string;
            MySqlTooltip: string;
            metaHistoryLog: string;
            tableSplitTooltip: string;
          };
          manage: {
            jobDesc: string;
            projectName: string;
            jobCron: string;
            triggerStatus: string;
            lastHandleCode: string;
            isStatusValid: string;
            registerNode: string;
            updateTime: string;
            glueType: string;
            isBigType: string;
            jvmParam: string;
            jobGroup: string;
            projectId: string;
            executorRouteStrategy: string;
            executorBlockStrategy: string;
            executorFailRetryCount: string;
            executorTimeout: string;
            editorCode: string;
            form: {
              jobDesc: string;
              jvmParam: string;
            };
            glueTypeRecord: {
              datax: string;
              shell: string;
            };
            lastHandleCodeRecord: {
              await: string;
              running: string;
              success: string;
              error: string;
              timeout: string;
            };
            isStatusValidRecord: {
              valid: string;
              invalid: string;
              enabled: string;
              disabled: string;
              null: string;
            };
            routeStrategiesRecord: {
              first: string;
              last: string;
              round: string;
              random: string;
              consistentHash: string;
              leastFrequentlyUsed: string;
              leastRecentlyUsed: string;
              failover: string;
              busyover: string;
            };
            blockStrategiesRecord: {
              serialExecution: string;
              discardLater: string;
              coverEarly: string;
            };
            isBigTypeOptions: {
              yes: string;
              no: string;
            };
            batchStart: string;
            confirmBatchStart: string;
            failRestart: string;
            confirmFailRestart: string;
            batchStop: string;
            confirmBatchStop: string;
            editTask: string;
            title: string;
            editScript: string;
            filePath: string;
            setModalTitle: string;
            setModalMsg: string;
          };
          build: {
            readerTable: string;
            writerTable: string;
            readerTableField: string;
            writerTableField: string;
            querySql: string;
            where: string;
            preSql: string;
            postSql: string;
            form: {
              readerTable: string;
              writerTable: string;
              querySql: string;
              where: string;
              preSql: string;
              postSql: string;
            };
            createTask: string;
            getColumnsError: string;
            buildTaskJson: string;
            editTaskJson: string;
          };
          datatype: {
            title: string;
            dataSource: string;
            sourceType: string;
            targetType: string;
            value: string;
            updateTime: string;
            form: {
              dataSource: string;
              sourceType: string;
              targetType: string;
              example: string;
              mapsTo: string;
              value: {
                retainValue: string;
                notRetainValue: string;
              };
            };
            addDtm: string;
            editDtm: string;
          };
          tasktemplate: {
            title: string;
            taskID: string;
            taskDesc: string;
            projectName: string;
            routingPolicy: string;
            userName: string;
            registerNode: string;
            form: {
              enterTaskDesc: string;
              projectAffiliation: string;
            };
            look: string;
            addTemplate: string;
            editTemplate: string;
          };
        };
        contrast: {
          dataTitle: string;
          metaTitle: string;
          taskName: string;
          AllResult: string;
          readerDatasourceId: string;
          readerDatasource: string;
          writerDatasourceId: string;
          writerDatasource: string;
          readerSchema: string;
          writerSchema: string;
          createTime: string;
          form: {
            taskName: string;
            readerDatasourceId: string;
            readerDatasource: string;
            writerDatasourceId: string;
            writerDatasource: string;
            readerSchema: string;
            writerSchema: string;
          };
          metaType: {
            dataContrast: string;
            metaContrast: string;
          };
          addContrast: string;
          dataDetails: {
            title: string;
            readerTable: string;
            writerTable: string;
            readerRecordRows: string;
            writerRecordRows: string;
            isConsistent: string;
            isCorrect: {
              consistent: string;
              inconsistent: string;
            };
            form: {
              readerTable: string;
              writerTable: string;
              isCorrect: string;
            };
            allTable: string;
            allCount: string;
            mismatchCount: string;
            sourceTableNotExist: string;
            targetTableNotExist: string;
          };
          verifyConfig: {
            title: string;
            configKey: string;
            configValue: string;
            configType: string;
            form: {
              configKey: string;
              configValue: string;
              configType: string;
            };
            addConfig: string;
            editConfig: string;
          };
          verifyDetails: {
            title: string;
            titleDetails: string;
            tableName: string;
            addVerify: string;
            variationAnalysis: string;
            checkTotal: string;
            variationButton: string;
            sourceTableName: string;
            targetTableName: string;
            sourceCount: string;
            targetCount: string;
            percentage: string;
            samplingPercentage: string;
            tips: string;
            null: string;
            pk: string;
            columnVerifyResult: string;
            equalCount: string;
            notEqualCount: string;
            missingSourceCount: string;
            missingTargetCount: string;
            stats: string;
            counts: string;
            tableNames: string;
            sourceAndTarget: string;
            status: string;
            durationStr: string;
            isStatusVerifyRecord: {
              all: string;
              outOfSync: string;
              inSync: string;
              running: string;
              skipped: string;
              failed: string;
              selectStatus: string;
            };
          };
          metaDetails: {
            title: string;
            readerTable: string;
            writerTable: string;
            metaType: string;
            tableName: string;
            isConsistent: string;
            fastSelect: string;
            objectName: string;
            metaInfo: string;
            sideBySide: string;
            lineByLine: string;
            switchSql: string;
            isCorrect: {
              consistent: string;
              inconsistent: string;
            };
            form: {
              readerTable: string;
              writerTable: string;
              tableName: string;
              fastSelect: string;
              isCorrect: string;
            };
            allTable: string;
            allCount: string;
            mismatchCount: string;
            sourceTableNotExist: string;
            targetTableNotExist: string;
          };
        };
        report: {
          metaTitle: string;
          dataTitle: string;
          metaReport: {
            metaType: string;
            allCount: string;
            sucessCount: string;
            failCount: string;
            waitCount: string;
            executeCount: string;
          };
        };
        log: {
          look: string;
          title: string;
          taskID: string;
          taskDesc: string;
          metaType: string;
          triggerTime: string;
          triggerCode: string;
          triggerMsg: string;
          handleTime: string;
          handleCode: string;
          handleMsg: string;
          form: {
            enterTaskDesc: string;
            allExecutor: string;
            all: string;
            executor: string;
            result: string;
            success: string;
            fail: string;
            running: string;
          };
          clearLog: string;
          selectClearType: string;
          clearType: string;
          clearMonth1: string;
          clearMonth3: string;
          clearMonth6: string;
          clearYear1: string;
          clear1k: string;
          clear10k: string;
          clear30k: string;
          clear100k: string;
          clearAll: string;
          clearSuccess: string;
          clearFail: string;
        };
      };
      form: {
        required: string;
        userName: FormMsg;
        phone: FormMsg;
        pwd: FormMsg;
        confirmPwd: FormMsg;
        code: FormMsg;
        email: FormMsg;
      };
      dropdown: Record<Global.DropdownKey, string>;
      icon: {
        themeConfig: string;
        themeSchema: string;
        lang: string;
        fullscreen: string;
        fullscreenExit: string;
        reload: string;
        collapse: string;
        expand: string;
        pin: string;
        unpin: string;
      };
      datatable: {
        itemCount: string;
      };
    };

    type GetI18nKey<T extends Record<string, unknown>, K extends keyof T = keyof T> = K extends string
      ? T[K] extends Record<string, unknown>
        ? `${K}.${GetI18nKey<T[K]>}`
        : K
      : never;

    type I18nKey = GetI18nKey<Schema>;

    type TranslateOptions<Locales extends string> = import('vue-i18n').TranslateOptions<Locales>;

    interface $T {
      (key: I18nKey): string;
      (key: I18nKey, plural: number, options?: TranslateOptions<LangType>): string;
      (key: I18nKey, defaultMsg: string, options?: TranslateOptions<I18nKey>): string;
      (key: I18nKey, list: unknown[], options?: TranslateOptions<I18nKey>): string;
      (key: I18nKey, list: unknown[], plural: number): string;
      (key: I18nKey, list: unknown[], defaultMsg: string): string;
      (key: I18nKey, named: Record<string, unknown>, options?: TranslateOptions<LangType>): string;
      (key: I18nKey, named: Record<string, unknown>, plural: number): string;
      (key: I18nKey, named: Record<string, unknown>, defaultMsg: string): string;
    }
  }

  /** Service namespace */
  namespace Service {
    /** Other baseURL key */
    type OtherBaseURLKey = 'demo';

    interface ServiceConfigItem {
      /** The backend service base url */
      baseURL: string;
      /** The proxy pattern of the backend service base url */
      proxyPattern: string;
    }

    interface OtherServiceConfigItem extends ServiceConfigItem {
      key: OtherBaseURLKey;
    }

    /** The backend service config */
    interface ServiceConfig extends ServiceConfigItem {
      /** Other backend service config */
      other: OtherServiceConfigItem[];
    }

    interface SimpleServiceConfig extends Pick<ServiceConfigItem, 'baseURL'> {
      other: Record<OtherBaseURLKey, string>;
    }

    /** The backend service response data */
    type Response<T = unknown> = {
      /** The backend service response code */
      code: string | number;
      /** The backend service response message */
      msg: string;
      /** The backend service response data */
      content: T;
    };

    /** The demo backend service response data */
    type DemoResponse<T = unknown> = {
      /** The backend service response code */
      status: string;
      /** The backend service response message */
      message: string;
      /** The backend service response data */
      result: T;
    };
  }
}
