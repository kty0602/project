import styled from "styled-components";
// 자동차 자차보험에 관한 페이지

const EssenBlock = styled.div`
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
    .text2 {
        font-size: 50px;
        margin-left: 15px;
    }
    .lili {
        margin: 10px;
        margin-top: 20px;
        font-size: 15px;
        font-weight: 800;
    }
    .div {
        margin-top: 80px;
    }
`

const essential = () => {
    return(
        <EssenBlock>
            <div>
                <text className="text">자동차 자차보험</text>
                <hr/>
                <li className="lili">해당 보험은 국내 모든 자동차 보험 가입 시 반드시 가입해야 하는 법적 의무가 있습니다.</li>
                <li className="lili">간단히 ‘자차보험’이라고 불립니다.</li>
                <li className="lili">공익을 위해 설립된 보험회사인 한국자동차보험공사(KAIC) 에서만 가입이 가능합니다.</li>
                <li className="lili">가입 기간은 1년이며, 각 연도마다 보험료가 달라질 수 있습니다.</li>
                <li className="lili">보험료는 차종, 연식, 운전자 연령, 운전 기록 등의 정보를 기반으로 산출됩니다.</li>
                <li className="lili">대인책임보험, 대물책임보험으로 2가지 종류가 있습니다.</li>
            </div>
            <div className="div">
                <text className="text2">대인책임보험</text>
                <li className="lili">사고로 인해 타인에게 입힌 상해 및 사망 등의 손해를 보장하는 보험입니다.</li>
                <li className="lili">이 보험은 보험회사가 대신 해당 손해를 보상합니다.</li>
            </div>
            <div className="div">
                <text className="text2">대물책임보험</text>
                <li className="lili">사고로 인해 타인의 재산을 손상시킨 경우 해당 손해를 보장하는 보험입니다.</li>
                <li className="lili">이 보험은 보험회사가 대신 해당 손해를 보상합니다.</li>
            </div>
        </EssenBlock>
    )
}

export default essential;