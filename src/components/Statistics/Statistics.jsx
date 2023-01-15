import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title, Paragraph } from './Statistics.styled';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <Title>Statistics: </Title>

        <Paragraph>Good: {good}</Paragraph>
        <Paragraph>Neutral: {neutral}</Paragraph>
        <Paragraph>Bad: {bad}</Paragraph>
        <Paragraph>Total: {total}</Paragraph>
        <Paragraph>Positive feedback: {positivePercentage}%</Paragraph>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
