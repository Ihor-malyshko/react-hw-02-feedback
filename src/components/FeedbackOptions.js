import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map(value => (
      <button key={value} name={value} onClick={elm => onLeaveFeedback(elm)}>
        {value}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
