package com.crunchydata.system.vo;

import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import com.crunchydata.system.mybatis.base.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Collections;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class Meta extends BaseEntity {

    private String title;

    private String i18nKey;

    private String icon;

    private String iconType;

    private Integer order;

    private List<String> roles;

    private Boolean keepAlive;

    private Boolean constant;

    private String localIcon;

    private String href;

    private Boolean hideInMenu;

    private String activeMenu;

    private Boolean multiTab;

    private Integer fixedIndexInTab;

    private List<String> query;

    // 添加无参构造函数
    public Meta() {}

    public Meta(String metaJson) {
        JSONObject jsonObject = JSONUtil.parseObj(metaJson);

        setTitle(jsonObject.getStr("title", ""));
        setI18nKey(jsonObject.getStr("i18nKey", ""));
        setIcon(jsonObject.getStr("icon", ""));
        setIconType(jsonObject.getStr("iconType", ""));

        // 对其他字段做同样处理
        setOrder(jsonObject.getInt("order", null)); // 如果order字段可为空，则设为null，否则提供一个默认值
        if (!jsonObject.containsKey("roles")) {
            roles = Collections.emptyList(); // 或者自定义一个默认空集合
        } else {
            roles = jsonObject.getJSONArray("roles").toList(String.class); // 假设roles是一个字符串数组
        }
        setKeepAlive(jsonObject.getBool("keepAlive", false));
        setConstant(jsonObject.getBool("constant", null));
        setLocalIcon(jsonObject.getStr("localIcon", ""));
        setHref(jsonObject.getStr("href", ""));
        setHideInMenu(jsonObject.getBool("hideInMenu", null));
        setActiveMenu(jsonObject.getStr("activeMenu", ""));
        setMultiTab(jsonObject.getBool("multiTab", false));
        setFixedIndexInTab(jsonObject.getInt("fixedIndexInTab", null));
        if (!jsonObject.containsKey("query")) {
            roles = Collections.emptyList();
        } else {
            roles = jsonObject.getJSONArray("query").toList(String.class);
        }
    }
}

