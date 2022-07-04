import React from 'react';
import PropTypes from 'prop-types';

const LinkedinWhite = props => {
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
        d="M9.238 16.862V10.38H7.085v6.483h2.153zM8.162 9.494c.75 0 1.218-.498 1.218-1.12-.014-.636-.468-1.12-1.204-1.12-.737 0-1.218.484-1.218 1.12 0 .622.467 1.12 1.19 1.12h.014zm2.268 7.368h2.152v-3.62c0-.193.014-.387.071-.526.156-.387.51-.788 1.105-.788.779 0 1.09.595 1.09 1.466v3.468h2.153v-3.717c0-1.991-1.062-2.918-2.478-2.918-1.161 0-1.671.65-1.955 1.092h.014v-.94H10.43c.028.609 0 6.483 0 6.483z"
        fill="#069"
      ></path>
    </svg>
  );
};

LinkedinWhite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

LinkedinWhite.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default LinkedinWhite;
