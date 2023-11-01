package com.example.carpj.security.oauth2.user;

import java.util.Map;

public abstract class OAuth2UserInfo {
    protected Map<String, Object> attributes; //사용자 정보

    public OAuth2UserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public Map<String, Object> getAttributes() {
        return attributes;
    }

    public abstract String getId(); //사용자의 고유 식별자

    public abstract String getName(); //사용자 이름

    public abstract String getEmail(); //사용자 이메일

    public abstract String getImageUrl(); //사용자 프로필
}
