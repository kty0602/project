import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RankingView.css';

const SexRankingView = () => {
  const [femaleRankings, setFemaleRankings] = useState([]);
  const [maleRankings, setMaleRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/view/sexRank');
        const { 여: femaleRankings, 남: maleRankings } = response.data;
        setFemaleRankings(femaleRankings);
        setMaleRankings(maleRankings);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching rankings:', error);
      }
    };

    fetchRankings();
  }, []);

  return (
    <div className="ranking-container">
      <div className="rankings">
        <div className="ranking-list">
          <h2>여성 순위</h2>
          <ol>
            {femaleRankings.length > 0 ? (
              femaleRankings.slice(0, 5).map((ranking, index) => (
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
              ))
            ) : (
              <p>여성 순위가 없습니다.</p>
            )}
          </ol>
        </div>
        <div className="ranking-list">
          <h2>남성 순위</h2>
          <ol>
            {maleRankings.length > 0 ? (
              maleRankings.slice(0, 5).map((ranking, index) => (
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
              ))
            ) : (
              <p>남성 순위가 없습니다.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SexRankingView;