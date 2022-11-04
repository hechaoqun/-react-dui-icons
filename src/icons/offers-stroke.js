import React from 'react';
import PropTypes from 'prop-types';

const Offers = props => {
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
        d="M14 3.5v2.7c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C16.28 11 17.12 11 18.8 11h2.7m.5 1.988V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C19.72 21 18.88 21 17.2 21H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C4 18.72 4 17.88 4 16.2V7.8c0-1.68 0-2.52.327-3.162a3 3 0 011.311-1.311C6.28 3 7.12 3 8.8 3h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l5.19 5.188c.518.519.777.778.963 1.081.164.269.286.561.36.867.082.346.082.713.082 1.446z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Offers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Offers.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Offers;
