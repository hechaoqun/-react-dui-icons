import React from 'react';
import PropTypes from 'prop-types';

const CheckCircleOutlinedFill = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      class="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.183 8.081l-5.641 7.822a.852.852 0 01-1.385 0l-3.34-4.629a.215.215 0 01.174-.34h1.256c.274 0 .533.131.694.356l1.907 2.647 4.21-5.84a.857.857 0 01.695-.356h1.256c.174 0 .276.198.174.34z"
        fill="#00DDD3"
      ></path>
    </svg>
  );
};

CheckCircleOutlinedFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CheckCircleOutlinedFill.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default CheckCircleOutlinedFill;
