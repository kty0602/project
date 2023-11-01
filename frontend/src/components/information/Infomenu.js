import styled from 'styled-components';
import { useState } from 'react';
import '../Fonts/Font.css';
import '../information/information.css';

const InfomenuBlock = styled.div`
  width: 100%;
  padding: 1rem;
  background: white;
`;

const Infomenu = ({ onClick }) => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [activeIndex3, setActiveIndex3] = useState(null);

  const handleClick1 = (index) => {
    if (index === activeIndex1) {
      setActiveIndex1(null);
    } else {
      setActiveIndex1(index);
    }
  };

  const handleClick2 = (index) => {
    if (index === activeIndex2) {
      setActiveIndex2(null);
    } else {
      setActiveIndex2(index);
    }
  };

  const handleClick3 = (index) => {
    if (index === activeIndex3) {
      setActiveIndex3(null);
    } else {
      setActiveIndex3(index);
    }
  };

  return (
    <InfomenuBlock>
      <div className="box-container">
        <div className="box-text" onClick={() => handleClick1(0)}>
          자동차 정보
        </div>
        <div className={`InfoTagContent ${activeIndex1 === 0 ? 'active' : ''}`}>
          <div className="button-container">
            <button className="button" onClick={() => onClick('gasmileage')}>
              연비
            </button>
            <button className="button" onClick={() => onClick('oiltype')}>
              연료 종류
            </button>
            <button className="button" onClick={() => onClick('safe')}>
              안전 기능
            </button>
            <button
              className="button"
              style={{ width: 230 }}
              onClick={() => onClick('maintenance')}
            >
              유지보수 비용, 보증 기간
            </button>
            <button className="button" onClick={() => onClick('accident')}>
              사고 기록
            </button>
            <button className="button" onClick={() => onClick('carpart')}>
              부품
            </button>
          </div>
        </div>
      </div>
      <div className="box-container2">
        <div className="box-text2" onClick={() => handleClick2(0)}>
          자동차 보험
        </div>
        <div className={`InfoTagContent ${activeIndex2 === 0 ? 'active' : ''}`}>
          <div className="button-container">
            <button
              className="button2"
              style={{ height: 70 }}
              onClick={() => onClick('essential')}
            >
              자차보험(필수)
            </button>
            <button
              className="button2"
              style={{ height: 70 }}
              onClick={() => onClick('synthesis')}
            >
              종합보험(선택)
            </button>
            <button
              className="button2"
              style={{ height: 70 }}
              onClick={() => onClick('guard')}
            >
              지키미보험(선택)
            </button>
            <button
              className="button2"
              style={{ height: 70 }}
              onClick={() => onClick('nomal')}
            >
              일반보험(선택)
            </button>
            <button
              className="button2"
              style={{ height: 70 }}
              onClick={() => onClick('sale')}
            >
              할인보험(선택)
            </button>
            <button
              className="button2"
              style={{ height: 70 }}
              onClick={() => onClick('newcar')}
            >
              신차보험(선택)
            </button>
            <button
              className="button2"
              style={{ height: 70 }}
              onClick={() => onClick('oldcar')}
            >
              중고차보험(선택)
            </button>
          </div>
        </div>
      </div>
      <div className="box-container">
        <div className="box-text" onClick={() => handleClick3(0)}>
          자동차 옵션
        </div>
        <div className={`InfoTagContent ${activeIndex3 === 0 ? 'active' : ''}`}>
          <div className="button-container">
            <button className="button" onClick={() => onClick('external')}>
              외장 옵션
            </button>
            <button className="button" onClick={() => onClick('internal')}>
              내장 옵션
            </button>
            <button className="button" onClick={() => onClick('safe2')}>
              안전 옵션
            </button>
            <button className="button" onClick={() => onClick('conven')}>
              편의 옵션
            </button>
            <button className="button" onClick={() => onClick('multi')}>
              멀티 옵션
            </button>
          </div>
        </div>
      </div>
      <div className="box-container2" onClick={() => onClick('choose')}>
        <text className="box-text2">자동차 보험 추천</text>
      </div>
    </InfomenuBlock>
  );
};

export default Infomenu;