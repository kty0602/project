import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WordClude from './WordClude';
import '../recall/recall.scss';
import { API_BASE_URL } from '../../lib/api/OAuth';

const RecallList = () => {
  const [top3, setTop3] = useState([]); // 리콜 상위 데이터 (3)
  const [bottom3, setBottom3] = useState([]); // 리콜 하위 데이터 (3)
  const [selectedModel, setSelectedModel] = useState(null); // 선택된 모델

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/recall/data`) // 리콜 데이터 get
      .then((response) => {
        const data = response.data;

        // reasons 중복 갯수 카운트
        const counts_brand = data.reduce((acc, cur) => {
          acc[cur.brand] = acc[cur.brand] + 1 || 1;
          return acc;
        }, {});

        const counts_model = data.reduce((acc, cur) => {
          acc[cur.model] = acc[cur.model] + 1 || 1;
          return acc;
        }, {});

        // 중복 갯수를 기준으로 내림차순 정렬
        const sorted_brand = Object.keys(counts_brand).sort(
          (a, b) => counts_brand[b] - counts_brand[a],
        );
        const sorted_model = Object.keys(counts_model).sort(
          (a, b) => counts_model[b] - counts_model[a],
        );

        let top3 = []; // 리콜 상위 3개 데이터
        top3[0] = sorted_brand.slice(-3);
        top3[1] = sorted_model.slice(-3);
        console.log(top3[0]);
        console.log(top3[1]);

        let bottom3 = []; // 리콜 하위 3개 데이터
        bottom3[0] = sorted_brand.slice(0, 3);
        bottom3[1] = sorted_model.slice(0, 3);
        console.log(bottom3[0]);
        console.log(bottom3[1]);

        setTop3(top3);
        setBottom3(bottom3);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleModelClick = (brand) => {
    setSelectedModel({ brand });
  };

  useEffect(() => {
    console.log(selectedModel);
  }, [selectedModel]);

  return (
    <div>
      <div className="recall-container">
        <div className="recall-contents-container">
          <div>
            <text className="recall-header-text">상위 Top 3</text>
            {top3[0]?.length > 0 && top3[1]?.length > 0 ? ( // 박스를 클릭하면 해당 모델의 정보가 selectedModel 설정
              top3[0].map((brand, index) => (
                <div key={index} onClick={() => handleModelClick(brand)}>
                  <div className="recall-box">
                    <div className="recall-contents-text">
                      제조사<span>{brand}</span>
                    </div>
                    <div className="recall-contents-text">
                      모델명<span>{top3[1][index]}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>데이터가 없습니다.</p>
            )}
          </div>
          <div>
            <text className="recall-header-text">하위 Top 3</text>
            {bottom3[0]?.length > 0 && bottom3[1]?.length > 0 ? (
              bottom3[0].map((brand, index) => (
                <div key={index} onClick={() => handleModelClick(brand)}>
                  <div className="recall-box">
                    <div className="recall-contents-text">
                      제조사<span>{brand}</span>
                    </div>
                    <div className="recall-contents-text">
                      모델명<span>{bottom3[1][index]}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>데이터가 없습니다.</p>
            )}
          </div>
        </div>
        {selectedModel && ( // WordClude 컴포넌트에 선택된 모델의 제조사(brand) 정보를 전달
          <div className="w-container">
            <WordClude brandData={selectedModel.brand} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecallList;