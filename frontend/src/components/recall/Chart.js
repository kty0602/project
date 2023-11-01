import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import '../recall/recall.scss';
import { API_BASE_URL } from '../../lib/api/OAuth';

const Chart = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/recall/data`) // 리콜 데이터 get
      .then((response) => {
        var reasons = [];
        response.data.sort((a, b) => {
          reasons.push(a.reasons);
          return 0; // 반환문 추가
        });

        // 중복 값 갯수
        const result = reasons.reduce((accu, curr) => {
          accu[curr] = (accu[curr] || 0) + 1;
          return accu;
        }, {});

        const sortedData = Object.entries(result) // key, value 쌍의 배열 반환
          .sort(function (a, b) {
            return b[1] - a[1];
          })
          .slice(0, 5);

        let obj = {};
        let list = [];

        for (var i = 0; i < sortedData.length; i++) {
          obj = { name: sortedData[i][0], value: sortedData[i][1] };
          list.push(obj);
        }
        setDatas(list);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const color = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#B4EAD7', '#C7CEEA'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="Black"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        responsive={true}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="chart-container">
        <ResponsiveContainer>
          <PieChart>
            <Legend
              layout="vertical"
              verticalAlign="top"
              // align="top"
              width="100%"
            />
            <Pie
              data={datas}
              cx="50%"
              cy={180}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              fill="#8884d8"
              dataKey="value"
            >
              {datas.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={color[index % color.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;