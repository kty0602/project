import styled from "styled-components";
// 유지보수, 보증기간에 관한 페이지

const MaintenanceBlock = styled.div`
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
    .text2 {
        font-size: 60px;
        margin-left: 15px;
    }
    .lili {
        margin: 10px;
        margin-top: 20px;
        font-size: 15px;
        font-weight: 800;
    }
    .lili2 {
        margin: 10px;
        margin-top: 50px;
        font-size: 15px;
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
    .div {
        margin-top: 80px;
    }
`



const maintenance = () => {
    return(
        <MaintenanceBlock>
            <div>
                <text className="text">유지보수</text>
                <hr/>
                <ul>
                    <li className="lili">차량을 운행하면서 필요햔 유지보수와 수리 비용을 의미합니다.</li>
                    <li className="lili">유지보수 비용에는 정기적인 점검 및 교체가 필요한 부품들의 비용, 예를 들면 엔진오일, 
                    브레이크 패드, 에어 필터 등이 포함됩니다. 또한, 차량의 연료, 타이어, 브레이크 등의 소모품들의 교체 비용도 
                    유지보수 비용에 포함됩니다.</li>
                </ul>
            </div>    
            <div className="div">
                <text className="text2">보증기간</text>
                <ul>
                    <li className="lili">제조사에서 제공하는 기간 동안 차량의 일부 부품 및 기능의 수리 또는 교체를 무상으로 해주는 서비스입니다.</li>
                    <li className="lili">일반적으로 보증 기간은 3~5년 사이이며, 주행거리에 따라 제한이 있을 수 있습니다.</li>
                    <li className="lili">제조사마다 보증 기간은 다르며 보통 엔진, 변속기, 브레이크, 
                    서스펜션 등과 같은 중요한 부품 기능에 대한 보증이 포함됩니다.</li>
                    <li className="lili2">다음은 각 제조사마다 보증 서비스의 범위와 조건입니다.</li>
                </ul>
                <ol>
                    <li className="li_list">현대자동차</li>
                        <ul className="ul_list">현대자동차는 보증 기간이 보통 5년 또는 10만 km(소형차는 3년 또는 10만 km)이며, 
                        기본 보증 항목으로는 엔진, 변속기, 브레이크, 서스펜션, 스티어링 등이 포함됩니다. 또한, 정비 서비스도 제공되며, 
                        이는 보증 기간 내 무상으로 제공됩니다.</ul>
                    <li className="li_list">기아자동차</li>
                        <ul className="ul_list">기아자동차는 보증 기간이 보통 5년 또는 10만 km(소형차는 3년 또는 10만 km)이며, 
                        보증 항목은 현대자동차와 비슷합니다. 또한, 정비 서비스도 제공되며, 이는 보증 기간 내 무상으로 제공됩니다.</ul>
                    <li className="li_list">삼성자동차</li>
                        <ul className="ul_list">삼성자동차는 보증 기간이 보통 5년 또는 10만 km이며, 엔진, 변속기, 브레이크, 
                        서스펜션, 스티어링 등이 포함된 기본 보증 항목 외에도, 가솔린 엔진 차량에서는 스파크 플러그, 
                        에어컨 컴프레서 등도 보증 대상에 포함됩니다. 정비 서비스는 보증 기간 내 무상으로 제공됩니다.</ul>
                    <li className="li_list">르노삼성자동차</li>
                        <ul className="ul_list">르노삼성자동차는 보증 기간이 보통 5년 또는 10만 km이며, 보증 항목은 엔진, 
                        변속기, 브레이크, 서스펜션, 스티어링 등이 포함됩니다. 또한, 보증 기간 내 정비 서비스도 무상으로 제공됩니다.</ul>
                    <li className="li_list">GM대우</li>
                        <ul className="ul_list">GM대우는 보증 기간이 보통 5년 또는 10만 km이며, 엔진, 변속기, 브레이크, 
                        서스펜션, 스티어링 등이 포함된 기본 보증 항목 외에도, 시동 모터, 발전기, 라디에이터 등도 보증 대상에 포함됩니다. 
                        정비 서비스는 보증 기간 내 무상으로 제공됩니다.</ul>
                </ol>
            </div>
        </MaintenanceBlock>
    )
}

export default maintenance;