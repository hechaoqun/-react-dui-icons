import React from 'react';
import PropTypes from 'prop-types';

const Bid = props => {
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
      <path
        d="M13 5c0 1.105-2.462 2-5.5 2S2 6.105 2 5m11 0c0-1.105-2.462-2-5.5-2S2 3.895 2 5m11 0v1.5M2 5v12c0 1.105 2.462 2 5.5 2m0-8c-.169 0-.335-.003-.5-.008C4.197 10.9 2 10.043 2 9m5.5 6C4.462 15 2 14.105 2 13m20-1.5c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2m11 0c0-1.105-2.462-2-5.5-2s-5.5.895-5.5 2m11 0V19c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2v-7.5m11 3.75c0 1.105-2.462 2-5.5 2s-5.5-.895-5.5-2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Bid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Bid.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default Bid;
