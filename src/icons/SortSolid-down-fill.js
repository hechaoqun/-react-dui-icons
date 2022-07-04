import React from 'react';
import PropTypes from 'prop-types';

const SortSolidDownFill = props => {
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
        d="M17.598 13.6H6.402c-.336 0-.524.314-.316.528l5.598 5.749c.16.164.468.164.63 0l5.598-5.749c.208-.214.02-.528-.316-.528z"
        fill="#111"
      ></path>
      <path
        d="M17.913 9.872l-5.598-5.749a.465.465 0 00-.63 0L6.087 9.872c-.208.214-.02.528.316.528h11.195c.335 0 .523-.314.315-.528z"
        fill="#CCC"
      ></path>
    </svg>
  );
};

SortSolidDownFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SortSolidDownFill.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default SortSolidDownFill;
