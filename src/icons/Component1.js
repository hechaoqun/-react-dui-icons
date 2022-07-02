import React from 'react';
import PropTypes from 'prop-types';

const Component1 = props => {
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
        d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zm-.857 6.214c0-.118.096-.214.214-.214h1.286c.118 0 .214.096.214.214V17.5a.215.215 0 01-.214.214h-1.286a.215.215 0 01-.214-.214v-7.286zM16 22a1.286 1.286 0 010-2.571A1.286 1.286 0 0116 22z"
        fill="#FF801A"
      ></path>
    </svg>
  );
};

Component1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Component1.defaultProps = {
  color: 'none',
  size: '24'
};

export default Component1;
