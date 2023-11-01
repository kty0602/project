import styled from "styled-components";
// 자동차 할인 보험에 관한 페이지

const SaleBlock = styled.div`
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

const sale = () => {
    return(
        <SaleBlock>
            <div>
                <text className="text">자동차 할인 보험</text>
                <hr/>
                <ul>
                    <li className="lili">자동차 운전자들이 보험료를 저렴하게 받을 수 있는 보험입니다.</li>
                    <li className="lili">운전 중 일어날 가능성이 높은 사고에 대한 보상은 기본적으로 제공되며, 
                    추가적인 보험 선택 사항을 통해 개인적인 필요에 맞춘 보상을 받을 수 있습니다.</li>
                    <li className="lili">일반적으로 운전자의 운전 기록, 차량 모델, 운행 지역, 보험 가입 기간 등을 고려하여 보험료를 결정합니다.</li>
                </ul>
            </div>
            <div className="div">
                <li className="lili">할인보험을 제공하는 보험사</li>
                <ol>
                    <li className="li_list">삼성화재 할인보험</li>
                        <ul className="ul_list">특약 선택에 따라 할인율 적용 (최대 30% 할인 가능)</ul>
                        <ul className="ul_list">대중교통 이용 등 환경 친화적 운전 시 할인</ul>
                        <ul className="ul_list">부모와 자녀의 자동차 함께 가입 시 할인</ul>
                        <ul className="ul_list">이륜차, 대형차, 고가차종 등에서 할인 혜택 부여</ul>
                    <li className="li_list">KB손해보험 할인보험</li>
                        <ul className="ul_list">대중교통 이용 및 운전습관 평가 시 할인 (최대 35% 할인 가능)</ul>
                        <ul className="ul_list">대상 차종 및 지역별 할인 제공</ul>
                        <ul className="ul_list">자동차 결제 수단 등록 시 할인</ul>
                        <ul className="ul_list">자동차보험 최초 가입 시 추가 할인 제공</ul>
                    <li className="li_list">현대해상 할인보험</li>
                        <ul className="ul_list">대중교통 이용 및 운전습관 평가 시 할인 (최대 35% 할인 가능)</ul>
                        <ul className="ul_list">자차결합, 가족 차량 보유, 단체 가입 등 할인</ul>
                        <ul className="ul_list">안전장치 장착 차량 및 운전자 신상정보 제공 시 추가 할인 제공</ul>
                    <li className="li_list">롯데손해보험 할인보험</li>
                        <ul className="ul_list">운전습관 평가, 대중교통 이용 시 할인 (최대 35% 할인 가능)</ul>
                        <ul className="ul_list">자동차 결제 수단 등록 시 할인</ul>
                        <ul className="ul_list">자동차보험 최초 가입 시 추가 할인 제공</ul>
                    <li className="li_list">한화손해보험 할인보험</li>
                        <ul className="ul_list">대중교통 이용, 운전습관 평가 시 할인 (최대 35% 할인 가능)</ul>
                        <ul className="ul_list">안전장치 장착 차량 및 자차결합 시 할인</ul>
                        <ul className="ul_list">결제 수단 등록 시 할인</ul>
                </ol>
            </div>
        </SaleBlock>
    )
}

export default sale;