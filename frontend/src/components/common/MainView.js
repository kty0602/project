import styled from "styled-components";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Search from "../../lib/image/car_search.jpg";
import Recommend from "../../lib/image/car_recommend.jpg";
import Recall from "../../lib/image/car_recall.jpg";
import Info from "../../lib/image/car_info.jpg";
import Community from "../../lib/image/car_community.jpg";

// 실행 안될 시 npm install react-responsive-carousel 

const View = styled.div`
    width: 1300px;
    height: 650px;
    margin: 30px auto;
    overflow: hidden;
    .div {
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        position: relative;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .div2 {
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        position: relative;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: #01D9B4;
    }
    .div3 {
        border-radius: 10px;
        border-width: 1px;
        border-style: solid;
        position: relative;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        flex-direction: column;
        background: #C8E8F5;
    }
    .carousel .slide {
        background: white;
    }
    .carousel .slide img {  //이미지가 들어가는 공간
        object-fit: contain;
        width: 890px;
        height: 550px;
        margin: 0;
        margin-left: 400px;
        cursor: pointer;
    }
    .carousel .control-dots .dot {    // 아래 . . . . . 
        background-color: gray;
    }
    .carousel .control-dots .dot.selected {  // 선택된 dot 색 변환
        background-color: black;
    }
    .carousel .carousel-status {  // 1 of 5 <p> 태그 안보이게 하기
        display : none;
    }
    .carousel .control-arrow.control-prev {    // 왼쪽 오른쪽 화살표 버튼 비활성화
        display : none;
    }
    .carousel .control-arrow.control-next {
        display : none;
    }
`

const Text1 = styled.div`
    user-select: none;
    position: absolute;
    top: 15%;
    width: 300px;
    transform: translateY(-50%);
    left: 96px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: #004D40;
    font-weight: bold;
    font-size: 30px;
`
const Text2 = styled.div`
    user-select: none;
    position: absolute;
    top: 10%;
    width: 330px;
    transform: translateY(-50%);
    left: 82px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Text3 = styled.div`
    user-select: none;
    position: absolute;
    top: 15%;
    width: 320px;
    transform: translateY(-50%);
    left: 80px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: steelblue;
    font-weight: bold;
    font-size: 30px;
`
const Text4 = styled.div`
    user-select: none;
    position: absolute;
    top: 15%;
    width: 300px;
    transform: translateY(-50%);
    left: 90px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Text5 = styled.div`
    position: absolute;
    top: 15%;
    width: 400px;
    transform: translateY(-50%);
    left: 42px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: black;
    font-weight: bold;
    font-size: 30px;
`
const Button = styled.div`
    position: absolute;
    top: 90%;
    width: 200px;
    padding: 5px;
    transform: translateY(-50%);
    left: 140px;
    z-index: 10;
    border-radius: 20px;
    color: white;
    background: green;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`

const Explan = styled.div`
    position: absolute;
    top: 50%;
    width: 400px;
    transform: translateY(-50%);
    left: 42px;
    z-index: 10;
    background-color: transparent;
    border: none;
    color: ${({ color }) => color};
    font-weight: bold;
    font-size: 15px;
`


const MainView = () => {
    return(
        <View>
            <Carousel showThumbs={false} autoPlay infiniteLoop interval={3500}>
            <div className="div2">
                <a href="/carsearch"> 
                    <img src={Search} alt="Search" />
                    <Text1>차량 검색 서비스</Text1>
                    <Explan color="#004D40">🔍 옵션 검색 기능 소개<br/><br/>
                        1️⃣ 정확한 필터링<br/>
                        차량의 브랜드, 모델, 연식, 주행 거리, 가격대 등 다양한 옵션으로 검색할 수 있어, 필요한 조건에 맞춰 정확한 결과를 얻을 수 있습니다.
                        <br/><br/>
                        2️⃣ 시간 절약<br/>
                        수많은 중고차 중에서 원하는 옵션을 선택하여 검색하므로, 차량을 일일이 확인하며 비교하는 데 소요되는 시간을 단축할 수 있습니다.
                        <br/><br/>
                        3️⃣ 맞춤 추천<br/>
                        자신이 원하는 옵션을 선택하면, 해당 조건에 맞는 중고차 목록이 제공되어 더욱 신속하게 원하는 차량을 찾을 수 있습니다.</Explan>
                    <Button>자세히 살펴보기</Button>
                </a>
            </div>
            <div className="div">
                <a href="/reco">
                    <img src={Recommend} alt="Recommend" />
                    <Text2>차량 추천 서비스</Text2>
                    <Explan color="black">🔍 차량 추천 기능 소개<br/><br/>
                        1️⃣ 차량 특징 기반 추천<br/>
                        당신이 검색한 차량과 유사한 차량을 추천해 드립니다. 브랜드, 모델, 차종 등의 특징을 분석하여 유사성을 
                        고려한 추천 시스템을 도입했습니다. 
                        <br/><br/>
                        2️⃣ 개인 맞춤형 추천<br/>
                        당신의 나이대, 성별, 관심 차량 모델 데이터를 활용하여 개인에게 맞춤형 차량을 추천해 드립니다. 
                        다양한 사용자들의 차량 조회 기록을 분석하여 유사한 사용자들의 선호도를 파악하고, 
                        협업 필터링 잠재 요인 알고리즘을 활용하여 최적의 추천을 제공합니다.
                        <br/><br/>
                        3️⃣ 차량 선호도 순위<br/>
                        세대별 및 성별에 따른 차량 선호도 순위를 확인할 수 있습니다. 사용자들 간의 차량 선호도를 분석하여 세대별, 
                        성별에 맞는 인기 차량을 순위로 제공합니다.   
                    </Explan>
                    <Button>자세히 살펴보기</Button>
                </a>
            </div>
            <div className="div3">
                <a href="/recall"> 
                    <img src={Recall} alt="Recall" />
                    <Text3>리콜 정보 서비스</Text3>
                    <Explan color="#4169E1">🔍 리콜 정보 서비스 소개<br/><br/>
                        1️⃣ 안전한 운전 환경<br/>
                        리콜은 제조사나 정부 기관에서 발표하는 차량의 결함과 이상 현상에 대한 경고입니다. 
                        리콜 정보 서비스를 통해 당신의 차량이 리콜 대상인지 확인하고, 조치 사항을 취하여 더 안전한 운전 환경을 조성하세요.
                        <br/><br/>
                        2️⃣ 신속하고 정확한 알림<br/>
                        리콜 정보를 제공합니다. 
                        차량 제조사의 공지사항과 리콜 상세 내용을 손쉽게 확인할 수 있어, 차량 안전에 대한 우려를 더 이상 갖지 않아도 됩니다.</Explan>
                    <Button>자세히 살펴보기</Button>
                </a>
            </div>
            <div className="div">
                <a href="/Information"> 
                    <img src={Info} alt="Info" />
                    <Text4 color="black">자동차 정보 서비스</Text4>
                    <Explan>🔍 자동차 정보 서비스 소개<br/><br/>
                    1️⃣ 종합적인 자동차 정보<br/> 
                    다양한 차종과 모델의 상세한 정보를 제공하여, 차량의 성능, 연비, 안전 기능, 
                    인테리어 등을 알 수 있습니다. 구매나 보험 선택 시 필요한 모든 정보를 한 곳에서 확인하세요.
                    <br/><br/>
                    2️⃣ 다이렉트 보험 추천<br/>
                    개인의 나이, 차종, 주행거리 등을 고려하여 최적의 다이렉트 보험사를 추천합니다. 
                    </Explan>
                    <Button>자세히 살펴보기</Button>
                </a>
            </div>
            <div className="div">
                <a href="/boardlist">
                    <img src={Community} alt="Community" />
                    <Text5>커뮤니티 게시판</Text5>
                    <Explan color="black">
                        📣 자동차 커뮤니티 게시판 서비스 소개<br/><br/>
                        1️⃣ 정보 공유와 소통<br/>
                        다른 자동차 애호가들과 함께 정보를 공유하고 소통할 수 있습니다. 
                        최신 자동차 트렌드, 운전 팁, 유지 보수 꿀팁 등 다양한 주제로 의견을 나누며, 소중한 경험을 공유할 수 있습니다.
                        <br/><br/>
                        2️⃣ 전문적인 조언과 도움<br/>
                        자동차 전문가들과 열정적인 커뮤니티 구성원들이 함께하는 게시판에서 전문적인 조언과 
                        도움을 받을 수 있습니다. 궁금한 사항이나 문제가 있을 때 다양한 의견과 해결책을 얻어 자신의 차량 관리를 보다 
                        효과적으로 할 수 있습니다.
                    </Explan>
                    <Button>자세히 살펴보기</Button>
                </a>
            </div>
            </Carousel>
        </View>
    )
}

export default MainView;