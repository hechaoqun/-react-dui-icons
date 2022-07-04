import React from 'react';
import PropTypes from 'prop-types';

const ArrowMoreFill = props => {
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
        d="M10.993 6.343L16.649 12l-5.656 5.657-1.415-1.414L13.821 12 9.578 7.757l1.415-1.414z"
        fill="#fff"
      ></path>
    </svg>
  );
};

ArrowMoreFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ArrowMoreFill.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default ArrowMoreFill;
