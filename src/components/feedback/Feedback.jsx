import React, { Component } from "react";
import styles from "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 3,
    neutral: 2,
    bad: 2,
    total: 0,
    positive: 0,
  };

  countTotalFeedback = () => {
    this.setState((state) => ({
      ...state,
      total: state.good + state.neutral + state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((state) => ({
      ...state,
      positive: (state.good / state.total) * 100,
    }));
  };

  render() {
    const { good, neutral, bad, total, positive } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <ul className={styles.btn_list}>
          <li
            className={styles.btn_listItem}
            onClick={() => {
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}>
            Good
          </li>
          <li
            className={styles.btn_listItem}
            onClick={() => {
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}>
            Neutral
          </li>
          <li
            className={styles.btn_listItem}
            onClick={() => {
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}>
            Bad
          </li>
        </ul>
        <h1>Statistics</h1>
        <ul className={styles.counter_list}>
          <li className={styles.counter_listItem}>Good: {good}</li>
          <li className={styles.counter_listItem}>Neutral: {neutral}</li>
          <li className={styles.counter_listItem}>Bad: {bad}</li>
          <li className={styles.counter_listItem}>Total: {total}</li>
          <li className={styles.counter_listItem}>
            Positive feedback: {Math.round(positive)}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
