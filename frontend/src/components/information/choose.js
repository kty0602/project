import styled from "styled-components";
import { useState } from "react";
// 보험사 추천해주는 페이지

const ChooseBlock = styled.div`
    width:100%;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    padding: 1rem;
    background-color: white;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    .div1 {
        border-radius: 10px;
        border-width: 2px;
        border-style: solid;
        border-color: black;
        margin: auto;
        text-align: center;
        background-color: white;
    }
    .div2 {
        margin-top: 80px;
        margin-left: 368px;
        text-align: center;
        border-width: 2px;
        border-style: solid;
        border-color: black;
        width: 15%;
        border-radius: 10px;
        cursor: pointer;
        background-color: gray;
    }
    .div3 {
        border-radius: 10px;
        margin-top: 50px;
        border-width: 2px;
        border-style: solid;
        border-color: black;
        text-align: center;
        background-color: white;
    }
    .text {
        font-size: 20px;
        font-weight: 800;
    }
    .text2 {
        font-size: 50px;
        font-weight: 800;
    }
    .select {
        text-align: center;
        font-size: 20px;
    }
`

const Products = [
    {
        name: "메리츠화재",
        requirements: [
            { atype: "20대", value: 70.4 },
            { atype: "30대", value: 54.3 },
            { atype: "40대", value: 47.7 },
            { atype: "50대", value: 56.8 },
            { atype: "60대", value: 63.1 },
            { ctype: "경차", value: 46.7 },
            { ctype: "소형차", value: 56.5 },
            { ctype: "중형차", value: 59.1 },
            { ctype: "대형차", value: 71.6 },
            { ktype: "2000", value: 35 },
            { ktype: "3000", value: 35 },
            { ktype: "4000", value: 33 },
            { ktype: "5000", value: 33 },
            { ktype: "6000", value: 21 },
            { ktype: "7000", value: 21 },
            { ktype: "8000", value: 21 },
            { ktype: "9000", value: 21 },
            { ktype: "10000", value: 21 },
            { ktype: "12000", value: 15 },
            { ktype: "15000", value: 5 },
            { ktype: "17000", value: 2 },
            { ktype: "18000", value: 0 },
        ],
    },
    {
        name: "롯데손해보험",
        requirements: [
            { atype: "20대", value: 85.5 },
            { atype: "30대", value: 62.3 },
            { atype: "40대", value: 56.3 },
            { atype: "50대", value: 68.9 },
            { atype: "60대", value: 73.7 },
            { ctype: "경차", value: 58.6 },
            { ctype: "소형차", value: 69.2 },
            { ctype: "중형차", value: 67.9 },
            { ctype: "대형차", value: 81.6 },
            { ktype: "2000", value: 40 },
            { ktype: "3000", value: 35 },
            { ktype: "4000", value: 29 },
            { ktype: "5000", value: 29 },
            { ktype: "6000", value: 24 },
            { ktype: "7000", value: 24 },
            { ktype: "8000", value: 20 },
            { ktype: "9000", value: 20 },
            { ktype: "10000", value: 20 },
            { ktype: "12000", value: 10 },
            { ktype: "15000", value: 2 },
            { ktype: "17000", value: 0 },
            { ktype: "18000", value: 0 },
        ],
    },
    {
        name: "삼성화재",
        requirements: [
            { atype: "20대", value: 77.5 },
            { atype: "30대", value: 54.3 },
            { atype: "40대", value: 48.9 },
            { atype: "50대", value: 62.1 },
            { atype: "60대", value: 71.1 },
            { ctype: "경차", value: 53.4 },
            { ctype: "소형차", value: 62.3 },
            { ctype: "중형차", value: 64 },
            { ctype: "대형차", value: 71.4 },
            { ktype: "2000", value: 32 },
            { ktype: "3000", value: 32 },
            { ktype: "4000", value: 24 },
            { ktype: "5000", value: 24 },
            { ktype: "6000", value: 22 },
            { ktype: "7000", value: 22 },
            { tkype: "8000", value: 17 },
            { ktype: "9000", value: 17 },
            { ktype: "10000", value: 17 },
            { ktype: "12000", value: 4 },
            { ktype: "15000", value: 0 },
            { ktype: "17000", value: 0 },
            { ktype: "18000", value: 0 },
        ],
    },
    {
        name: "현대해상",
        requirements: [
            { atype: "20대", value: 84.1 },
            { atype: "30대", value: 61.5 },
            { atype: "40대", value: 54.4 },
            { atype: "50대", value: 64.1 },
            { atype: "60대", value: 71 },
            { ctype: "경차", value: 56.8 },
            { ctype: "소형차", value: 64.9 },
            { ctype: "중형차", value: 66 },
            { ctype: "대형차", value: 80.4 },
            { ktype: "2000", value: 33.5 },
            { ktype: "3000", value: 33.5 },
            { ktype: "4000", value: 28.5 },
            { ktype: "5000", value: 28.5 },
            { ktype: "6000", value: 23.5 },
            { ktype: "7000", value: 23.5 },
            { ktype: "8000", value: 20.5 },
            { ktype: "9000", value: 20.5 },
            { ktype: "10000", value: 20.5 },
            { ktype: "12000", value: 9 },
            { ktype: "15000", value: 7 },
            { ktype: "17000", value: 0 },
            { ktype: "18000", value: 0 },
        ],
    },
    {
        name: "KB손해보험",
        requirements: [
            { atype: "20대", value: 92.4 },
            { atype: "30대", value: 54.4 },
            { atype: "40대", value: 49.4 },
            { atype: "50대", value: 58.7 },
            { atype: "60대", value: 64.6 },
            { ctype: "경차", value: 51.6 },
            { ctype: "소형차", value: 63.1 },
            { ctype: "중형차", value: 64.8 },
            { ctype: "대형차", value: 76.1 },
            { ktype: "2000", value: 35 },
            { ktype: "3000", value: 30 },
            { ktype: "4000", value: 30 },
            { ktype: "5000", value: 26 },
            { ktype: "6000", value: 26 },
            { ktype: "7000", value: 20.5 },
            { ktype: "8000", value: 20.5 },
            { ktype: "9000", value: 17 },
            { ktype: "10000", value: 17 },
            { ktype: "12000", value: 6 },
            { ktype: "15000", value: 6 },
            { ktype: "17000", value: 0 },
            { ktype: "18000", value: 0 },
        ],
    },
    {
        name: "AXA손해보험",
        requirements: [
            { atype: "20대", value: 95.4 },
            { atype: "30대", value: 67.5 },
            { atype: "40대", value: 57.2 },
            { atype: "50대", value: 70.1 },
            { atype: "60대", value: 75.6 },
            { ctype: "경차", value: 64.8 },
            { ctype: "소형차", value: 73.9 },
            { ctype: "중형차", value: 73.4 },
            { ctype: "대형차", value: 80.7 },
            { ktype: "2000", value: 38.2 },
            { ktype: "3000", value: 31.5 },
            { ktype: "4000", value: 29.3 },
            { ktype: "5000", value: 29.3 },
            { ktype: "6000", value: 24.9 },
            { ktype: "7000", value: 24.9 },
            { ktype: "8000", value: 20.2 },
            { ktype: "9000", value: 20.2 },
            { ktype: "10000", value: 12.8 },
            { ktype: "12000", value: 12.8 },
            { ktype: "15000", value: 11.5 },
            { ktype: "17000", value: 2.3 },
            { ktype: "18000", value: 2.3 },
        ],
    },
    {
        name: "DB손해보험",
        requirements: [
            { atype: "20대", value: 71.6 },
            { atype: "30대", value: 53.9 },
            { atype: "40대", value: 50 },
            { atype: "50대", value: 59 },
            { atype: "60대", value: 66.2 },
            { ctype: "경차", value: 45.2 },
            { ctype: "소형차", value: 59.3 },
            { ctype: "중형차", value: 61.4 },
            { ctype: "대형차", value: 74.6 },
            { ktype: "2000", value: 32 },
            { ktype: "3000", value: 20 },
            { ktype: "4000", value: 20 },
            { ktype: "5000", value: 17 },
            { ktype: "6000", value: 17 },
            { ktype: "7000", value: 17 },
            { ktype: "8000", value: 14 },
            { ktype: "9000", value: 14 },
            { ktype: "10000", value: 14 },
            { ktype: "12000", value: 6 },
            { ktype: "15000", value: 6 },
            { ktype: "17000", value: 6 },
            { ktype: "18000", value: 6 },
        ],
    },
]


const Choose = () => {

    const [age, setAge] = useState("");
    const [car, setCar] = useState("");
    const [km, setKm] = useState("");

    const AgeChange = (e) => {
        setAge(e.target.value);
      };
    
      const CarChange = (e) => {
        setCar(e.target.value);
      };
    
      const KmChange = (e) => {
        setKm(e.target.value);
      };

    const Submit = (event) => {
        event.preventDefault();
        console.log(age);
        console.log(car);
        console.log(km);
      
        const selectedAge = age; // 선택된 나이
        const selectedCar = car; // 선택된 차종
        const selectedKm = km; // 선택된 주행거리
      
        const ageRecommend = [];
        const carRecommend = [];
        const kmRecommend = [];

        // 각각의 atype, ctype에 대한 가장 낮은, ktype에 대한 높은 value 값을 계산
        let AtypeValue = Infinity;
        let CtypeValue = Infinity;
        let KtypeValue = -Infinity;
        
        for (let i = 0; i < Products.length; i++) {
            const requirements = Products[i].requirements;
        
            for (let j = 0; j < requirements.length; j++) {
              const requirement = requirements[j];
        
              if (requirement.atype === selectedAge && requirement.value < AtypeValue) {
                AtypeValue = requirement.value;
              }
              if (requirement.ctype === selectedCar && requirement.value < CtypeValue) {
                CtypeValue = requirement.value;
              }
              if (requirement.ktype === selectedKm && requirement.value > KtypeValue) {
                KtypeValue = requirement.value;
              }
            }
        }

        // 각각의 요소별로 추천되는 보험사
        for (let i = 0; i < Products.length; i++) {
            const name = Products[i].name;
            const requirements = Products[i].requirements;
        
            for (let j = 0; j < requirements.length; j++) {
              const requirement = requirements[j];
                // 선택한 값과 일치하는 type 항목에서 계산된 최솟값에 해당하는 보험사 이름을 push
                if (requirement.atype === selectedAge) {
                    if (requirement.value === AtypeValue) {
                        ageRecommend.push(name);
                    }        
                }
                if (requirement.ctype === selectedCar) {
                    if (requirement.value === CtypeValue) {
                        carRecommend.push(name);
                    } 
                }
                if (requirement.ktype === selectedKm) {
                    if (requirement.value === KtypeValue) {
                        kmRecommend.push(name);
                    } 
                }
            }
        }

        
        // 가장 많이 언급된 보험사
        const combineRecommend = [
            ...ageRecommend,
            ...carRecommend,
            ...kmRecommend,
        ];
      
        // combineRecommend 객체를 순회하면서 각 보험사 이름이 몇번 언급되었는지 recommendCounts 객체에 저장
        // recommendCounts 객체에 보험사 이름이 존재 시 이름 값에 +1, 존재 X시 값을 1로 초기화
        const recommendCounts = {};
        for (let i=0; i<combineRecommend.length; i++) {
            const name = combineRecommend[i];
            if (recommendCounts[name]) {
                recommendCounts[name]++;
            } else {
                recommendCounts[name] = 1;
            }
        }

        let maxCount = -1;
        let recommend = [];
        for (const name in recommendCounts) {
            const count = recommendCounts[name];
            if (count > maxCount) {     // maxCount 값 갱신
                maxCount = count;
                recommend = [name];     // recommend 배열에 보험사 이름을 배열로 저장
            }                           // 배열로 저장하는 이유: 각각의 옵션에서 각기 다른 보험사를 추천할 수 있어서
            else if (count === maxCount) { 
                recommend.push(name);   // 배열에 이미 보험사 이름이 존재하는 경우 push로 추가
            }
        }

        if(recommend.length === 3) {
            if(AtypeValue < CtypeValue) {
                recommend = ageRecommend;
            }
            else {
                recommend = carRecommend;
            }
        }

        // 확인용
        console.log(recommendCounts);   
        console.log(ageRecommend);
        console.log(carRecommend);
        console.log(kmRecommend);
        console.log(recommend);

        // recommend값이 null이 아닌 경우/ 선택 옵션을 선택 안하고 제출 누르는 경우 고려
        if (!!recommend) {  
            const div3 = document.querySelector('.div3'); // .div3 클래스를 가진 요소 선택
            const textElements = div3.querySelectorAll('text'); // div3 요소의 모든 text 요소 선택

            // 추천하는 보험사 텍스트 노드 교체
            textElements[1].textContent = ageRecommend;
            textElements[3].textContent = carRecommend;
            textElements[5].textContent = kmRecommend;
            textElements[7].textContent = recommend;
        }
    }
        
    
    return(
        <ChooseBlock>
            <div className="div1">
                <text className="text2">보험사 추천</text>
                <br/><br/><br/><br/>
                <text className="text">나이를 선택하세요: </text>
                <select className="select" onChange={AgeChange}>
                    <option>선택</option>
			        <option key="20대" value="20대">20~29세</option>
			        <option key="30대" value="30대">30~39세</option>
			        <option key="40대" value="40대">40~49세</option>
                    <option key="50대" value="50대">50~59세</option>
                    <option key="60대" value="60대">60~69세</option>
		        </select>
                <br/><br/><br/>
                <text className="text">차종을 선택하세요: </text>
                <select className="select" onChange={CarChange}>
                    <option>선택</option>
			        <option key="경차" value="경차">경  차</option>
			        <option key="소형차" value="소형차">소 형 차</option>
			        <option key="중형차" value="중형차">중 형 차</option>
                    <option key="대형차" value="대형차">대 형 차</option>
		        </select>
                <br/><br/><br/>
                <text className="text">주행거리를 선택하세요: </text>
                <select className="select" onChange={KmChange}>
                    <option>선택</option>
			        <option key="2000km" value="2000">2000km이하</option>
			        <option key="3000km" value="3000">2001km~3000km이하</option>
			        <option key="4000km" value="4000">3001km~4000km이하</option>
                    <option key="5000km" value="5000">4001km~5000km이하</option>
                    <option key="6000km" value="6000">5001km~6000km이하</option>
                    <option key="7000km" value="7000">6001km~7000km이하</option>
			        <option key="8000km" value="8000">7001km~8000km이하</option>
			        <option key="9000km" value="9000">8001km~9000km이하</option>
                    <option key="10000km" value="10000">9001km~10000km이하</option>
                    <option key="12000km" value="12000">10001km~12000km이하</option>
                    <option key="15000km" value="14000">12001km~15000km이하</option>
			        <option key="17000km" value="16000">15001km~17000km이하</option>
			        <option key="18000km" value="18000">17001km이상</option>
		        </select>
                <br/>
                <div className="div2" onClick={(event) => Submit(event)}>
                    <text className="text">제출하기</text>
                </div>
                <br/><br/>
            </div>
            <div className="div3">
                <br/><br/>
                <text className="text">나이로 추천하는 보험사</text>
                <br/><br/>
                <text>추천하는 보험사</text>
                <br/><br/>
                <text className="text">차종으로 추천하는 보험사</text>
                <br/><br/>
                <text>추천하는 보험사</text>
                <br/><br/>
                <text className="text">주행거리로 추천하는 보험사</text>
                <br/><br/>
                <text>추천하는 보험사</text>
                <br/><br/>
                <text className="text">종합적으로 추천하는 보험사</text>
                <br/><br/>
                <text>추천하는 보험사</text>
                <br/><br/><br/>
            </div>
        </ChooseBlock>
    )
}

export default Choose;