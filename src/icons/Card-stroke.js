import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
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
        d="M3.794 5.118c0-.731.593-1.324 1.324-1.324h4.236c.731 0 1.324.593 1.324 1.324v4.236c0 .731-.593 1.324-1.324 1.324H5.118a1.324 1.324 0 01-1.324-1.324V5.118zm9.528 0c0-.731.592-1.324 1.323-1.324h4.237c.73 0 1.323.593 1.323 1.324v4.236c0 .731-.592 1.324-1.323 1.324h-4.237a1.324 1.324 0 01-1.323-1.324V5.118zm0 9.527c0-.73.592-1.323 1.323-1.323h4.237c.73 0 1.323.592 1.323 1.323v4.237c0 .73-.592 1.323-1.323 1.323h-4.237a1.324 1.324 0 01-1.323-1.323v-4.237zm-9.528 0c0-.73.593-1.323 1.324-1.323h4.236c.731 0 1.324.592 1.324 1.323v4.237c0 .73-.593 1.323-1.324 1.323H5.118a1.324 1.324 0 01-1.324-1.323v-4.237z"
        strokeWidth="1.589"
      ></path>
    </svg>
  );
};

Card.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Card.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Card;
