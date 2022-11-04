import React from 'react';
import PropTypes from 'prop-types';

const Download = props => {
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
      <g clipPath="url(#clip0_242_26)">
        <path
          d="M12.2 2.15v13.69m0 0l6.845-6.845M12.2 15.839L5.356 8.995M22.1 15.9v1.75c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874c-.428.218-.988.218-2.108.218H5.5c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2.3 19.331 2.3 18.77 2.3 17.65V15.9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_242_26">
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

Download.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Download.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Download;
