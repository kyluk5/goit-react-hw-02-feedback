import React from "react";

const FeedbackOptions = ({ feedBack }) => {
  return (
    <>
      <button name="good" onClick={feedBack}>
        Good
      </button>
      <button name="neutral" onClick={feedBack}>
        Neutral
      </button>
      <button name="bad" onClick={feedBack}>
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
