import React from 'react';
import PropTypes from 'prop-types';

const Nested = props => {
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
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="1.5"
        fill="#F8F8F8"
        stroke="#E6E6E6"
      ></rect>
      <path
        d="M8 12h8"
        stroke="#999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 8v8"
        stroke="#999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Nested.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Nested.defaultProps = {
  color: 'none',
  size: '24'
};

export default Nested;
