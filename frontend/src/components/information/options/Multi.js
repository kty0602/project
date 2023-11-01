import styled from "styled-components";


const MultiBlock = styled.div`
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

const multi = () =>{
    return(
        <MultiBlock>
            <div>
                <text className="text">멀티 옵션</text>
                <hr/>
                <ol>
                    <li className="li_list">내비게이션</li>
                        <ul className="ul_list">차량 위치와 목적지를 검색하고 길 안내를 해주는 시스템</ul>
                    <li className="li_list">CD플레이어</li>
                        <ul className="ul_list">CD를 재생하는 장치</ul>
                    <li className="li_list">CD체인저</li>
                        <ul className="ul_list">여러 개의 CD를 한 번에 저장하고 재생할 수 있는 시스템</ul>
                    <li className="li_list">AV시스템</li>
                        <ul className="ul_list">비디오 및 오디오를 재생하는 시스템</ul>
                    <li className="li_list">MP3</li>
                        <ul className="ul_list">디지털 음악 파일 형식 중 하나로, 고품질의 음악을 압축하여 저장할 수 있는 기술</ul>
                    <li className="li_list">AUX</li>
                        <ul className="ul_list">오디오 신호를 전달하기 위한 입력 단자</ul>
                    <li className="li_list">USB</li>
                        <ul className="ul_list">데이터를 전송하고 장치를 충전할 수 있는 범용적인 입출력 인터페이스</ul>
                    <li className="li_list">핸즈프리</li>
                        <ul className="ul_list">차량 내에서 휴대전화를 사용할 때, 음성인식 기술로 전화를 걸거나 받을 수 있게 해주는 시스템</ul>
                    <li className="li_list">iPod 단자</li>
                        <ul className="ul_list">아이팟이나 아이폰 등 애플 제품을 연결할 수 있는 단자</ul>
                    <li className="li_list">뒷자석모니터</li>
                        <ul className="ul_list">뒷 좌석에 모니터를 설치하여 동영상을 시청할 수 있는 시스템</ul>
                    <li className="li_list">스마트폰미러링</li>
                        <ul className="ul_list">스마트폰의 화면을 차량 내 디스플레이에 미러링하여 사용할 수 있는 시스템</ul>
                    <li className="li_list">내비게이션(비순정)</li>
                        <ul className="ul_list">차량 제조사에서 제공하는 내비게이션 시스템이 아닌, 외부에서 구매하여 설치하는 시스템</ul>
                    <li className="li_list">블루투스</li>
                        <ul className="ul_list">무선 기술 중 하나로, 차량과 스마트폰 등의 기기 간에 음악이나 전화 등을 무선으로 연결할 수 있는 기술</ul>
                </ol>
            </div>
        </MultiBlock>
    )
}

export default multi;