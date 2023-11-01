package com.example.carpj.security.oauth2;

import com.example.carpj.exception.OAuth2AuthenticationProcessingException;
import com.example.carpj.entity.AuthProvider;
import com.example.carpj.entity.Member;
import com.example.carpj.repository.MemberRepository;
import com.example.carpj.security.UserPrincipal;
import com.example.carpj.security.oauth2.user.OAuth2UserInfo;
import com.example.carpj.security.oauth2.user.OAuth2UserInfoFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Optional;

@Service
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    private final MemberRepository memberRepository;

    @Autowired
    public CustomOAuth2UserService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);
        //OAuth 사용자 정보 로드

        try {
            //사용자 정보 처리 후 oAuth2User 객체 반환
            return processOAuth2User(oAuth2UserRequest, oAuth2User);
            //oAuth2UserRequest: OAuth 사용자 정보를 요청한 클라이언트 정보 포함한 객체
            //oAuth2User: OAuth 사용자 정보를 나타내는 객체
        } catch (AuthenticationException ex) {
            throw ex;
        } catch (Exception ex) {
            // Throwing an instance of AuthenticationException will trigger the OAuth2AuthenticationFailureHandler
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User) {
        OAuth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(oAuth2UserRequest.getClientRegistration().getRegistrationId(), oAuth2User.getAttributes());
        
        System.out.println("CustomOAuth2UserService---"+oAuth2User.getAttributes());
        System.out.println("CustomOAuth2UserService---"+oAuth2UserInfo.getName());
        System.out.println("CustomOAuth2UserService---"+oAuth2UserInfo.getImageUrl());
        System.out.println("CustomOAuth2UserService---"+oAuth2UserInfo.getEmail());
        
        if(StringUtils.isEmpty(oAuth2UserInfo.getEmail())) { //이메일이 비어있는 경우
            throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
        }

        //이메일로 사용자 조회
        Optional<Member> userOptional = memberRepository.findByEmail(oAuth2UserInfo.getEmail());
        Member member;
        if(userOptional.isPresent()) {
            //사용자가 이미 존재하는 경우
            member = userOptional.get();
            if(!member.getProvider().equals(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()))) {
                throw new OAuth2AuthenticationProcessingException("Looks like you're signed up with " +
                        member.getProvider() + " account. Please use your " + member.getProvider() +
                        " account to login.");
            }
            //사용자 정보 업데이트
            member = updateExistingUser(member, oAuth2UserInfo);
            System.out.println("CustomOAuth2UserService---update"+ member);
        } else {
            //사용자가 존재하지 않는 경우, 새로운 사용자로 등록
            member = registerNewUser(oAuth2UserRequest, oAuth2UserInfo);
            System.out.println("CustomOAuth2UserService---new"+ member);
        }

        //UserPrincipal 객체 생성하여 반환
        return UserPrincipal.create(member, oAuth2User.getAttributes());
    }

    private Member registerNewUser(OAuth2UserRequest oAuth2UserRequest, OAuth2UserInfo oAuth2UserInfo) {
        Member member = new Member();

        //사용자 정보 설정
        member.setProvider(AuthProvider.valueOf(oAuth2UserRequest.getClientRegistration().getRegistrationId()));
        member.setProviderId(oAuth2UserInfo.getId());
        member.setName(oAuth2UserInfo.getName());
        member.setEmail(oAuth2UserInfo.getEmail());
        member.setImageUrl(oAuth2UserInfo.getImageUrl());
        return memberRepository.save(member); //사용자 저장하고 반환
    }

    private Member updateExistingUser(Member existingMember, OAuth2UserInfo oAuth2UserInfo) {
        //기존 사용자의 정보 업데이트
        existingMember.setName(oAuth2UserInfo.getName());
        existingMember.setImageUrl(oAuth2UserInfo.getImageUrl());
        return memberRepository.save(existingMember); //사용자 저장하고 반환
    }

}
