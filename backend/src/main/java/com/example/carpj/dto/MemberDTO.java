package com.example.carpj.dto;

import com.example.carpj.entity.AuthProvider;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class MemberDTO {
    private String id; //아이디
    private String name; //이름
    private String email; //이메일
    private String imageUrl; //프로필
    private AuthProvider provider; //소셜 로그인
    private String providerId; //외부 인증 제공자의 사용자 식별자 저장
    private String sex; //성별
    private Integer year; //생일(나이대)
}
