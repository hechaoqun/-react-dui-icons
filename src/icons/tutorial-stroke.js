import React from 'react';
import PropTypes from 'prop-types';

const Tutorial = props => {
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
        d="M3 19.151c2.98-.499 5.959.239 8.938 2.208a.1.1 0 00.119-.005c1.842-1.48 4.984-2.698 8.943-2.203"
        strokeWidth="2"
        strokeLinecap="round"
      ></path>
      <path
        d="M11.594 5.414l.406.18.406-.18.676-.3A18.722 18.722 0 0120.685 3.5c.174 0 .315.14.315.315V15.2a.3.3 0 01-.3.299c-2.698 0-5.37.533-7.862 1.569l-.845.351-1.173-.469A20.287 20.287 0 003.286 15.5.286.286 0 013 15.214v-11.4c0-.173.14-.314.315-.314 2.62 0 5.21.55 7.603 1.614l.676.3z"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

Tutorial.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Tutorial.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Tutorial;
