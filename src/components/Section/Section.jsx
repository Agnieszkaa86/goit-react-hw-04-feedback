import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <Title>{title}</Title>
        {children}
      </section>
    );
  }
}
Section.propTypes = { title: PropTypes.string, children: PropTypes.node };
export default Section;
