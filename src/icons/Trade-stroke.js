import React from 'react';
import PropTypes from 'prop-types';

const Trade = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      {...otherProps}
    >
      <path
        d="M22 10H2m9 9h7.8c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C22 17.48 22 16.92 22 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C20.48 5 19.92 5 18.8 5H17m-6 14l2 2m-2-2l2-2m-6 2H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 17.48 2 16.92 2 15.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 5 4.08 5 5.2 5H13m0 0l-2 2m2-2l-2-2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Trade.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Trade.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default Trade;
