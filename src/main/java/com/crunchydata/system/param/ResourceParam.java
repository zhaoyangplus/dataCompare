package com.crunchydata.system.param;

import lombok.Data;

import java.util.List;

@Data
public class ResourceParam {

    private Long id;

    private Integer parentId;

    private String menuType;

    private String menuName;

    private String routeName;

    private String routePath;

    private String pathParam;

    private String component;

    private String layout;

    private String page;

    private String i18nKey;

    private String icon;

    private String localIcon;

    private String iconType;

    private String status;

    private Boolean keepAlive;

    private Boolean constant;

    private Integer order;

    private String href;

    private Boolean hideInMenu;

    private String activeMenu;

    private Boolean multiTab;

    private Integer fixedIndexInTab;

    private List<String> roles;

    private List<String> query;

    private List<String> buttons;
}
