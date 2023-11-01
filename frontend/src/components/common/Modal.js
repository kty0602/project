import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  width: 800px;
  height: 60%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-all;

  .scroll {
    padding-top: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .h2 {
    margin-left: 2rem;
  }
  .dt {
    width: 800px;
    height: 60px;
    background-color: ${palette.gray[2]};
    display: flex;
    align-items: center;
    padding-left: 2rem;
    border-top: 1px solid ${palette.gray[5]};
    border-bottom: 1px solid ${palette.gray[5]};;
  }
  .dd {
    width: 100%;
    display: flex;
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        li {
            margin-right: 5rem;
            width: 150px;
            white-space: nowrap;
      }
    }
  }
`;

const ModalButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;

const options1 = [
    { id: 0, label: '썬루프' },
    { id: 1, label: '제논라이트(HID)' },
    { id: 2, label: '알루미늄휠' },
    { id: 3, label: '전동접이식미러' },
    { id: 4, label: '주간주행등(DLR)' },
    { id: 5, label: '파노라마썬루프' },
    { id: 6, label: '루프랙' },
    { id: 7, label: 'LED리어램프' },
    { id: 8, label: '하이빔 어시스트' },
    { id: 9, label: '고스트 도어' },
    { id: 10, label: '클로징자동슬라이딩도어' },
    { id: 11, label: '전동사이드스탭' },
    { id: 12, label: '어댑티드헤드램프' },
  ];

  const options2 = [
    { id: 0, label: '열선시트' },
    { id: 1, label: '통풍시트' },
    { id: 2, label: '파워핸들' },
    { id: 3, label: '핸들 리모컨' },
    { id: 4, label: '가죽시트' },
    { id: 5, label: '운전석 전동시트' },
    { id: 6, label: '조수석 전동시트' },
    { id: 7, label: '뒷좌석 전동시트' },
    { id: 8, label: '메모리시트' },
    { id: 9, label: '안마시트' },
    { id: 10, label: '슈퍼비전계기판' },
    { id: 11, label: '패들시프트' },
    { id: 12, label: '하이패스' },
    { id: 13, label: '메모리시트(동승석)' },
    { id: 14, label: '열선시트(뒷좌석)' },
    { id: 15, label: '엠비언트라이트' },
    { id: 16, label: '워크인시트' },
    { id: 17, label: '전동햇빛가리개' },
    { id: 18, label: '통풍시트(동승석)' },
    { id: 19, label: '통풍시트(뒷좌석)' },
];

const options3 = [
    { id: 0, label: '후방감지센서' },
    { id: 1, label: '사이드&커튼에어백' },
    { id: 2, label: '운전석에어백' },
    { id: 3, label: '조수석에어백' },
    { id: 4, label: '후방카메라' },
    { id: 5, label: '어라운드뷰' },
    { id: 6, label: '블랙박스' },
    { id: 7, label: 'ABS' },
    { id: 8, label: 'ECSTCS' },
    { id: 9, label: '차체자세제어장치' },
    { id: 10, label: '차선이탈경보장치' },
    { id: 11, label: '도난경보기' },
    { id: 12, label: '타이어 공기압감지' },
    { id: 13, label: '무릎에어백' },
    { id: 14, label: '주차감지센서(전방)' },
    { id: 15, label: '전방카메라' },
    { id: 16, label: '자동긴급제동(AEB)' },
];

const options4 = [
    { id: 0, label: '스마트키' },
    { id: 1, label: '파워윈도우' },
    { id: 2, label: '자동도어잠금풀' },
    { id: 3, label: '오토에어컨' },
    { id: 4, label: '오토라이트' },
    { id: 5, label: '자동주차시스템' },
    { id: 6, label: '전자식파킹브레이크' },
    { id: 7, label: 'HUD' },
    { id: 8, label: 'ECM룸밀러' },
    { id: 9, label: '크루즈컨트롤' },
    { id: 10, label: '전동트렁크핸들' },
    { id: 11, label: '열선무선도어잠금장치' },
    { id: 12, label: '레인센서와이퍼' },
    { id: 13, label: '스탑앤고' },
    { id: 14, label: '무선충전' },
];

const options5 = [
    { id: 0, label: '내비게이션' },
    { id: 1, label: 'CD 플레이어' },
    { id: 2, label: 'CD 체인저' },
    { id: 3, label: 'AV 시스템' },
    { id: 4, label: 'MP3' },
    { id: 5, label: 'AUX' },
    { id: 6, label: 'USB' },
    { id: 7, label: '핸즈프리' },
    { id: 8, label: 'iPod 단자' },
    { id: 9, label: '뒷좌석 모니터' },
    { id: 10, label: '스마트폰 미러링' },
    { id: 11, label: '내비게이션 (비순정)' },
    { id: 12, label: '블루투스' },
];

const Modal = ({ isOpen, onClose, handleOptionCheck }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <h2 className='h2'>추가 옵션</h2>
        <div className='scroll'>
            <dt className='dt'><h3>외장</h3></dt>
            <dd className='dd'>
                <ul>
                    {options1.map((option) => (
                        <li key={option.id}>
                            <label>
                                {option.label}
                                <input type="checkbox"
                                       onChange={() => handleOptionCheck("options1", option.label)}
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </dd>
            <dt className='dt'><h3>내장</h3></dt>
            <dd className='dd'>
                <ul>
                    {options2.map((option) => (
                        <li key={option.id}>
                            <label>
                                {option.label}
                                <input type="checkbox"
                                       onChange={() => handleOptionCheck("options2", option.label)}
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </dd>
            <dt className='dt'><h3>안전</h3></dt>
            <dd className='dd'>
                <ul>
                    {options3.map((option) => (
                        <li key={option.id}>
                            <label>
                                {option.label}
                                <input type="checkbox"
                                       onChange={() => handleOptionCheck("options3", option.label)}
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </dd>
            <dt className='dt'><h3>편의</h3></dt>
            <dd className='dd'>
                <ul>
                    {options4.map((option) => (
                        <li key={option.id}>
                            <label>
                                {option.label}
                                <input type="checkbox"
                                       onChange={() => handleOptionCheck("options4", option.label)}
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </dd>
            <dt className='dt'><h3>멀티</h3></dt>
            <dd className='dd'>
                <ul>
                    {options5.map((option) => (
                        <li key={option.id}>
                            <label>
                                {option.label}
                                <input type="checkbox"
                                       onChange={() => handleOptionCheck("options5", option.label)}
                                />
                            </label>
                        </li>
                    ))}
                </ul>
            </dd>
        </div>
        <ModalButton onClick={onClose}>Close</ModalButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
