import React from 'react';
import PropTypes from 'prop-types';

const ArrowFillBack = props => {
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
        d="M13.243 7.757L9 12l4.243 4.243"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="square"
      ></path>
    </svg>
  );
};

ArrowFillBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowFillBack.defaultProps = {
  color: 'none',
  size: '24'
};

export default ArrowFillBack;
