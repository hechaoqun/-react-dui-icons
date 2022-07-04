import React from 'react';
import PropTypes from 'prop-types';

const ArrowBackFill = props => {
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
        d="M13.243 6.343L7.586 12l5.657 5.657 1.414-1.414L10.414 12l4.243-4.243-1.414-1.414z"
        fill="#fff"
      ></path>
    </svg>
  );
};

ArrowBackFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowBackFill.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default ArrowBackFill;
