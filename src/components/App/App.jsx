import React, { Component } from 'react';
import Section from '../../UI/Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

class App extends Component {
  static defaultProps = {
    goodInitialValue: 0,
    neutraInitiallValue: 0,
    badInitialValue: 0,
  };

  state = {
    good: this.props.goodInitialValue,
    neutral: this.props.neutraInitiallValue,
    bad: this.props.badInitialValue,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  onLeaveFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const statsLabel = Object.keys(this.state);
    const onLeaveFeedback = this.onLeaveFeedback;
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedBack" titleSize="h1">
          <FeedbackOptions
            options={statsLabel}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics" titleSize="h2">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given..." />
          )}
        </Section>
      </>
    );
  }
}

export default App;
