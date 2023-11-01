import styled from "styled-components";
// 자동차 신차 보험에 관한 페이지

const OldBlock = styled.div`
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

const oldcar = () => {
    return(
        <OldBlock>
            <div>
                <text className="text">자동차 중고차보험</text>
                <hr/>
                <li className="lili">중고차를 구매한 경우를 대비한 보험으로, 
                중고차의 차량 상태나 사용기간 등에 따라 다양한 보험 상품이 제공됩니다.</li>
            </div>
            <div className="div">
                <li className="lili">일반적으로 아래와 같은 보장 내용을 제공합니다.</li>
                <ol>
                    <li className="li_list">자동차상해보험</li>
                        <ul className="ul_list">중고차의 사고나 파손 등에 대한 보상을 제공하는 보험입니다. 
                        보상 금액은 보험 가입 시 선택한 보험금액과 보험사의 보상 기준에 따라 다를 수 있습니다.</ul>
                    <li className="li_list">자동차도난방지보험</li>
                        <ul className="ul_list">중고차의 도난이 발생한 경우, 도난된 자동차의 가치에 해당하는 금액을 보상해주는 보험입니다.</ul>
                    <li className="li_list">자동차자기부담금면제보험</li>
                        <ul className="ul_list">자동차 사고 발생 시 부담하는 자기부담금을 면제해주는 보험입니다. 
                        일반적으로는 보험 가입금액과 보상 한도가 정해져 있습니다.</ul>
                    <li className="li_list">자동차연식별상해보험</li>
                        <ul className="ul_list">중고차의 연식에 따라 상해 보상금액을 제한하는 보험으로, 
                        자동차의 연식에 따라 보상 한도가 다르게 적용됩니다.</ul>
                </ol>
            </div>
            <div className="div">
                <li className="lili">중고차보험을 제공하는 각 보험사</li>
                <ol>
                    <li className="li_list">KB손해보험 중고차보험</li>
                        <ul className="ul_list">자차사고, 타차사고, 자연재해, 기타사고로부터 보호</ul>
                        <ul className="ul_list"><span className="span">보장내용:</span> 신차보장, 비갱신 보험료제도, 무상점검 서비스</ul>
                        <ul className="ul_list"><span className="span">가입대상:</span> 1년 이상 보험기간이 남은 중고차 보유자</ul>
                    <li className="li_list">현대해상 중고차보험</li>
                        <ul className="ul_list">자차사고, 타차사고, 자연재해, 스크래치(깍임), 도난, 파손 등으로부터 보호</ul>
                        <ul className="ul_list"><span className="span">보장내용:</span> 신차보장, 무상 AS서비스, 부분손해보상 제도 등</ul>
                        <ul className="ul_list"><span className="span">가입대상:</span> 중고차 1년 이내 구입자 또는 1년 이내 이전 소유자가 있던 차량 보유자</ul>
                    <li className="li_list">AXA손해보험 중고차보험</li>
                        <ul className="ul_list">자차사고, 타차사고, 도난, 파손 등으로부터 보호</ul>
                        <ul className="ul_list"><span className="span">보장내용:</span> 차량용품 보장, 적정한 보험료 평가, 무상 정비서비스 등</ul>
                        <ul className="ul_list"><span className="span">가입대상:</span> 1년 이상 보험기간이 남은 중고차 보유자</ul>
                    <li className="li_list">메리츠화재 중고차보험</li>
                        <ul className="ul_list">자차사고, 타차사고, 자연재해, 스크래치, 도난 등으로부터 보호</ul>
                        <ul className="ul_list"><span className="span">보장내용:</span> 신차보장, 무상 정비서비스, 부분손해보상 제도 등</ul>
                        <ul className="ul_list"><span className="span">가입대상:</span> 1년 이상 보험기간이 남은 중고차 보유자</ul>
                    <li className="li_list">동부화재 중고차보험</li>
                        <ul className="ul_list">자차사고, 타차사고, 자연재해, 스크래치, 도난 등으로부터 보호</ul>
                        <ul className="ul_list"><span className="span">보장내용:</span> 무상 정비서비스, 부분손해보상 제도, 적정 보험료 제공 등</ul>
                        <ul className="ul_list"><span className="span">가입대상:</span> 1년 이상 보험기간이 남은 중고차 보유자</ul>
                </ol>
            </div>
        </OldBlock>
    )
}

export default oldcar;