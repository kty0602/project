import styled from "styled-components";
// 연료 종류에 관한 페이지

const OilBlock = styled.div`
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
`

const oiltype = () => {
    return(
        <OilBlock>
            <div>
                <text className="text">연료 종류</text>
                <hr/>
                <ol>
                    <li className="li_list">
                        휘발유(Gasoline)
                    </li>
                        <ul className="ul_list">
                        가장 일반적인 연료 종류로서, 가격이 비교적 저렴하고 가볍고 경제적인 차량에서 사용됩니다.
                        </ul>
                    <li className="li_list">
                        경유(Diesel)
                    </li>
                        <ul className="ul_list">
                        휘발유보다 약간 비싸지만, 휘발유보다 좋은 연비를 가지고 있으며 토크(회전력)가 좋아 중대형 차량이나 트럭 등에 많이 
                        사용됩니다.
                        </ul>
                    <li className="li_list">
                        LPG(Liquefied Petroleum Gas)
                    </li>
                        <ul className="ul_list">
                        휘발유나 경유에 비해 가격이 저렴하고 환경 친화적인 연료입니다. 하지만 가스탱크를 장착해야 하기 때문에 
                        차량 무게가 늘어나는 단점이 있습니다.
                        </ul>
                    <li className="li_list">
                        전기(Electric)
                    </li>
                        <ul className="ul_list">
                        최근에는 전기차도 많이 생산되고 있습니다. 전기차는 배출가스가 없으며 경제성이 높습니다. 
                        하지만 충전 인프라가 부족하고 배터리 수명 등이 문제가 되는 등 아직 발전이 필요한 분야입니다.
                        </ul>
                    <li className="li_list">
                        수소(Hydrogen)
                    </li>
                        <ul className="ul_list">
                            수소 연료전지 차량은 전기차와 마찬가지로 배출가스가 없습니다. 하지만 수소 충전소 인프라가 부족하고, 
                            수소 자체의 생산과 수송 등이 비용이 많이 들어가는 단점이 있습니다.
                        </ul>
                </ol>
            </div>
        </OilBlock>
    )
}

export default oiltype;