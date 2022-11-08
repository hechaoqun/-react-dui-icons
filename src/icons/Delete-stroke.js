import React from 'react';
import PropTypes from 'prop-types';

const Delete = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="none"
      stroke="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M17 9l-6 6m0-6l6 6M2.72 12.96l4.32 5.76c.352.47.528.704.751.873.198.15.421.262.66.33C8.72 20 9.013 20 9.6 20h7.6c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C22 17.72 22 16.88 22 15.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C19.72 4 18.88 4 17.2 4H9.6c-.587 0-.88 0-1.15.077a2 2 0 00-.659.33c-.223.169-.399.404-.751.873l-4.32 5.76c-.258.344-.387.516-.437.705a1 1 0 000 .51c.05.189.179.36.437.705z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Delete.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Delete;
