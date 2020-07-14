import React, { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item);
  };

  countPositiveFeedbackPercentage = (totalV, PosV) => {
    return ((PosV / totalV) * 100).toFixed(1);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );

    return (
      <>
        <h2>Please Leave Feedback</h2>
        <button onClick={this.goodFeedback}>Good</button>
        <button onClick={this.neutralFeedback}>Neutral</button>
        <button onClick={this.badFeedback}>Bad</button>
        <h3>Statistics</h3>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positive Feedback:{positivePercentage}%</p>
      </>
    );
  }
}

export default App;
