import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = props => {
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
        fill="#111"
      ></path>
      <path
        d="M9.857 15.215l9.285-9.286 1.43 1.428L9.857 18.07 3.43 11.643l1.428-1.428 5 5z"
        fill="#fff"
      ></path>
    </svg>
  );
};

Checkbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Checkbox.defaultProps = {
  color: 'none',
  size: '24'
};

export default Checkbox;
