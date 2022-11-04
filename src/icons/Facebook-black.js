import React from 'react';
import PropTypes from 'prop-types';

const FacebookBlack = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      class="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <rect width="24" height="24" rx="12"></rect>
      <path
        d="M14.936 12.782l.342-2.173H13.17V9.197c0-.594.295-1.175 1.235-1.175h.971v-1.85a11.772 11.772 0 00-1.71-.146c-1.733 0-2.865 1.043-2.865 2.927v1.656H8.88v2.173h1.922v5.255h2.37v-5.255h1.764z"
        fill="#fff"
      ></path>
    </svg>
  );
};

FacebookBlack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

FacebookBlack.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default FacebookBlack;
