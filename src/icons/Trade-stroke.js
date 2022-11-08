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
      className="dui-icon"
      fill="none"
      stroke="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M23 10H3m9 9h7.8c1.12 0 1.68 0 2.108-.218a2 2 0 00.874-.874C23 17.48 23 16.92 23 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C21.48 5 20.92 5 19.8 5H18m-6 14l2 2m-2-2l2-2m-6 2H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C3 17.48 3 16.92 3 15.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 5 5.08 5 6.2 5H14m0 0l-2 2m2-2l-2-2"
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
  color: '#0C0F0F',
  size: '24'
};

export default Trade;
