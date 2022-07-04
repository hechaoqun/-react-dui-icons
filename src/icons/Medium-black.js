import React from 'react';
import PropTypes from 'prop-types';

const MediumBlack = props => {
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
      <rect width="24" height="24" rx="12" fill="#000"></rect>
      <path
        d="M12.863 12.322c0 2.055-1.694 3.723-3.792 3.723S5.28 14.377 5.28 12.322c0-2.055 1.694-3.723 3.792-3.723s3.792 1.668 3.792 3.723zm4.154 0c0 1.932-.85 3.501-1.896 3.501-1.045 0-1.896-1.57-1.896-3.501 0-1.932.851-3.501 1.896-3.501s1.896 1.561 1.896 3.5zm1.702 0c0 1.734-.295 3.14-.665 3.14-.371 0-.666-1.406-.666-3.14 0-1.734.295-3.14.666-3.14.37 0 .665 1.406.665 3.14z"
        fill="#fff"
      ></path>
    </svg>
  );
};

MediumBlack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

MediumBlack.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default MediumBlack;
