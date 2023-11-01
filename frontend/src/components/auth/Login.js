import React from 'react';
import './Login.css';
import { GOOGLE_AUTH_URL, KAKAO_AUTH_URL, NAVER_AUTH_URL } from '../../lib/api/OAuth';
import { Link } from 'react-router-dom';
import googleLogo from '../../lib/image/google-logo.png';
import kakaoLogo from '../../lib/image/kakao-logo.png';
import naverLogo from '../../lib/image/naver-logo.png';

const SocialLogin = () => {
  return (
    <div className="social-login">
      <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
        <img src={googleLogo} alt="Google"/> 구글 로그인
      </a>
      <a className="btn btn-block social-btn kakao" href={KAKAO_AUTH_URL}>
        <img src={kakaoLogo} alt="KaKao"/> 카카오 로그인
      </a>
      <a className="btn btn-block social-btn naver" href={NAVER_AUTH_URL}>
        <img src={naverLogo} alt="Naver"/> 네이버 로그인
      </a>
    </div>
  );
}

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">로그인</h1>
        <SocialLogin />
        <div className="or-separator">
          <span className="or-text">OR</span>
        </div>
        <span className="signup-link">사이트가 처음인가요? <Link to="/register"> 회원가입</Link></span>
      </div>
    </div>
  );
}

export default Login;
