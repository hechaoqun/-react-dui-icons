import React from 'react';
import PropTypes from 'prop-types';

const Activities = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      class="dui-icon"
      fill="none"
      stroke="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M9 9h.01M15 15h.01M16 8l-8 8M7.334 3.819a3.832 3.832 0 002.18-.904 3.832 3.832 0 014.972 0c.613.523 1.376.84 2.18.904a3.832 3.832 0 013.515 3.515c.064.804.38 1.567.904 2.18a3.832 3.832 0 010 4.972 3.832 3.832 0 00-.904 2.18 3.832 3.832 0 01-3.515 3.515 3.832 3.832 0 00-2.18.904 3.832 3.832 0 01-4.972 0 3.832 3.832 0 00-2.18-.904 3.832 3.832 0 01-3.515-3.515 3.832 3.832 0 00-.904-2.18 3.832 3.832 0 010-4.972c.523-.613.84-1.376.904-2.18a3.832 3.832 0 013.515-3.515zM9.5 9a.5.5 0 11-1 0 .5.5 0 011 0zm6 6a.5.5 0 11-1 0 .5.5 0 011 0z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Activities.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Activities.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Activities;
