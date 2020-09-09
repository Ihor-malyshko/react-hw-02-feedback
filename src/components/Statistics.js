import React from 'react';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    {total > 0 ? (
      <>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>

        <p>total: {total}</p>
        <p>percentage: {positivePercentage} %</p>
      </>
    ) : (
      <Notification message="No feedback given" />
    )}
  </div>
);

export default Statistics;
