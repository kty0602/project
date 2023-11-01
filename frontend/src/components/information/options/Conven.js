import styled from "styled-components";

const ConvenBlock = styled.div`
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

const conven = () => {
    return(
        <ConvenBlock>
            <div>
                <text className="text">편의 옵션</text>
                <hr/>
                <ol>
                    <li className="li_list">스마트키</li>
                        <ul className="ul_list">차량 문을 열고 닫거나 시동을 걸 때 열쇠 없이 원격으로 제어 가능한 기능</ul>
                    <li className="li_list">파워윈도우</li>
                        <ul className="ul_list">전동으로 창문을 열고 닫는 기능</ul>
                    <li className="li_list">자동도어잠금</li>
                        <ul className="ul_list">차량이 주행을 시작하면 자동으로 문이 잠금되는 기능</ul>
                    <li className="li_list">풀오토에어컨</li>
                        <ul className="ul_list">설정한 온도와 습도를 유지하며 자동으로 작동하는 에어컨 시스템</ul>
                    <li className="li_list">오토라이트</li>
                        <ul className="ul_list">차량 주행 시 밤에 자동으로 라이트가 켜지는 기능</ul>
                    <li className="li_list">자동주차시스템</li>
                        <ul className="ul_list">주차 공간을 인식하고, 자동으로 주차하는 기능</ul>
                    <li className="li_list">전자식파킹브레이크</li>
                        <ul className="ul_list">브레이크 페달 없이 버튼으로 브레이크를 조작하는 기능</ul>
                    <li className="li_list">HUD</li>
                        <ul className="ul_list">차량 운전자가 필요한 정보를 앞 유리에 투영하여 운전 중 시선 이동을 최소화하는 시스템</ul>
                    <li className="li_list">ECM룸밀러</li>
                        <ul className="ul_list">룸미러에 카메라가 장착되어 후방 상황을 모니터링하여 운전자에게 알려주는 시스템</ul>
                    <li className="li_list">크루즈컨트롤</li>
                        <ul className="ul_list">설정한 속도를 일정하게 유지하는 기능</ul>
                    <li className="li_list">전동트렁크</li>
                        <ul className="ul_list">전동 모터로 트렁크를 열고 닫는 기능</ul>
                    <li className="li_list">핸들열선</li>
                        <ul className="ul_list">핸들 내부에 열선이 내장되어 차량 내부가 춥거나 습할 때, 핸들을 따뜻하게 만들어주는 기능</ul>
                    <li className="li_list">무선도어 잠금장치</li>
                        <ul className="ul_list">블루투스나 스마트폰 앱을 이용하여 차량 문을 원격으로 잠그고 열 수 있는 기능</ul>
                    <li className="li_list">레인센서와이퍼</li>
                        <ul className="ul_list">레인센서가 비나 눈을 감지하면 자동으로 와이퍼가 작동하여 창문을 깨끗하게 만드는 기능</ul>
                    <li className="li_list">스탑앤고</li>
                        <ul className="ul_list">주행 중 일시 정지 시 일정 시간 이후에 자동으로 시동을 끄고, 주행을 재개할 때 다시 시동이 걸리는 기능</ul>
                    <li className="li_list">무선충전</li>
                        <ul className="ul_list">스마트폰을 무선으로 충전하는 기능</ul>
                </ol>
            </div>
        </ConvenBlock>
    )
}

export default conven;