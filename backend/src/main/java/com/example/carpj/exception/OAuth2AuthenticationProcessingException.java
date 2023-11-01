package com.example.carpj.exception;

import org.springframework.security.core.AuthenticationException;

public class OAuth2AuthenticationProcessingException extends AuthenticationException {
    //OAuth 인증 처리 과정에서 발생하는 예외 처리
    public OAuth2AuthenticationProcessingException(String msg) {
        super(msg);
    }

    public OAuth2AuthenticationProcessingException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
