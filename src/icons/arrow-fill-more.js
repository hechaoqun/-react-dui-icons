import React from 'react';
import PropTypes from 'prop-types';

const ArrowFillMore = props => {
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
      <circle cx="12" cy="12" r="12" fill="#111"></circle>
      <path
        d="M10.993 7.757L15.235 12l-4.242 4.243"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="square"
      ></path>
    </svg>
  );
};

ArrowFillMore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowFillMore.defaultProps = {
  color: 'none',
  size: '24'
};

export default ArrowFillMore;
