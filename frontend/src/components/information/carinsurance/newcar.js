import styled from "styled-components";
// 자동차 신차 보험에 관한 페이지

const NewBlock = styled.div`
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
    .lili {
        margin: 10px;
        margin-top: 20px;
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
    .span {
        font-size: 18px;
    }
`

const newcar = () => {
    return(
        <NewBlock>
            <div>
                <text className="text">자동차 신차 보험</text>
                <hr/>
                <ul>
                    <li className="lili">자동차를 산 직후에 가입하는 보험으로, 
                    자동차가 사고나 도난 등의 이유로 손해를 입었을 경우, 
                    신차 구매 가격을 기준으로 보상을 받을 수 있는 보험입니다.</li>
                    <li className="lili">다만 종합보험에 포함되어 있지 않으므로 별도로 가입해야 합니다.</li>
                </ul>
            </div>
            <div className="div">
                <li className="lili">일반적으로 자동차 신차보험은 다음과 같은 보장 범위를 제공합니다.</li>
                    <ul className="ul_list"><span className="span">차량손해:</span> 사고나 이륜차와의 충돌 등으로 차량이 손상되는 경우 보상을 받을 수 있습니다.</ul>
                    <ul className="ul_list"><span className="span">도난손해:</span> 차량이 도난되어 수리나 보상이 불가능한 경우, 신차 구매 가격을 기준으로 보상을 받을 수 있습니다.</ul>
                    <ul className="ul_list"><span className="span">자기부담금 면제:</span> 보험 가입 시 자기부담금을 면제해주는 경우도 있습니다.</ul>
            </div>
            <div className="div">
                <li className="lili">다만 다음과 같은 조건을 만족해야 합니다.</li>
                    <ul className="ul_list">차량이 신차여야 함</ul>
                    <ul className="ul_list">차량 등록일이 보통 1개월 이내여야 함</ul>
                    <ul className="ul_list">최초 등록자가 본인이어야 함</ul>
            </div>
            <div className="div">
                <li className="lili">다음은 보험사들의 신차보험에서 제공하는 대표적 보장 내용입니다.</li>
                <ol>
                    <li className="li_list">KB손해보험</li>
                        <ul className="ul_list">최대 3년까지 신차가치 보장</ul>
                        <ul className="ul_list">국내 정비소에서 정비 및 수리 가능</ul>
                        <ul className="ul_list">친환경 차량 구매 시 추가 할인 제공</ul>
                    <li className="li_list">현대해상</li>
                        <ul className="ul_list">최대 3년까지 신차가치 보장</ul>
                        <ul className="ul_list">무상 보상 서비스 제공 (경미한 차량 손상 시)</ul>
                        <ul className="ul_list">보험료 할인 및 포인트 적립 등 다양한 혜택 제공</ul>
                    <li className="li_list">삼성화재</li>
                        <ul className="ul_list">최대 2년까지 신차가치 보장</ul>
                        <ul className="ul_list">대리운전 서비스 제공</ul>
                        <ul className="ul_list">차량 대여비 지원</ul>
                    <li className="li_list">롯데손해보험</li>
                        <ul className="ul_list">최대 2년까지 신차가치 보장</ul>
                        <ul className="ul_list">친환경 차량 구매 시 추가 할인 제공</ul>
                        <ul className="ul_list">국내 정비소에서 정비 및 수리 가능</ul>
                    <li className="li_list">AXA손해보험</li>
                        <ul className="ul_list">최대 2년까지 신차가치 보장</ul>
                        <ul className="ul_list">국내 정비소에서 정비 및 수리 가능</ul>
                        <ul className="ul_list">친환경 차량 구매 시 추가 할인 제공</ul>
                </ol>
            </div>
        </NewBlock>
    )
}

export default newcar;