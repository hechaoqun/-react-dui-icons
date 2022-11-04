import React from 'react';
import PropTypes from 'prop-types';

const Share = props => {
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
        d="M14.147 8S1.783 8 3.098 21.544c.01.106.157.135.193.034.702-1.972 3.01-7.155 10.856-8.078v5.119a.5.5 0 00.884.32l6.506-7.807a.2.2 0 00-.003-.26l-7.212-8.174a.1.1 0 00-.175.066V8z"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Share.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Share;
