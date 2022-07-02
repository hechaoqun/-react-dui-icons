import React from 'react';
import PropTypes from 'prop-types';

const Auction = props => {
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
        d="M12.305 2.044l7.172 7.084"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M13.761 12.967l6.553 6.554"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M3.202 11.146l7.007 7.33"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M13.761 3.5l-9.102 9.103"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M18.494 8.234l-9.102 9.102"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M3 22h10.298"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Auction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Auction.defaultProps = {
  color: 'none',
  size: '24'
};

export default Auction;
