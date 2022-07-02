import React from 'react';
import PropTypes from 'prop-types';

const Unradio = props => {
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
      <circle cx="12" cy="12" r="11" stroke="#00DDD3" strokeWidth="2"></circle>
    </svg>
  );
};

Unradio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Unradio.defaultProps = {
  color: 'none',
  size: '24'
};

export default Unradio;
