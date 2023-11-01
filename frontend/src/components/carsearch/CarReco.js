import React from 'react';
import CarCard from './Carcard';

const CarReco = ({ carsReco }) => {
  const contentBlockStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '1280px',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    margin: 'auto',
    padding: '2rem',
  };
  const similarContainer = {
    textAlign: 'center',
    fontSize: '20px',
    margin: '20px 0',
    justifyContent: 'center',
  }

  return (
    <div style ={similarContainer}>
        <p>아래는 검색한 중고차와 비슷한 중고차를 추천합니다!</p>
        <br/>
        <div style={contentBlockStyle}>
        {carsReco.map((car, index) => (
            <CarCard key={index} carData={car.car_info} />
        ))}
        </div>
    </div>
  );
};

export default CarReco;