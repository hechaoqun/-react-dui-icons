import React from 'react';
import PropTypes from 'prop-types';

const ArrowFillUp = props => {
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
        d="M16.243 13.757L12 9.515l-4.243 4.242"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="square"
      ></path>
    </svg>
  );
};

ArrowFillUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowFillUp.defaultProps = {
  color: 'none',
  size: '24'
};

export default ArrowFillUp;
