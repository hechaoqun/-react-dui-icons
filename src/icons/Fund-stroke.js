import React from 'react';
import PropTypes from 'prop-types';

const Fund = props => {
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
        d="M7 2H6a3 3 0 00-3 3v13.5a3 3 0 003 3h13a3 3 0 003-3V5a3 3 0 00-3-3h-1M3.5 7h18M11 2h3m4 9.5l-3.646 3.646a.5.5 0 01-.708 0l-2.292-2.292a.5.5 0 00-.708 0L7.5 16"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Fund.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Fund.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Fund;
