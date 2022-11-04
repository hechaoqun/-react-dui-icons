import React from 'react';
import PropTypes from 'prop-types';

const Compass = props => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.722 8.266c.489-.163.733-.244.895-.186a.5.5 0 01.303.303c.058.162-.023.406-.186.895l-1.488 4.463c-.046.139-.07.208-.109.266a.5.5 0 01-.13.13c-.058.04-.127.063-.266.11l-4.463 1.487c-.489.163-.733.244-.895.186a.5.5 0 01-.303-.303c-.058-.162.023-.406.186-.895l1.488-4.463c.046-.139.07-.208.109-.266a.5.5 0 01.13-.13c.058-.04.127-.063.266-.11l4.463-1.487z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Compass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Compass.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Compass;
