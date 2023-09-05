import React from 'react';
import { StatisticsContainer } from './StatisticsStyled';
import {getRandomHexColor} from './getRandomHexColor'


export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsContainer>
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => {
          return (
            <li key={id} className="stat-item" style={{backgroundColor: getRandomHexColor()}}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </StatisticsContainer>
  );
};
