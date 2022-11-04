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
      class="dui-icon"
      fill="none"
      stroke="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M12.305 2.044l7.172 7.084"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M13.761 12.967l6.553 6.554"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M3.202 11.146l7.007 7.33"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M13.761 3.5l-9.102 9.103"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M18.494 8.234l-9.102 9.102"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path d="M3 22h10.298" strokeWidth="2" strokeLinecap="round"></path>
    </svg>
  );
};

Auction.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Auction.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Auction;
