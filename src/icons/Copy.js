import React from 'react';
import PropTypes from 'prop-types';

const Copy = props => {
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
        d="M10.5 2.003c-.675.009-1.08.048-1.408.215a2 2 0 00-.874.874c-.167.328-.206.733-.215 1.408M19.5 2.003c.675.009 1.08.048 1.408.215a2 2 0 01.874.874c.167.328.206.733.215 1.408m0 9c-.009.675-.048 1.08-.215 1.408a2 2 0 01-.874.874c-.328.167-.733.206-1.408.215M22 8v2m-8-8h2M5.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C16 20.48 16 19.92 16 18.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C14.48 8 13.92 8 12.8 8H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C2 9.52 2 10.08 2 11.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 22 4.08 22 5.2 22z"
        stroke="#111"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Copy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Copy.defaultProps = {
  color: 'none',
  size: '24'
};

export default Copy;
