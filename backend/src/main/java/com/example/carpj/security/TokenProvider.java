package com.example.carpj.security;

import com.example.carpj.config.AppProperties;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenProvider { //JWT 토큰 새성 및 검증

    private static final Logger logger = LoggerFactory.getLogger(TokenProvider.class);

    private AppProperties appProperties;

    public TokenProvider(AppProperties appProperties) {
        this.appProperties = appProperties;
    }

    public String createToken(Authentication authentication) { //JWT 토큰 생성
        //사용자의 인증 정보
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        Date now = new Date();
        //토큰 만료 시간
        Date expiryDate = new Date(System.currentTimeMillis() + appProperties.getAuth().getTokenExpirationMsec());
        System.out.println("TokenProvider---"+now.getTime()+", getAuth.getTokenExpire---"+appProperties.getAuth().getTokenExpirationMsec());
        return Jwts.builder()
                .setSubject(Long.toString(userPrincipal.getId())) //사용자의 고유 식별자 설정
                .setIssuedAt(new Date()) //토큰 발급 시간 = 현재 시간
                .setExpiration(expiryDate) //토큰 만료 시간
                //토큰 서명 알고리즘과 서명에 사용할 비밀 키 설정
                .signWith(SignatureAlgorithm.HS512, appProperties.getAuth().getTokenSecret())
                .compact(); //토큰을 문자열 형태로 변환하여 반환
    }

    public Long getUserIdFromToken(String token) { //JWT 토큰에서 사용자 ID 추출하여 반환
        Claims claims = Jwts.parser()
                //토큰의 서명 검증하기 위해 사용할 비밀 키 설정
                .setSigningKey(appProperties.getAuth().getTokenSecret())
                .parseClaimsJws(token) //주어진 토큰 파싱하여 Claims 객체 얻음
                .getBody(); //토큰의 claims 정보 가져온다

        //토큰의 subject에서 사용자의 고유 식별자를 추출하여 반환
        return Long.parseLong(claims.getSubject());
    }

    public boolean validateToken(String authToken) { //JWT 토큰 유효성 검사
        try {
            Jwts.parser().setSigningKey(appProperties.getAuth().getTokenSecret()).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException ex) {
            logger.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            logger.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT claims string is empty.");
        }
        return false;
    }

}
