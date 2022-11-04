import React from 'react';
import PropTypes from 'prop-types';

const Link = props => {
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
        d="M17.928 9.696l1-1.732a4 4 0 00-6.928-4L9 9.161a4 4 0 001.464 5.464M6 14.357l-1 1.732a4 4 0 006.928 4l3-5.196a4 4 0 00-1.464-5.464"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Link.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Link;
