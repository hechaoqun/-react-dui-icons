import React from 'react';
import PropTypes from 'prop-types';

const ArrowFillDown = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <circle cx="12" cy="12" r="12" fill="#111"></circle>
      <path
        d="M15.985 11.25l-4.242 4.243L7.5 11.25"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="square"
      ></path>
    </svg>
  );
};

ArrowFillDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowFillDown.defaultProps = {
  color: 'none',
  size: '24'
};

export default ArrowFillDown;
