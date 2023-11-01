package com.example.carpj.service;

import com.example.carpj.entity.Member;
import com.example.carpj.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor //JPA 처리를 위한 의존성 주입
@Log4j2
public class MemberServiceImpl implements MemberService{
    private final MemberRepository memberRepository; //자동 주입 final

    @Override
    public boolean memberModify(Member member, String sex, Integer year) { //회원정보 수정하기
        try {
            log.info("memberModify");

            member.changeSex(sex);
            member.changeYear(year);
            memberRepository.save(member); // 수정된 회원 정보 저장

            return true;
        } catch(Exception e) {
            log.info(e.getMessage());
            return false;
        }

    }

}
