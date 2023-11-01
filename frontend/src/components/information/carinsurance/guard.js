import styled from "styled-components";
// 자동차 지키미 보험에 관한 페이지

const GuardBlock = styled.div`
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

const guard = () => {
    return(
        <GuardBlock>
            <div>
                <text className="text">자동차 지키미 보험</text>
                <hr/>
                <ul>
                    <li className="lili">보험 가입자가 운전 중에 발생할 수 있는 사고를 예방하고 , 
                    안전한 운전 습관을 유도하기 위해 제공되는 보험 상품</li>
                    <li className="lili">일반적으로 운전 중 차선 이탈, 안전거리 미확보, 급가속/급제동, 
                    급커브 등 운전자의 습관에 따라 보험료 할인을  받을 수 있습니다.</li>
                    <li className="lili">운전 중 발생할 수 있는 사고에 대해 GPS를 통해 실시간으로 위치를 확인하여 
                    긴급 출동 서비스를 제공하는 경우도 있습니다.</li>
                </ul>
            </div>
            <div className="div">
                <li className="lili">지키미 보험을 제공하는 보험사</li>
                <ol>
                    <li className="li_list">KB손해보험의 'KB차차지키미' 보험</li>
                        <ul className="ul_list">운전자 습관 확인 및 개선 서비스</ul>
                        <ul className="ul_list"><span className="span">보험료 할인:</span> 50%까지 가능</ul>
                    <li className="li_list">삼성화재의 '자차보험 지켜미' 보험</li>
                        <ul className="ul_list">운전자 습관 개선 서비스</ul>
                        <ul className="ul_list">위치 기반 긴급출동 서비스 제공</ul>
                        <ul className="ul_list"><span className="span">보험료 할인:</span> 최대 50%까지 가능</ul>
                    <li className="li_list">농협손해보험의 '슈퍼바디가드 지키미' 보험</li>
                        <ul className="ul_list">운전자 습관 확인 및 개선 서비스</ul>
                        <ul className="ul_list">위치 기반 긴급출동 서비스 제공</ul>
                        <ul className="ul_list"><span className="span">보험료 할인:</span> 최대 20%까지 가능</ul>
                    <li className="li_list">현대해상의 'Safe-D 보험'</li>
                        <ul className="ul_list">운전자 습관 개선 서비스</ul>
                        <ul className="ul_list">위치 기반 긴급출동 서비스 제공</ul>
                        <ul className="ul_list"><span className="span">보험료 할인:</span> 최대 50%까지 가능</ul>
                    <li className="li_list">롯데손해보험의 '셀프카 지키미' 보험</li>
                        <ul className="ul_list">운전자 습관 확인 및 개선 서비스</ul>
                        <ul className="ul_list">위치 기반 긴급출동 서비스 제공</ul>
                        <ul className="ul_list"><span className="span">보험료 할인:</span> 최대 35%까지 가능</ul>
                </ol>
            </div>
        </GuardBlock>
    )
}

export default guard;