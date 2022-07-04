import React from 'react';
import PropTypes from 'prop-types';

const ExclamationCircleOutlinedFill = props => {
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
      <path
        d="M12 3a9 9 0 10.001 18.001A9 9 0 0012 3zm-.643 4.66c0-.088.073-.16.16-.16h.965c.088 0 .16.072.16.16v5.465c0 .088-.072.16-.16.16h-.964a.161.161 0 01-.16-.16V7.661zM12 16.5a.965.965 0 010-1.929.965.965 0 010 1.929z"
        fill="#FF801A"
      ></path>
    </svg>
  );
};

ExclamationCircleOutlinedFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ExclamationCircleOutlinedFill.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default ExclamationCircleOutlinedFill;
