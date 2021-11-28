import React, { Component } from "react";
import styles from "./Feedback.module.css";

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
      <div className={styles.container}>
        <h1 className={styles.title}>Please leave feedback</h1>
        <ul className={styles.btn_list}>
          <li className={styles.btn_listItem}>Good</li>
          <li className={styles.btn_listItem}>Neutral</li>
          <li className={styles.btn_listItem}>Bad</li>
        </ul>
        <h1>Statistics</h1>
        <ul className={styles.counter_list}>
          <li className={styles.counter_listItem}>Good: {good}</li>
          <li className={styles.counter_listItem}>Neutral: {neutral}</li>
          <li className={styles.counter_listItem}>Bad: {bad}</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
