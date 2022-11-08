import React from 'react';
import PropTypes from 'prop-types';

const RadioFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <rect x="1" y="1" width="22" height="22" rx="11" strokeWidth="2"></rect>
      <rect x="6" y="6" width="12" height="12" rx="6" fill="#00DDD3"></rect>
    </svg>
  );
};

RadioFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RadioFill.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default RadioFill;
