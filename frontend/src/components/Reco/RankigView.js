import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RankingView.css'; // 외부 스타일 시트 파일을 추가

const RankingView = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/view/rank');
        setRankings(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching rankings:', error);
      }
    };

    fetchRankings();
  }, []);

  return (
    <div className="ranking-container">
      <h1>사용자들이 관심있어하는 차량입니다.</h1>
      <ol>
        {rankings.slice(0, 5).map((ranking, index) => (
          <li key={index}>
            <div className="ranking">
              <span>{index + 1}</span>
            </div>
            <div className="car-info">
              <div className="details">
                <p>{ranking.brand} {ranking.model}</p>
                <p>차종: {ranking.type}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RankingView;