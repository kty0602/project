import styled from "styled-components";


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
                <text className="text">안전 옵션</text>
                <hr/>
                <ol>
                    <li className="li_list">후방감지센서</li>
                        <ul className="ul_list">주차할 때 주위의 물체를 감지하여 알려주는 시스템</ul>
                    <li className="li_list">사이드&커튼에어백</li>
                        <ul className="ul_list">측면 충돌 시에도 안전을 보호하기 위해 설치된 에어백 시스템</ul>
                    <li className="li_list">운전석에어백</li>
                        <ul className="ul_list">운전자의 안전을 보호하기 위해 설치된 에어백 시스템</ul>
                    <li className="li_list">조수석에어백</li>
                        <ul className="ul_list">조수석 승객의 안전을 보호하기 위해 설치된 에어백 시스템</ul>
                    <li className="li_list">후방카메라</li>
                        <ul className="ul_list">후방에 설치된 카메라를 통해 주행 중 주위 환경을 볼 수 있는 시스템</ul>
                    <li className="li_list">어라운드뷰</li>
                        <ul className="ul_list">주행 중 차량의 주위를 360도로 볼 수 있는 시스템</ul>
                    <li className="li_list">블랙박스</li>
                        <ul className="ul_list">주행 중 차량 내부 및 주위 환경을 녹화하는 시스템</ul>
                    <li className="li_list">ABS</li>
                        <ul className="ul_list">급제동 시 차량의 브레이크를 잠그지 않고 제동 거리를 줄이는 제동 시스템</ul>
                    <li className="li_list">ECS</li>
                        <ul className="ul_list">주행 중 차량의 방향 안정성을 유지하기 위한 시스템</ul>
                    <li className="li_list">TCS</li>
                        <ul className="ul_list">트랙션(바퀴와 지면 사이의 마찰력)을 제어하여 주행 안전성을 유지하는 시스템</ul>
                    <li className="li_list">차체자세제어장치</li>
                        <ul className="ul_list">주행 중 차량의 안정성과 편안한 운전을 위해 차체 자세를 자동으로 조절하는 시스템</ul>
                    <li className="li_list">차선이탈경보장치</li>
                        <ul className="ul_list">주행 중 차선을 이탈할 경우 운전자에게 경고음이 울리는 시스템</ul>
                    <li className="li_list">도난경보기</li>
                        <ul className="ul_list">자동차가 도난당할 경우 경보음과 함께 경고등이 작동하여 주인이 인지할 수 있도록 한다.</ul>
                    <li className="li_list">타이어 공기압감지</li>
                        <ul className="ul_list">타이어에 부착된 센서가 타이어 내부의 공기압을 감지하여 주행 중 타이어가 바람이 나가는 것을 
                        감지하면 경고음과 함께 경고등이 켜져 운전자에게 알린다.</ul>
                    <li className="li_list">무릎에어백</li>
                        <ul className="ul_list">운전자 무릎 부분에 부착된 에어백으로, 
                        사고 발생 시 운전자가 차체 밑부분으로 떨어지는 것을 방지하여 안전성을 높인다.</ul>
                    <li className="li_list">주차감지센서(전방)</li>
                        <ul className="ul_list">전방에 부착된 센서가 주변 상황을 감지하여 주차 중 전방에서 장애물과의 거리를 측정하고, 
                        거리가 가까워지면 경고음과 함께 경고등이 켜져 운전자에게 알린다.</ul>
                    <li className="li_list">전방카메라</li>
                        <ul className="ul_list">전방에 부착된 카메라로 주행 중 전방 상황을 실시간으로 인식하여, 
                        차선 유지 및 자동 긴급 제동 시스템 등과 함께 사용되어 운전자의 안전성을 높인다.</ul>
                    <li className="li_list">자동긴급제동(AEB)</li>
                        <ul className="ul_list">전방에 부착된 레이더나 카메라 등의 센서가 주변 상황을 감지하여, 
                        위험한 상황이나 충돌 가능성이 높아지면 차량이 자동으로 긴급 제동을 하는 시스템으로 운전자의 안전성을 높인다.</ul>
                </ol>
            </div>
        </SafeBlock>
    )
}

export default safe;