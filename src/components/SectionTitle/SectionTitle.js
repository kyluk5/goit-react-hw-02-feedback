import React from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Notification from "../Notification/Notification";
import PropTypes from "prop-types";

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
      {total === 0 && <Notification message={"No feedback given"} />}
      {total > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </section>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  feedBack: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
