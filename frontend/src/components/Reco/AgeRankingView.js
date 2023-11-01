import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AgeRankingView.css';

const AgeRankingView = () => {
  const [ageRankings, setAgeRankings] = useState({
    '20': [],
    '30': [],
    '40': [],
    '50': [],
    '60': []
  });

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/view/ageRank');
        setAgeRankings(response.data);
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
        {ageRankings && (
          <>
            <div className="ranking-list">
              <h2>20대 순위</h2>
              <ol>
                {ageRankings['20'].length > 0 ? (
                  ageRankings['20'].slice(0, 5).map((ranking, index) => (
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
                  <p>20대 순위가 없습니다.</p>
                )}
              </ol>
            </div>
            <div className="ranking-list">
              <h2>30대 순위</h2>
              <ol>
                {ageRankings['30'].length > 0 ? (
                  ageRankings['30'].slice(0, 5).map((ranking, index) => (
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
                  <p>30대 순위가 없습니다.</p>
                )}
              </ol>
            </div>
            <div className="ranking-list">
              <h2>40대 순위</h2>
              <ol>
                {ageRankings['40'].length > 0 ? (
                  ageRankings['40'].slice(0, 5).map((ranking, index) => (
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
                  <p>40대 순위가 없습니다.</p>
                )}
              </ol>
            </div>
            <div className="ranking-list">
              <h2>50대 순위</h2>
              <ol>
                {ageRankings['50'].length > 0 ? (
                  ageRankings['50'].slice(0, 5).map((ranking, index) => (
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
                  <p>50대 순위가 없습니다.</p>
                )}
              </ol>
            </div>
            <div className="ranking-list">
              <h2>60대 순위</h2>
              <ol>
                {ageRankings['60'].length > 0 ? (
                  ageRankings['60'].slice(0, 5).map((ranking, index) => (
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
                  <p>60대 순위가 없습니다.</p>
                )}
              </ol>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AgeRankingView;