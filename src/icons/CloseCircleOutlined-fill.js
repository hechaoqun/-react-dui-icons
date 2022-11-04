import React from 'react';
import PropTypes from 'prop-types';

const CloseCircleOutlinedFill = props => {
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
      <g clipPath="url(#clip0_20_104)">
        <path
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.43 16.559l-1.768-.008L12 13.377l-2.66 3.171-1.77.008a.213.213 0 01-.215-.214c0-.05.02-.1.051-.14l3.485-4.151L7.406 7.9a.215.215 0 01.163-.354l1.771.01L12 10.73l2.66-3.171 1.768-.008c.117 0 .214.094.214.214 0 .051-.019.1-.05.14l-3.48 4.149 3.482 4.151a.215.215 0 01-.163.354z"
          fill="#F74A4C"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_20_104">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CloseCircleOutlinedFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CloseCircleOutlinedFill.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default CloseCircleOutlinedFill;
