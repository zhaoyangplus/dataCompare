package com.crunchydata;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.util.Base64;

public class JwtKeyGenerator {
    public static void main(String[] args) {
        // 生成 HS512 专用密钥（自动 512 位）
        byte[] keyBytes = Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded();
        // 转成 Base64 字符串（方便存储在配置文件，避免乱码）
        String base64Key = Base64.getEncoder().encodeToString(keyBytes);
        System.out.println("HS512 合规密钥（Base64 格式）：" + base64Key);
    }
}
