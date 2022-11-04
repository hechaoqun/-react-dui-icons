import React from 'react';
import PropTypes from 'prop-types';

const CryptoAsset = props => {
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
        d="M20.25 17.5v-1.75a1.75 1.75 0 10-3.5 0v1.75M22 10H2m20 1V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 19 4.08 19 5.2 19H11m5.6 2.5h3.8c.56 0 .84 0 1.054-.109a1 1 0 00.437-.437C22 20.74 22 20.46 22 19.9v-.8c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437c-.214-.109-.494-.109-1.054-.109h-3.8c-.56 0-.84 0-1.054.109a1 1 0 00-.437.437C15 18.26 15 18.54 15 19.1v.8c0 .56 0 .84.109 1.054a1 1 0 00.437.437c.214.109.494.109 1.054.109z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CryptoAsset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoAsset.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default CryptoAsset;
