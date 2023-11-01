import Infomenu from './Infomenu';
import { useState, useRef } from 'react';

import Choose from './choose';

// 자동차 정보 페이지들
import Gasmileage from './carinfo/gasmileage'; // 연비 페이지
import Oiltype from './carinfo/oiltype'; // 연료 타입 페이지
import Safe from './carinfo/safe'; // 안전 기능 페이지
import Maintenance from './carinfo/maintenance'; // 유지보수, 보증기간 페이지
import Accident from './carinfo/accident'; // 사고기록 페이지
import Carpart from './carinfo/carpart'; // 부품 페이지

// 자동차 보험 페이지들
import Essential from './carinsurance/essential'; // 자동차 자차 보험 페이지
import Synthesis from './carinsurance/synthesis'; // 자동차 종합 보험 페이지
import Guard from './carinsurance/guard'; // 자동차 지키미 보험 페이지
import Nomal from './carinsurance/normal'; // 자동차 일반 보험 페이지
import Sale from './carinsurance/sale'; // 자동차 할인 보험 페이지
import Newcar from './carinsurance/newcar'; // 자동차 신차 보험 페이지
import Oldcar from './carinsurance/oldcar'; // 자동차 중고차 보험 페이지

// 자동차 옵션 페이지들
import External from './options/External'; // 외장 옵션 페이지
import Internal from './options/Internal'; // 내장 옵션 페이지
import Safe2 from './options/Safe'; // 안전 옵션 페이지
import Conven from './options/Conven'; // 편의 옵션 페이지
import Multi from './options/Multi'; // 멀티 옵션 페이지

const Infosearch = () => {
  const [selectedPage, setSelectedPage] = useState('');
  const ref = useRef(null); // 스크롤할 요소에 대한 Ref 생성

  const PageSelect = (pageName) => {
    setSelectedPage(pageName);

    // 스크롤 기능 추가
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      <Infomenu onClick={PageSelect} />
      <div className="contents-block" ref={ref}>
        {/* 스크롤 대상 요소에 Ref 적용 */}
        {selectedPage === 'gasmileage' && <Gasmileage />}
        {selectedPage === 'oiltype' && <Oiltype />}
        {selectedPage === 'safe' && <Safe />}
        {selectedPage === 'maintenance' && <Maintenance />}
        {selectedPage === 'accident' && <Accident />}
        {selectedPage === 'carpart' && <Carpart />}
        {selectedPage === 'essential' && <Essential />}
        {selectedPage === 'synthesis' && <Synthesis />}
        {selectedPage === 'guard' && <Guard />}
        {selectedPage === 'nomal' && <Nomal />}
        {selectedPage === 'sale' && <Sale />}
        {selectedPage === 'newcar' && <Newcar />}
        {selectedPage === 'oldcar' && <Oldcar />}
        {selectedPage === 'choose' && <Choose />}
        {selectedPage === 'external' && <External />}
        {selectedPage === 'internal' && <Internal />}
        {selectedPage === 'safe2' && <Safe2 />}
        {selectedPage === 'conven' && <Conven />}
        {selectedPage === 'multi' && <Multi />}
      </div>
    </div>
  );
};

export default Infosearch;