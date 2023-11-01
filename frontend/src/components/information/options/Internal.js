import styled from "styled-components";

const InternBlock = styled.div`
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

const internal = () => {
    return(
        <InternBlock>
            <div>
                <text className="text">내장 옵션</text>
                <hr/>
                <ol>
                    <li className="li_list">열선시트</li>
                        <ul className="ul_list">차량 내부 좌석에 열선이 내장된 옵션으로, 
                        추운 날씨에 좌석을 더 따뜻하게 할 수 있습니다.</ul>
                    <li className="li_list">통풍시트</li>
                        <ul className="ul_list">차량 내부 좌석에 통풍 시스템이 내장된 옵션으로, 
                        더위를 많이 타는 여름철에 시원하게 좌석을 유지할 수 있습니다.</ul>
                    <li className="li_list">파워핸들</li>
                        <ul className="ul_list">조향 휠의 각도와 위치를 전동 모터로 제어하여 
                        운전자가 더 쉽게 운전할 수 있도록 도와주는 옵션입니다.</ul>
                    <li className="li_list">핸들 리모컨</li>
                        <ul className="ul_list">핸들에 장착된 버튼들을 통해 오디오, 
                        크루즈 컨트롤 등을 조작할 수 있는 기능입니다.</ul>
                    <li className="li_list">가죽시트</li>
                        <ul className="ul_list">가죽 소재로 만든 좌석으로, 
                        보다 고급스러운 인테리어 디자인을 제공하고 더욱 편안한 느낌을 줍니다.</ul>
                    <li className="li_list">운전석 전동시트</li>
                        <ul className="ul_list">운전석의 좌우, 위아래 등의 조정을 전동으로 조절할 수 있는 기능입니다.</ul>
                    <li className="li_list">조수석 전동시트</li>
                        <ul className="ul_list">조수석의 좌우, 위아래 등의 조정을 전동으로 조절할 수 있는 기능입니다.</ul>
                    <li className="li_list">뒷자석 전동시트</li>
                        <ul className="ul_list">후방 좌석에 내장된 전동 시트로 좌석의 조정을 자동으로 조절할 수 있습니다.</ul>
                    <li className="li_list">메모리시트</li>
                        <ul className="ul_list">좌석 위치 및 기타 세팅을 기억하는 기능으로, 
                        차량에 여러 명이 운전하는 경우 적절한 좌석 조정을 빠르게 수행할 수 있습니다.</ul>
                    <li className="li_list">안마시트</li>
                        <ul className="ul_list">시트 내부에 마사지 기능이 내장되어 있어 차량에서 편안한 마사지를 받을 수 있는 기능입니다.</ul>
                    <li className="li_list">슈퍼비전계기판</li>
                        <ul className="ul_list">더 넓은 화면 크기와 높은 해상도를 통해 차량 운전 정보를 더욱 선명하게 제공해주는 기능입니다.</ul>
                    <li className="li_list">패들시프트</li>
                        <ul className="ul_list">운전자가 운전하는 동안 좌우로 움직이는 패들을 누르면 차량 기어를 수동으로 조정할 수 있는 기능입니다.</ul>
                    <li className="li_list">하이패스</li>
                        <ul className="ul_list">고속도로 통행 요금 청구 시 자동으로 인식하는 장치로, 
                        사용 요금이 더 저렴해지는 경우가 많습니다.</ul>
                    <li className="li_list">메모리시트(동승석)</li>
                        <ul className="ul_list">운전석과 동승석에 각각 메모리 기능을 적용한 시트로, 
                        설정된 좌석 위치를 저장해 놓았다가 나중에 다시 사용할 때 원하는 위치로 쉽게 조절할 수 있습니다.</ul>
                    <li className="li_list">열선시트(뒷자석)</li>
                        <ul className="ul_list">뒷자석 좌석에 열선이 내장된 시트로, 
                        겨울철 차 내부를 따뜻하게 유지해주는 기능을 합니다.</ul>
                    <li className="li_list">엠비언트라이트</li>
                        <ul className="ul_list">차량 내부 분위기를 연출하기 위한 조명으로, 적절한 색상과 밝기로 조절됩니다.</ul>
                    <li className="li_list">워크인시트</li>
                        <ul className="ul_list">좌석 뒤쪽에 있는 스위치를 눌러 좌석을 앞으로 밀면, 
                        승객이 더 쉽게 차량 내부로 출입할 수 있는 기능입니다.</ul>
                    <li className="li_list">전동햇빛가리개</li>
                        <ul className="ul_list">운전석과 동승석에 내장된 햇빛가리개로, 전동으로 조절이 가능합니다.</ul>
                    <li className="li_list">통풍시트(동승석)</li>
                        <ul className="ul_list">좌석 안에 내장된 선풍기로 공기 순환을 돕는 기능으로, 
                        여름철 차 내부를 시원하게 유지해주는 역할을 합니다.</ul>
                    <li className="li_list">통풍시트(뒷자석)</li>
                        <ul className="ul_list">뒷자석 좌석에도 내장된 통풍시트로, 
                        뒷좌석 승객들이 더욱 쾌적한 차 내부를 느낄 수 있도록 돕습니다.</ul>
                </ol>
            </div>
        </InternBlock>
    )
}

export default internal;