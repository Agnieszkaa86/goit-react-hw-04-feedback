import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map(option => {
          return (
            <Button
              type="button"
              key={option}
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </Button>
          );
        })}
      </>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
