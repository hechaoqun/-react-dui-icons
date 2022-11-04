import React from 'react';
import PropTypes from 'prop-types';

const UnexpectedExpenses = props => {
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
        d="M12 8v4m-1.029-9.726l-5 1.33A4 4 0 003 7.47v6.723a4 4 0 001.892 3.399l5 3.1a4 4 0 004.216 0l5-3.1a4 4 0 001.892-3.4V7.47a4 4 0 00-2.971-3.865l-5-1.331a4 4 0 00-2.058 0z"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <circle cx="12" cy="15" r="1"></circle>
    </svg>
  );
};

UnexpectedExpenses.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UnexpectedExpenses.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default UnexpectedExpenses;
