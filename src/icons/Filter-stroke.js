import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
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
        d="M3.386 5.667C2.63 4.822 2.25 4.399 2.237 4.04a1 1 0 01.363-.811C2.877 3 3.444 3 4.578 3h14.843c1.134 0 1.702 0 1.979.229a1 1 0 01.362.81c-.014.36-.392.783-1.148 1.628l-5.707 6.377c-.15.169-.226.253-.28.35a1 1 0 00-.103.27c-.024.108-.024.221-.024.447v5.347c0 .196 0 .294-.032.378a.5.5 0 01-.132.196c-.067.06-.158.096-.34.17l-3.4 1.36c-.367.146-.55.22-.698.189a.5.5 0 01-.315-.213c-.083-.126-.083-.324-.083-.72v-6.707c0-.226 0-.339-.024-.446a1 1 0 00-.104-.272c-.054-.096-.13-.18-.28-.349L3.386 5.667z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Filter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Filter.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Filter;
