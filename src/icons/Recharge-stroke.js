import React from 'react';
import PropTypes from 'prop-types';

const Recharge = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      class="dui-icon"
      fill="none"
      stroke="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M12 19v2m-9-6v2a2 2 0 002 2h14a2 2 0 002-2v-2m-10.643 0l4.846-5.427a.2.2 0 00-.15-.333H9.945a.2.2 0 01-.15-.333L15.04 3"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Recharge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Recharge.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Recharge;
