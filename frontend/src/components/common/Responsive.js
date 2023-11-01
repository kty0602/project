import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin: 0 auto; /* 중앙 정렬 */

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1920px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

/** 화면 크기조정에 따라서 크기가 바뀌는 함수*/
const Responsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // ...rest를 사용하여 ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;