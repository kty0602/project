package com.example.carpj.controller;

import com.example.carpj.exception.ResourceNotFoundException;
import com.example.carpj.entity.Member;
import com.example.carpj.repository.MemberRepository;
import com.example.carpj.security.CurrentUser;
import com.example.carpj.security.UserPrincipal;
import com.example.carpj.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log4j2
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {

    private final MemberRepository memberRepository;
    private final MemberService memberService;

    @GetMapping("/me")
    @PreAuthorize("hasRole('USER')")
    public Member getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        System.out.println("=================================user/me=================================");
        //현재 인증된 사용자 정보 가져온다.
        return memberRepository.findById(userPrincipal.getId()) //사용자의 식별자를 기반으로 사용자를 조회하여 반환
                .orElseThrow(() -> new ResourceNotFoundException("Member", "id", userPrincipal.getId()));
    }

    @GetMapping("/modify")
    @PreAuthorize("hasRole('USER')")
    public boolean MemberModify(@CurrentUser UserPrincipal userPrincipal, @RequestParam("sex")String sex, @RequestParam("year")Integer year) {
        System.out.println("=================================user/modify=================================");
        // 현재 인증된 사용자 정보 가져온다.
        Member member = memberRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Member", "id", userPrincipal.getId()));
        boolean result = memberService.memberModify(member, sex, year);
        return result;
    }
}
