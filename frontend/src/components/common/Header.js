import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import '../Fonts/Font.css';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 2;
`;

/**메뉴안의 ul,li 스타일 */
const Menu = styled.ul`
  list-style: none;
  align-items: center;
  height: 100%;
  padding: 1rem;
  .text-menu {
    font-family: 'Medium';
    display: inline;
    margin: 2rem;
    margin-bottom: 0.5rem;
    background: white;
    .text {
      /* font-size: 20px; */
      /* font-weight: 800; */
      &:hover {
        color: orange;
      }
    }
  }
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  width: 1280px;
  .menu {
    width: 900px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 180px;
    font-family: Bold;
    font-size: 1.125rem;
    letter-spacing: 2px;
  }
  .right {
    font-family: Bold;
    color: #ffffff;
    width: 200px;
    display: flex;
    align-items: center;
  }
`;

/**  헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트 */
const Spacer = styled.div`
  height: 4rem;
`;

/** 사용자의 이름을 담는 컴포넌트 */
const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
  color : black;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to='/' className="logo">
            중고차 사이트
          </Link>
          <div className="menu">
            <Menu>
              <li className="text-menu">
                <a href="/carsearch" className="text">
                  차량검색
                </a>
              </li>
              <li className="text-menu">
                <a href="/reco" className="text">
                  차량추천
                </a>
              </li>
              <li className="text-menu">
                <a href="/recall" className="text">
                  리콜분석
                </a>
              </li>
              <li className="text-menu">
                <a href="/Information" className="text">
                  자동차정보
                </a>
              </li>
              <li className="text-menu">
                <a href="/boardlist" className="text">
                  커뮤니티
                </a>
              </li>
            </Menu>
          </div>
          {user ? (
            <div className="right">
              <UserInfo>{user.name}</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
