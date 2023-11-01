import styled from "styled-components";
// 안전 기능에 관한 페이지

const SafeBlock = styled.div`
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
    .lili {
        margin: 10px;
        margin-top: 20px;
        font-size:15px;
        font-weight: 800;
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

const safe = () => {
    return(
        <SafeBlock>
            <div>
                <text className="text">안전 기능</text>
                <hr/>
                <li className="lili">각 제조사들이 갖춘 안전 기능은 제조사별로 차이가 있지만 일부 대표적 안전 기능들을 알아보겠습니다.</li>
                <ol>
                    <li className="li_list">현대 자동차</li>
                        <ul className="ul_list">스마트센스(SmartSense) : AEB, LKA, BSD 등의 안전 기능을 통합한 패키지</ul>
                        <ul className="ul_list">RSPA (Rear Seat Passenger Alert) : 후측면 문이 열린 상태에서 후좌석에 아이나 
                        반려동물이 있는 경우 경고 알림</ul>
                        <ul className="ul_list">HDC (Hill-Start Assist Control) : 경사면에서의 출발을 보조하여 안정적인 주행을 돕는 기능</ul>
                    <li className="li_list">기아 자동차</li>
                        <ul className="ul_list">ADAS (Advanced Driver Assistance System) : 차량 주변의 상황을 감지하고 위험한 상황을
                        예측하여 운전자에게 경고를 주는 시스템</ul>
                        <ul className="ul_list">DAW (Driver Attention Warning) : 운전자의 졸음 운전을 감지하고 경고 알림을 주는 시스템</ul>
                        <ul className="ul_list">AVSM (Advanced Vehicle Safety Management) : 차량 안전성 평가를 위한 시스템</ul>
                    <li className="li_list">삼성 자동차</li>
                        <ul className="ul_list">FCA (Forward Collision Avoidance) : 차량 주변의 상황을 감지하여 위험한 상황이 발생할 경우 
                        자동으로 긴급 제동을 하는 시스템</ul>
                        <ul className="ul_list">LCA (Lane Change Assist) : 차량 주변의 상황을 감지하여 차선 변경 시 경고 알림을 주는 시스템</ul>
                        <ul className="ul_list">TJA (Traffic Jam Assist) : 교통 체증 상황에서 차간 거리 유지와 속도 조절을 자동으로 
                        수행하는 시스템</ul>
                    <li className="li_list">쉐보레</li>
                        <ul className="ul_list">Teen Driver : 운전자의 운전습관을 분석하여 주행 중 위험한 상황이 발생할 경우 경고 알림을 
                        주는 시스템</ul>
                        <ul className="ul_list">Lane Keep Assist with Lane Departure Warning : 차선 이탈 시 운전자에게 
                        경고 알림을 주고 차선으로 돌아오도록 도와주는 시스템</ul>
                        <ul className="ul_list">Rear Vision Camera : 후방 카메라를 통해 차량 주변 상황을 모니터링하는 시스템</ul>
                </ol>
            </div>
        </SafeBlock>
    )
}

export default safe;