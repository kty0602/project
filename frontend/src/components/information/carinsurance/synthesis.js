import styled from "styled-components";
// 자동차 종합보험에 관한 페이지

const SynthBlock = styled.div`
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
const synthesis = () => {
    return(
        <SynthBlock>
            <div>
                <text className="text">자동차 종합보험</text>
                <hr/>
                <li className="lili">자동차에 대한 종합적인 보장을 제공하는 보험입니다.</li>
                <li className="lili">종합보험의 경우 각 보험사에서 제공하는 보장 범위와 가입 조건이 상이할 수 있습니다.</li>
                <li className="lili">일반보험의 보장 내용을 포함하고 있지만, 더 넓은 범위와 보장 내용을 제공합니다.</li>
            </div>
            <div className="div">
                <li className="lili">종합 보험의 종류는 다음과 같습니다.</li>
                <ol>
                    <li className="li_list">자동차 자기부담금 보험</li>
                        <ul className="ul_list">자동차 사고 발생 시 본인이 부담해야 하는 금액을 보장</ul>
                    <li className="li_list">자동차 자기물건 보험</li>
                        <ul className="ul_list">차량 내부에 있는 물건의 훼손이나 도난을 보장</ul>                                                                     
                    <li className="li_list">자동차 대인배상책임 보험</li>
                        <ul className="ul_list">운전자가 타인에게 인체 또는 재물 손해를 입혔을 때 해당 손해를 보장</ul>  
                    <li className="li_list">자동차 대물배상책임 보험</li>
                        <ul className="ul_list">운전자가 타인의 자동차 등 재물에 손해를 입혔을 때 해당 손해를 보장</ul>
                    <li className="li_list">자동차 신체손해 보험</li>
                        <ul className="ul_list">운전자가 자동차 사고로 인해 상해를 입었을 때 해당 손해를 보장해주는 보험</ul>
                    <li className="li_list">자동차 화재, 폭발, 자연재해 보험</li>
                        <ul className="ul_list">자동차가 화재, 폭발, 천재지변 등으로 인해 피해를 입었을 때 해당 손해를 보장</ul>
                    <li className="li_list">자동차 무보증피해보상 보험</li>
                        <ul className="ul_list">보험 가입자가 무면허나 면허취득일 이후 지정한 기간 동안 사고를 당한 경우 보상하는 보험</ul>
                    <li className="li_list">자동차 경위기준 보험</li>
                        <ul className="ul_list">자동차의 주행거리나 차량 연식에 따라 보험료를 차등 적용하는 보험</ul>
                    <li className="li_list">자동차 운전자/승객상해 보험</li>
                        <ul className="ul_list">차량 사고 시 운전자 또는 승객이 입은 상해에 대해 보상해주는 보험</ul>
                    <li className="li_list">자동차 절도 보험</li>
                        <ul className="ul_list">차량이 도난 당했을 때 차량의 가치에 대한 보상을 받을 수 있는 보험</ul>
                </ol>
            </div>
            <div className="div">
                <li className="lili">종합보험을 제공하는 보험사</li>
                <ol>
                    <li className="li_list">삼성화재</li>
                        <ul className="ul_list"><span className="span">가입 조건:</span> 자동차 등록증 소지자</ul>
                        <ul className="ul_list"><span className="span">보장 범위:</span> 대인배상책임보험, 대물배상책임보험, 자동차 신체손해보험, 
                        자동차 화재, 폭발, 자연재해 보험, 자동차 절도보험, 자동차 운전자/승객상해보험, 자동차 자기부담금보험, 자동차 자기물건보험</ul>
                    <li className="li_list">DB손해보험</li>
                        <ul className="ul_list"><span className="span">가입 조건:</span> 자동차 등록증 소지자</ul>
                        <ul className="ul_list"><span className="span">보장 범위:</span> 대인배상책임보험, 대물배상책임보험, 자동차 신체손해보험, 
                        자동차 화재, 폭발, 자연재해 보험, 자동차 절도보험, 자동차 운전자/승객상해보험, 자동차 자기부담금보험, 자동차 자기물건보험</ul>
                    <li className="li_list">현대해상</li>
                        <ul className="ul_list"><span className="span">가입 조건:</span> 자동차 등록증 소지자</ul>
                        <ul className="ul_list"><span className="span">보장 범위:</span> 대인배상책임보험, 대물배상책임보험, 자동차 신체손해보험, 
                        자동차 화재, 폭발, 자연재해 보험, 자동차 절도보험, 자동차 운전자/승객상해보험, 자동차 자기부담금보험, 자동차 자기물건보험</ul>
                    <li className="li_list">KB손해보험</li>
                        <ul className="ul_list"><span className="span">가입 조건:</span> 자동차 등록증 소지자</ul>
                        <ul className="ul_list"><span className="span">보장 범위:</span>: 대인배상책임보험, 대물배상책임보험, 자동차 신체손해보험, 
                        자동차 화재, 폭발, 자연재해 보험, 자동차 절도보험, 자동차 운전자/승객상해보험, 자동차 자기부담금보험, 자동차 자기물건보</ul>
                </ol>
            </div>
        </SynthBlock>
    )
}

export default synthesis;