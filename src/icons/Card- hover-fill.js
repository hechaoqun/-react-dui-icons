import React from 'react';
import PropTypes from 'prop-types';

const CardHoverFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <path d="M3 4.929C3 3.863 3.863 3 4.929 3h3.857c1.065 0 1.928.863 1.928 1.929v3.857a1.929 1.929 0 01-1.928 1.928H4.929A1.929 1.929 0 013 8.786V4.929z"></path>
      <path d="M13.286 15.343c0-1.136.92-2.057 2.057-2.057h3.6c1.136 0 2.057.92 2.057 2.057v3.6A2.057 2.057 0 0118.943 21h-3.6a2.057 2.057 0 01-2.057-2.057v-3.6z"></path>
      <path d="M3 15.214c0-1.065.863-1.928 1.929-1.928h3.857c1.065 0 1.928.863 1.928 1.928v3.857A1.929 1.929 0 018.786 21H4.929A1.929 1.929 0 013 19.071v-3.857z"></path>
      <path
        d="M14.02 3.884a1.929 1.929 0 012.408-1.28l3.688 1.13a1.928 1.928 0 011.28 2.408l-1.13 3.688a1.929 1.929 0 01-2.408 1.28L14.17 9.98a1.928 1.928 0 01-1.28-2.408l1.13-3.688z"
        fill="#00DDD3"
      ></path>
    </svg>
  );
};

CardHoverFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CardHoverFill.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default CardHoverFill;
