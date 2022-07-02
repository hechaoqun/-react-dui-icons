import React from 'react';
import PropTypes from 'prop-types';

const Search = props => {
  const { color = 'none', size, ...otherProps } = props;
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
        d="M20.125 21l-4.169-4.35M10.542 6c2.646 0 4.791 2.239 4.791 5m2.875 0c0 4.418-3.432 8-7.666 8-4.235 0-7.667-3.582-7.667-8s3.432-8 7.667-8c4.234 0 7.666 3.582 7.666 8z"
        stroke="#111"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Search.defaultProps = {
  color: 'none',
  size: '24'
};

export default Search;
