import React from 'react';
import PropTypes from 'prop-types';

const Asset = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      {...otherProps}
    >
      <path
        d="M16.5 14h.01M3 5v14a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 01-2-2zm0 0a2 2 0 012-2h12m0 11a.5.5 0 11-1 0 .5.5 0 011 0z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Asset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Asset.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default Asset;
