package com.crunchydata.system.param;

import lombok.Data;

import java.util.List;

@Data
public class CreateUserParam {

    private Long id;

    private String nickName;

    private String userName;

    private String password;

    private String userGender;

    private String status;

    private String userPhone;

    private String userEmail;

    private List<String> userRoles;

}
