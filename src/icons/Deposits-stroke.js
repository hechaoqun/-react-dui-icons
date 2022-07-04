import React from 'react';
import PropTypes from 'prop-types';

const Deposits = props => {
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
        d="M16 18l2 2 4-4m0-6H2m20 2V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 00-.874.874C2 6.52 2 7.08 2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 00.874.874C3.52 19 4.08 19 5.2 19H12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Deposits.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Deposits.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default Deposits;
