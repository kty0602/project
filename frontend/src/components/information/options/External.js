import styled from "styled-components";
// 외장 옵션 페이지

const ExternBlock = styled.div`
    width:100%;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    padding: 1rem;
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    background-color: white;
    .text {
        font-size: 60px;
        margin-left: 15px;
    }
    .li_list {
        font-size: 22px;
        font-weight: 800;
        margin: 30px;
        margin-top: 50px;
    }
    .ul_list {
        margin: 30px;
        font-size:15px;
        font-weight: 800;
    }
`

const external = () => {
    return(
        <ExternBlock>
            <div>
                <text className="text">외장 옵션</text>
                <hr/>
                <ol>
                    <li className="li_list">썬루프</li>
                        <ul className="ul_list">자동차의 차량 위쪽 부분에 구멍을 
                        내어 통풍과 햇빛 등을 통해 차 안을 환기시키고 더욱 밝은 분위기를 연출하는 옵션</ul>
                    <li className="li_list">제논라이트(HID)</li>
                        <ul className="ul_list">일반적인 핼로겐 램프보다 밝고 더 넓은 범위에 
                        빛을 비추는 제논 기술을 적용한 램프</ul>
                    <li className="li_list">알루미늄휠</li>
                        <ul className="ul_list">경량화된 알루미늄으로 만들어져 차량의 가중치를 줄이고 
                        디자인적인 면에서도 다양한 선택지를 제공하는 외장 옵션</ul>
                    <li className="li_list">전동접이식미러</li>
                        <ul className="ul_list">차량 주행 시 전동으로 접어서 보호하는 기능을 가진 미러</ul>
                    <li className="li_list">주간주행등(DLR)</li>
                        <ul className="ul_list">차량의 앞부분에 위치한 조명으로 주행 시 시야를 확보하고 차량 운행 안전성을 높이는 옵션</ul>
                    <li className="li_list">파노라마루프</li>
                        <ul className="ul_list">차량 상단 부분의 큰 면적을 유리로 구성해 자연광을 최대한 살리면서 쾌적한 차내환경을 제공하는 옵션</ul>
                    <li className="li_list">루프랙</li>
                        <ul className="ul_list">차량의 위쪽에 위치한 바닥면과 복합재료로 만들어진 가벼운 철골 구조물로써 차량 위에 
                        다양한 물건을 부착할 수 있도록 도와주는 옵션</ul>
                    <li className="li_list">LED리어램프</li>
                        <ul className="ul_list"> LED 기술을 적용한 차량 후면 조명으로, 기존의 램프에 비해 밝고 선명한 빛을 제공하며, 
                        에너지 효율성과 수명도 높은 편</ul>
                    <li className="li_list">하이빔 어시스트</li>
                        <ul className="ul_list">차량이 주행 중에 상황에 따라 자동으로 높낮이를 조절하여 주행 안전성을 높이는 옵션</ul>
                    <li className="li_list">고스트 도어 클로징</li>
                        <ul className="ul_list">차량 문이 자동으로 닫히는 기능을 가진 옵션</ul>
                    <li className="li_list">자동슬라이딩도어</li>
                        <ul className="ul_list">차량의 문이 자동으로 열리고 닫히는 기능을 가진 외장 옵션</ul>
                    <li className="li_list">전동사이드스탭</li>
                        <ul className="ul_list">차량의 외부에 설치된 사이드 스텝 중 하나로, 문이 열릴 때 자동으로 나와 탑승이나 하차를 돕는 기능을 가진 옵션</ul>
                    <li className="li_list">어댑티드헤드램프</li>
                        <ul className="ul_list">주행 중 조향각, 차량 속도, 기타 주행 조건에 따라 라이트의 방향과 강도를 자동으로 조절하여 보다 효율적인 조명을 제공하는 기술</ul>
                </ol>
            </div>
        </ExternBlock>
    )
}

export default external;