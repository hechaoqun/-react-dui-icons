import React from 'react';
import PropTypes from 'prop-types';

const Loading = props => {
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
        d="M12 2.25v2.5M12 18v4M5.75 12h-3.5m19 0h-1.5m-1.293 6.457l-.707-.707m.914-12.334L17.25 6.83M4.922 19.078L7.75 16.25M5.129 5.209L7.25 7.33"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Loading.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Loading.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default Loading;
