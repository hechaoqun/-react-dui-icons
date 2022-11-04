import React from 'react';
import PropTypes from 'prop-types';

const Calculator = props => {
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
        d="M6.61 8.813h4.406m1.468 6.609h4.407m-8.078-4.406V6.609M5.14 21.297h13.218a2.938 2.938 0 002.938-2.938V5.141a2.938 2.938 0 00-2.938-2.938H5.141a2.938 2.938 0 00-2.938 2.938v13.218a2.938 2.938 0 002.938 2.938z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Calculator.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Calculator.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Calculator;
