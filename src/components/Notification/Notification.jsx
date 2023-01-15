import { Component } from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from './Notification.styled';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <Paragraph>{message}</Paragraph>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
