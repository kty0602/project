import styled from "styled-components";
// 사고기록에 대한 페이지

const AccidentBlock = styled.div`
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
        font-size: 18px;
        font-weight: 800;
        margin: 30px;
        margin-top: 50px;
    }
`

const accident = () => {
    return (
        <AccidentBlock>
            <text className="text">사고기록</text>
            <hr/>
            <ul>
                <li className="list">사고 기록은 해당 차량이 사고나 충돌 등의 사고로 인해 수리가 필요한 경우, 그 수리 기록이 남게 됩니다. 
                이러한 기록은 차량이 이전에 사고를 당했는지 여부를 확인할 수 있는 중요한 정보입니다.</li>
                <li className="list">일반적으로 중고차를 구매할 때, 구매자는 해당 차량의 사고 기록을 확인하기 위해 
                사고 이력 조회 서비스를 이용하게 됩니다. 이 서비스는 해당 차량의 차대번호(VIN)를 검색하여 이전에 수리가 필요한 경우 
                그 기록을 조회할 수 있도록 도와주는 서비스입니다.</li>
                <li className="list">최근에는 중고차 판매 시, 사고 유무를 인증하는 '사고 유무 인증서'를 발급하는 경우도 많아졌습니다. 
                이 인증서는 중고차 판매 시, 구매자가 사고 이력을 확인하기 위한 대표적인 수단 중 하나입니다.</li>
                <li className="list">중고차를 구매하려는 경우에는 해당 차량의 사고 이력을 꼼꼼하게 조사하고, 
                사고 유무 인증서 등을 확인하는 것이 중요합니다.</li>
            </ul>
        </AccidentBlock>
    )
}

export default accident;