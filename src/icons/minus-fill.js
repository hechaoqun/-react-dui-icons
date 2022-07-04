import React from 'react';
import PropTypes from 'prop-types';

const MinusFill = props => {
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
      <path
        d="M2 4a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
        fill="#F8F8F8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4z"
        fill="#E6E6E6"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
        fill="#999"
      ></path>
    </svg>
  );
};

MinusFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MinusFill.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default MinusFill;
