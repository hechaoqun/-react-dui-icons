import React from 'react';
import PropTypes from 'prop-types';

const Component2 = props => {
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
      <rect width="24" height="24" fill="#fff" fillOpacity=".01"></rect>
      <path
        d="M12 3a9 9 0 10.001 18.001A9 9 0 0012 3zm3.323 12.42l-1.326-.007L12 13.033l-1.995 2.378-1.328.006a.16.16 0 01-.16-.16c0-.039.014-.075.038-.105l2.613-3.114-2.613-3.112a.161.161 0 01.123-.265l1.327.006L12 11.047l1.995-2.378 1.326-.006c.088 0 .16.07.16.16a.167.167 0 01-.038.105l-2.61 3.112 2.612 3.114a.161.161 0 01-.122.265z"
        fill="#F74A4C"
      ></path>
    </svg>
  );
};

Component2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Component2.defaultProps = {
  color: 'none',
  size: '24'
};

export default Component2;
