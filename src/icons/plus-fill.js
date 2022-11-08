import React from 'react';
import PropTypes from 'prop-types';

const PlusFill = props => {
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
      <path
        d="M2.5 4A1.5 1.5 0 014 2.5h16A1.5 1.5 0 0121.5 4v16a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 20V4z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM4 2a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V4a2 2 0 00-2-2H4z"
        fill="#9DA0A0"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 12a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z"
        fill="#9DA0A0"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7a1 1 0 011 1v8a1 1 0 11-2 0V8a1 1 0 011-1z"
        fill="#9DA0A0"
      ></path>
    </svg>
  );
};

PlusFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PlusFill.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default PlusFill;
