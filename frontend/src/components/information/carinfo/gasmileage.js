import styled from "styled-components";
// 연비에 관한 페이지

const GasBlock = styled.div`
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
    .list {
        font-size: 15px;
        font-weight: 800;
        margin: 30px;
        margin-top: 50px;
    }
`

const gasmileage = () => {
    return(
        <GasBlock>
            <div>
                <text className="text">연비</text>
                <hr/>
                <ul>
                    <li className="list">연비는 주행한 거리에 대한 연료 소비량을 나타내는 단위입니다. 연비는 일반적으로 도심 주행, 
                    고속도로 주행, 평균 주행 등 다양한 주건에서 측정됩니다.</li>
                    <li className="list">연비는 다양한 요소에 따라 다릅니다. 예를 들어 차종, 배기량, 엔진 형태, 구동 방식, 
                    변속기 종류, 타이어 등이 연비에 영향을 미칩니다. 또한 주행 습관, 
                    유지 보수 상태, 주행 조건 등도 연비에 영향을 줄 수 있습니다.</li>
                    <li className="list">연비는 도심 주행과 고속도로 주행을 기준으로 나뉩니다.</li>
                    <li className="list">도심 주행 연비: 주행 거리가 짧고 속도가 낮은 도심 지역에서의 연비를 의미합니다.</li>
                    <li className="list">고속도로 주행 연비: 고속도로에서의 주행 연비를 의미합니다.</li>
                    <li className="list">연비는 주행 거리당 연료 소비량으로 표시됩니다.</li>
                    <li className="list">예를 들어 10km/L 이라고 한다면, 10km를 주행하는데 1리터의 연료가 필요하다는 뜻입니다.</li>
                </ul>
            </div>
        </GasBlock>
    )
}

export default gasmileage;