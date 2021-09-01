import React, { useState } from 'react';
import Section from '../../UI/Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Title from '../Title';

const App = ({
  goodInitialValue = 0,
  neutraInitiallValue = 0,
  badInitialValue = 0,
}) => {
  const [good, setGood] = useState(goodInitialValue);
  const [neutral, setNeutral] = useState(neutraInitiallValue);
  const [bad, setBad] = useState(badInitialValue);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const statsLabelArray = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <>
      <Section>
        <Title title="Please leave feedBack" titleSize="h1" />
        <FeedbackOptions
          options={statsLabelArray}
          onLeaveFeedback={onLeaveFeedback}
        />

        <Title title="Statistics" titleSize="h2" />
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
};

export default App;
