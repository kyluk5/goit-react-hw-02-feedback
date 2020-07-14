import React from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";

const SectionTitle = ({
  feedBack,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <section>
      <h2>Please Leave Feedback</h2>
      <FeedbackOptions feedBack={feedBack} />
      <h3>Statistics</h3>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      />
    </section>
  );
};

export default SectionTitle;
