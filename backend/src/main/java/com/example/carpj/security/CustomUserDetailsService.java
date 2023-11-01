package com.example.carpj.security;


import com.example.carpj.exception.ResourceNotFoundException;
import com.example.carpj.entity.Member;
import com.example.carpj.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    MemberRepository memberRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        //주어진 이메일에 해당하는 사용자 정보 조회
        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException("Member not found with email : " + email)
        );
        System.out.println("member============"+ member);
        return UserPrincipal.create(member);
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        //주어진 ID에 해당하는 사용자 정보 조회
        Member member = memberRepository.findById(id).orElseThrow(
            () -> new ResourceNotFoundException("Member", "id", id)
        );

        return UserPrincipal.create(member);
    }
}