import React from 'react';
import PropTypes from 'prop-types';

const ArrowUpFill = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.657 13.757L12 8.101l-5.657 5.656 1.414 1.415L12 10.929l4.243 4.243 1.414-1.415z"
        fill="#fff"
      ></path>
    </svg>
  );
};

ArrowUpFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowUpFill.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default ArrowUpFill;
