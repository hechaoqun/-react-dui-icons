import React from 'react';
import PropTypes from 'prop-types';

const IconArrowUp = props => {
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
        d="M18 15l-6-6-6 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

IconArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconArrowUp.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default IconArrowUp;
