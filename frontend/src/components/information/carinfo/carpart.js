import styled from "styled-components";
// 부품에 관한 페이지

const CarpartBlock = styled.div`
    width:100%;
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
    border-radius: 20px;
    border-width: 1px;
    border-style: solid;
    padding: 1rem;
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

const carpart = () => {
    return(
        <CarpartBlock>
            <div>
                <text className="text">부품</text>
                <hr/>
                <ol>
                    <li className="li_list">엔진</li>
                        <ul className="ul_list">차량의 핵심적인 부품으로서 연료를 연소하여 움직임을 만들어냅니다.</ul>
                    <li className="li_list">변속기</li>
                        <ul className="ul_list">차량의 속도를 조절하거나 후진 기어를 사용하는 등의 기능을 합니다.</ul>
                    <li className="li_list">브레이크</li>
                        <ul className="ul_list">차량을 정지시키는 기능을 하며, 디스크 브레이크와 드럼 브레이크로 나뉩니다.</ul>      
                    <li className="li_list">서스펜션</li>
                        <ul className="ul_list">차량의 진동을 흡수하고 안정감을 제공하는 역할을 합니다.</ul>
                    <li className="li_list">스티어링</li>
                        <ul className="ul_list">운전자가 핸들을 조작하여 바퀴를 회전시키는 기능을 합니다.</ul>   
                    <li className="li_list">배터리</li>
                        <ul className="ul_list">차량의 전기를 공급하는 기능을 합니다.</ul>   
                    <li className="li_list">라이트</li>
                        <ul className="ul_list">차량의 야간 주행 시, 비전을 제공하는 기능을 합니다.</ul>
                    <li className="li_list">에어컨</li>
                        <ul className="ul_list">차량 내부의 온도와 습도를 조절하는 기능을 합니다.</ul>
                    <li className="li_list">오디오 시스템</li>
                        <ul className="ul_list">차량 내에서 음악을 재생하거나 라디오를 수신하는 등의 기능을 합니다.</ul>
                    <li className="li_list">타이어</li>
                        <ul className="ul_list">차량이 지면과 접촉하는 부분으로서, 주행 안전성과 안정성에 큰 영향을 미칩니다.</ul>
                    <li className="li_list">와이퍼 블레이드</li>
                        <ul className="ul_list">비나 눈의 영향을 최소화하여 운전자의 시야를 보호하는 역할을 합니다.</ul>
                    <li className="li_list">엔진 오일</li>
                        <ul className="ul_list">엔진 내부를 윤활하고, 엔진 부품들의 마찰을 감소시켜 성능을 최적화합니다. 엔진 수명을 연장시키는 역할을 합니다.</ul>
                    <li className="li_list">냉각수</li>
                        <ul className="ul_list">엔진 내부를 냉각하여 과열을 방지하고, 엔진 부품들의 수명을 연장시킵니다.</ul>
                    <li className="li_list">브레이크 패드</li>
                        <ul className="ul_list">브레이크 디스크나 드럼과 마찰하여 차량을 정지시키는 기능을 합니다.</ul>
                    <li className="li_list">스파크 플러그</li>
                        <ul className="ul_list">연료를 연소시키는데 필요한 화력을 제공하여 엔진의 움직임을 돕습니다.</ul>
                    <li className="li_list">인테리어 트림</li>
                        <ul className="ul_list">차량 내부의 인테리어를 장식하는 역할을 합니다.</ul>
                    <li className="li_list">외장 트림</li>
                        <ul className="ul_list">차량 외부의 디자인을 꾸며주는 역할을 합니다.</ul>
                    <li className="li_list">전조등</li>
                        <ul className="ul_list">차량의 앞쪽에 설치되어 주행 중 야간에 도로 상황을 인지할 수 있게 해줍니다.</ul>
                    <li className="li_list">후미등</li>
                        <ul className="ul_list">차량의 뒷쪽에 설치되어 주행 중 후진이나 정지 신호를 제공합니다.</ul>
                    <li className="li_list">에어백</li>
                        <ul className="ul_list">충격이나 사고 시 운전자와 승객을 보호하는 역할을 합니다.</ul>
                    <li className="li_list">카메라와 센서</li>
                        <ul className="ul_list">주행 중 주변 환경을 감지하고, 운전자에게 경고하거나 자동으로 조작하는 등의 기능을 합니다.</ul>
                    <li className="li_list">스티어링 시스템</li>
                        <ul className="ul_list">차량을 운전할 때 바퀴의 방향을 제어하며, 운전자의 조작에 따라 바퀴를 회전시키는 기능을 합니다.</ul>
                    <li className="li_list">엑스헤드 램프</li>
                        <ul className="ul_list">차량의 전면에 위치한 대형 헤드램프로, 좁은 길을 주행할 때 좌우의 탁한 곳을 비추어 운전자의 시야를 확보합니다.</ul>
                    <li className="li_list">클러치</li>
                        <ul className="ul_list">변속기와 엔진을 연결하여 차량을 가속, 감속 또는 정지시키는데 사용됩니다.</ul>
                    <li className="li_list">터보 차저</li>
                        <ul className="ul_list">엔진의 성능을 향상시켜 가속력을 향상시키는데 사용되며, 대형차나 스포츠카 등 고성능 차량에 장착됩니다.</ul>
                    <li className="li_list">코일 스프링</li>
                        <ul className="ul_list">차량의 서스펜션에서 사용되며, 타이어와 차체 간의 충격을 완충하고 차량의 안정성을 높이는 역할을 합니다.</ul>
                    <li className="li_list">윈도우 레귤레이터</li>
                        <ul className="ul_list">차량의 창문을 개방, 폐쇄할 수 있는 기능을 제공합니다.</ul>
                </ol>
            </div>
        </CarpartBlock>
    )
}

export default carpart;