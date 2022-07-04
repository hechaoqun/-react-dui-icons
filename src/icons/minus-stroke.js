import React from 'react';
import PropTypes from 'prop-types';

const Minus = props => {
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
      <path d="M6 11h12v2H6v-2z" fill="#111"></path>
    </svg>
  );
};

Minus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Minus.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default Minus;
