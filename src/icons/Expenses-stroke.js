import React from 'react';
import PropTypes from 'prop-types';

const Expenses = props => {
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
        d="M8.999 10.5l2 2 4.5-4.5m4.5 13V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C17.719 3 16.879 3 15.199 3h-6.4c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311c-.327.642-.327 1.482-.327 3.162V21l2.75-2 2.5 2 2.75-2 2.75 2 2.5-2 2.75 2z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Expenses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Expenses.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Expenses;
