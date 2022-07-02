import React from 'react';
import PropTypes from 'prop-types';

const InsWhite = props => {
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
      <rect width="24" height="24" rx="12" fill="#fff"></rect>
      <path
        d="M10.003 12.03a2.001 2.001 0 114.003 0 2.001 2.001 0 01-4.003 0zm-1.082 0a3.083 3.083 0 106.166.002 3.083 3.083 0 00-6.166-.001zm5.567-3.205a.721.721 0 10.72-.72.72.72 0 00-.72.72zm-4.91 8.094c-.585-.027-.903-.124-1.115-.207-.28-.109-.48-.239-.69-.449-.21-.21-.34-.41-.45-.69-.082-.212-.18-.53-.206-1.115-.029-.633-.035-.824-.035-2.427 0-1.604.007-1.794.035-2.427.027-.586.125-.903.207-1.115.109-.28.239-.48.449-.691.21-.21.41-.34.69-.45.212-.082.53-.18 1.115-.206.633-.029.823-.035 2.426-.035 1.602 0 1.793.007 2.426.035.585.027.903.125 1.115.207.28.108.48.239.69.449.21.21.34.41.45.69.082.212.18.53.206 1.116.029.633.035.823.035 2.427 0 1.603-.006 1.793-.035 2.427-.027.585-.125.903-.207 1.115-.109.28-.239.48-.449.69-.21.21-.41.34-.69.45-.212.082-.53.18-1.115.206-.633.029-.823.035-2.426.035-1.604 0-1.793-.006-2.426-.035zm-.05-10.857c-.639.029-1.075.13-1.457.279-.395.153-.73.359-1.063.692-.334.334-.54.67-.693 1.064-.148.382-.25.819-.279 1.458-.03.64-.036.845-.036 2.476 0 1.63.007 1.835.036 2.476.03.639.13 1.075.28 1.457.153.395.358.73.692 1.064.334.334.668.539 1.063.693.382.148.818.25 1.457.279.64.029.845.036 2.476.036 1.63 0 1.835-.007 2.475-.036.639-.03 1.075-.13 1.457-.28.395-.153.73-.358 1.064-.692.334-.334.538-.669.692-1.064.148-.382.25-.818.279-1.457.029-.641.036-.845.036-2.476S18 10.195 17.97 9.555c-.03-.64-.13-1.076-.279-1.458A2.953 2.953 0 0017 7.033a2.938 2.938 0 00-1.063-.692c-.383-.149-.82-.25-1.458-.28-.64-.028-.845-.036-2.475-.036-1.63 0-1.835.007-2.476.037z"
        fill="url(#paint0_linear_37_1711)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_37_1711"
          x1="17.776"
          y1="18.036"
          x2="5.765"
          y2="6.029"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBE18A"></stop>
          <stop offset=".21" stopColor="#FCBB45"></stop>
          <stop offset=".38" stopColor="#F75274"></stop>
          <stop offset=".52" stopColor="#D53692"></stop>
          <stop offset=".74" stopColor="#8F39CE"></stop>
          <stop offset="1" stopColor="#5B4FE9"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

InsWhite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

InsWhite.defaultProps = {
  color: 'none',
  size: '24'
};

export default InsWhite;
