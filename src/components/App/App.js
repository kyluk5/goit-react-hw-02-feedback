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
    this.setState((prevState) => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { total = 0 } = this.countTotalFeedback;
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
        {/* <p>Positive Feedback:{positivePercentage}%</p> */}
      </>
    );
  }
}

export default App;
