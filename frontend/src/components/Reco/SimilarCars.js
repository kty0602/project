import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../../lib/APIUtils';
import axios from 'axios';
import './SimilarCars.css'; // 외부 스타일 시트 파일을 추가

const RankingComponent = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const user = await getCurrentUser(); // getCurrentUser()로 현재 사용자 값을 가져온다.
        console.log("--------------------------------",user.id)
        const response = await axios.post('http://localhost:5000/reco/getSimilarCars?id=' + user.id);

        console.log(response.data);
        setRanking(response.data);
      } catch (error) {
        console.error('랭킹을 가져오는 중에 오류가 발생했습니다:', error);
      }
    };

    fetchRanking();
  }, []);

  return (
    <div className="ranking-container">
        <h1>당신에게 이런 차량을 추천합니다!</h1>
        <div className="podium">
        {ranking.length >= 3 && ranking.slice(0, 3).map((car, index) => (
            <div key={car.cdno} className={`ranking-${index + 1}`}>
              <h2>{car.brand} {car.model}</h2>
              <p>브랜드: {car.tag}</p>
              <p>차종: {car.type}</p>
            </div>
          ))}
        </div>
        <div className="other-rankings">
        {ranking.length === 0 ? (
                <div className="empty-ranking-text-container">
                <p>
                  죄송합니다. 당신의 정보가 부족합니다.
                  <br />
                  대신 아래에서 다른 사람에게 많이 추천된 차량을 확인하세요!
                </p>
            </div>
          ) : (
            ranking.slice(3).map((car, index) => (
              
              <div key={car.cdno} className="ranking-item">
                <h3>{index + 4}. {car.brand} {car.model}</h3>
                <p>브랜드: {car.tag}</p>
                <p>차종: {car.type}</p>
              </div>
              
            ))
          )}
        </div>
      </div>
  );
};

export default RankingComponent;