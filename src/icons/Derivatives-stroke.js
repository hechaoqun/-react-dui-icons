import React from 'react';
import PropTypes from 'prop-types';

const Derivatives = props => {
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
      <g clipPath="url(#clip0_247_36)" strokeWidth="2" strokeLinecap="round">
        <path d="M19.5 7h1a2 2 0 012 2v10.5a2 2 0 01-2 2h-1"></path>
        <path d="M6 10h6m-6 5h6M4 3h6a6 6 0 016 6v11a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_247_36">
          <rect
            width="24"
            height="24"
            fill="#fff"
            transform="rotate(90 12 12)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Derivatives.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Derivatives.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Derivatives;
