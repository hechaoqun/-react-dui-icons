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
      fill={color}
      {...otherProps}
    >
      <path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 7.5c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#00DDD3"
      ></path>
    </svg>
  );
};

RadioFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RadioFill.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default RadioFill;
