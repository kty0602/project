import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactWordcloud from 'react-wordcloud';
import '../recall/recall.scss';
import { API_BASE_URL } from '../../lib/api/OAuth';

const WordCloud = ({ brandData }) => {
  const [recall, setRecall] = useState([]);

  useEffect(() => {
    const dataUrl = `${API_BASE_URL}/recall/wordCloud?carType=${encodeURIComponent(
      brandData,
    )}`;
    axios
      .get(dataUrl)
      .then((response) => {
        const sortedData = response.data
          .sort((a, b) => b.value - a.value)
          .slice(0, 100);
        setRecall(sortedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [brandData]);

  const getRandomColor = () => {
    const colors = [
      '#FF9AA2',
      '#FFB7B2',
      '#FFDAC1',
      '#B4EAD7',
      '#82A3AC',
      '#A9C7C5',
      '#E2CFC9',
      '#FFC98B',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const callbacks = {
    getWordColor: () => getRandomColor(), // 단어 개체를 사용하여 단어 색상 설정
  };

  const options = {
    rotations: 0,
    rotationAngles: 0,
    fontSizes: [20, 70],
    fontFamily: 'Bold',
    fontStyle: 'normal',
    padding: 0,
  };

  const size = recall.map((item) => item.value * 1.0);

  const RecallWordcloud = () => {
    return (
      <div>
        <ReactWordcloud
          callbacks={callbacks}
          options={options}
          size={size}
          words={recall.map((item) => ({ text: item.text, value: item.value }))}
        />
      </div>
    );
  };
  return (
    <div>
      <RecallWordcloud />
    </div>
  );
};

export default WordCloud;