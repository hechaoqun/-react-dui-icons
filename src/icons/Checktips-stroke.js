import React from 'react';
import PropTypes from 'prop-types';

const Checktips = props => {
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
        d="M9 9a3 3 0 113.742 2.907c-.401.103-.742.429-.742.843v1.5M12 17v.2m9.998-5.2c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10z"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Checktips.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Checktips.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Checktips;
