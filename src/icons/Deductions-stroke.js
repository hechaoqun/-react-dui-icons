import React from 'react';
import PropTypes from 'prop-types';

const Deductions = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="none"
      stroke="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M7.554 12h8.89M2.898 16.151A10.004 10.004 0 014.93 4.929a10.004 10.004 0 0111.222-2.03M7.849 21.101a10.004 10.004 0 0011.222-2.03 10.004 10.004 0 002.03-11.222"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Deductions.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Deductions.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Deductions;
