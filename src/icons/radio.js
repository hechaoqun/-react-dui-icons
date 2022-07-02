import React from 'react';
import PropTypes from 'prop-types';

const Radio = props => {
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
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="#fff"
        stroke="#00DDD3"
        strokeWidth="7.5"
      ></circle>
    </svg>
  );
};

Radio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Radio.defaultProps = {
  color: 'none',
  size: '24'
};

export default Radio;
