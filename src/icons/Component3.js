import React from 'react';
import PropTypes from 'prop-types';

const Component3 = props => {
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
        d="M12 3a9 9 0 10.001 18.001A9 9 0 0012 3zm3.887 6.06l-4.23 5.867a.64.64 0 01-1.04 0l-2.504-3.471a.161.161 0 01.13-.256h.942c.205 0 .4.099.52.268l1.431 1.985 3.158-4.38a.642.642 0 01.52-.267h.943c.13 0 .207.148.13.255z"
        fill="#00DDD3"
      ></path>
    </svg>
  );
};

Component3.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Component3.defaultProps = {
  color: 'none',
  size: '24'
};

export default Component3;
