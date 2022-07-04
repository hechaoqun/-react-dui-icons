import React from 'react';
import PropTypes from 'prop-types';

const UncheckboxFill = props => {
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
        d="M0 3a3 3 0 013-3h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3z"
        fill="#fff"
      ></path>
      <path
        d="M3 1.5h18v-3H3v3zM22.5 3v18h3V3h-3zM21 22.5H3v3h18v-3zM1.5 21V3h-3v18h3zM3 22.5A1.5 1.5 0 011.5 21h-3A4.5 4.5 0 003 25.5v-3zM22.5 21a1.5 1.5 0 01-1.5 1.5v3a4.5 4.5 0 004.5-4.5h-3zM21 1.5A1.5 1.5 0 0122.5 3h3A4.5 4.5 0 0021-1.5v3zm-18-3A4.5 4.5 0 00-1.5 3h3A1.5 1.5 0 013 1.5v-3z"
        fill="#E6E6E6"
      ></path>
    </svg>
  );
};

UncheckboxFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UncheckboxFill.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default UncheckboxFill;
