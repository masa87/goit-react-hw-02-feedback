import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
  };

  // counter = () => {
  //   this.setState((state, props) => {
  //     ...state,

  //   })
  // }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>Good</li>
          <li>Neutral</li>
          <li>Bad</li>
        </ul>
        <h1>Statistics</h1>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
