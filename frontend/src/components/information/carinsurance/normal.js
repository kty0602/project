import styled from "styled-components";
// 자동차 일반 보험에 관한 페이지

const NomalBlock = styled.div`
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

const nomal = () => {
    return(
        <NomalBlock>
            <div>
                <text className="text">자동차 일반 보험</text>
                <hr/>
                <li className="lili">자동차에 대한 기본적인 보험으로, 
                자동차를 운전하면서 발생할 수 있는 사고에 대한 보상을 제공합니다.</li>
                <li className="lili">자동차 일반보험은 일반적으로 다음과 같은 내용을 포함합니다.</li>
                <ol>
                    <li className="li_list">자동차 신체손해보험</li>
                        <ul className="ul_list"></ul>
                    <li className="li_list">자동차 대인배상책임보험</li>
                        <ul className="ul_list"></ul>
                    <li className="li_list">자동차 대물배상책임보험</li>
                        <ul className="ul_list"></ul>
                    <li className="li_list">자동차 화재, 폭발, 자연재해 보험</li>
                        <ul className="ul_list"></ul>
                    <li className="li_list">자동차 자기부담금 보험</li>
                        <ul className="ul_list"></ul>
                </ol>
            </div>
            <div className="div">
                <li className="lili">일반보험을 제공하는 보험사/ 보장범위, 서비스</li>
                <ol>
                    <li className="li_list">KB손해보험</li>
                        <ul className="ul_list"><span className="span">보장 범위:</span> 대인/대물/신체손해배상책임보험, 자기부담금보험 등</ul>
                        <ul className="ul_list"><span className="span">서비스/혜택:</span> 차량수리서비스, 보험금예치서비스, 구차평가서비스, 치료비패키지 등</ul>
                    <li className="li_list">삼성화재해상보험</li>
                        <ul className="ul_list"><span className="span">보장 범위:</span> 대인/대물/신체손해배상책임보험, 자기부담금보험 등</ul>
                        <ul className="ul_list"><span className="span">서비스/혜택:</span> 긴급출동서비스, 수리서비스, 보험금수령증명서비스 등</ul>
                    <li className="li_list">현대해상화재보험</li>
                        <ul className="ul_list"><span className="span">보장 범위:</span> 대인/대물/신체손해배상책임보험, 자기부담금보험, 특약 등</ul>
                        <ul className="ul_list"><span className="span">서비스/혜택:</span> 차량수리서비스, 보험금조사대행서비스, 통역서비스 등</ul>
                    <li className="li_list">롯데손해보험</li>
                        <ul className="ul_list"><span className="span">보장 범위:</span> 대인/대물/신체손해배상책임보험, 자기부담금보험, 특약 등</ul>
                        <ul className="ul_list"><span className="span">서비스/혜택:</span> 무상긴급출동서비스, 수리서비스, 구매보호서비스 등</ul>
                    <li className="li_list">한화손해보험</li>
                        <ul className="ul_list"><span className="span">보장 범위:</span> 대인/대물/신체손해배상책임보험, 자기부담금보험, 특약 등</ul>
                        <ul className="ul_list"><span className="span">서비스/혜택:</span> 무상긴급출동서비스, 수리서비스, 구매보호서비스 등</ul>
                </ol>
            </div>
        </NomalBlock>
    )
}

export default nomal;



