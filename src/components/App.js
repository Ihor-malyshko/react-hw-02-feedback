import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

class Counter extends Component {
  // static defaultProps = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeStatistics = elm => {
    elm.persist();
    let nameBtn = elm.target.name;
    this.setState(preState => {
      return { [nameBtn]: preState[nameBtn] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return ((100 * this.state.good) / this.countTotalFeedback()).toFixed(2);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.changeStatistics}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

function App() {
  return <Counter />;
}

export default App;
