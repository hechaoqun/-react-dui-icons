import React from 'react';
import PropTypes from 'prop-types';

const PriceIncreaseFill = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.657 12.343L12 6.686l-5.657 5.657H10V19h4v-6.657h3.657z"
        fill="url(#paint0_linear_151_34)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_151_34"
          x1="12"
          y1="6.686"
          x2="12"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".589" stopColor="#3AC181"></stop>
          <stop offset="1" stopColor="#3AC181" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

PriceIncreaseFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PriceIncreaseFill.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default PriceIncreaseFill;
