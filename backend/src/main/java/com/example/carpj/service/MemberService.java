package com.example.carpj.service;

import com.example.carpj.entity.Member;

public interface MemberService {
    boolean memberModify(Member member, String sex, Integer year); //회원 수정
}
