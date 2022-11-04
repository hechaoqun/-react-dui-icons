import React from 'react';
import PropTypes from 'prop-types';

const TelegramBlack = props => {
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
      <rect width="24" height="24" rx="12"></rect>
      <path
        d="M6.677 11.574s4.883-2.056 6.576-2.78c.65-.29 2.85-1.217 2.85-1.217s1.017-.406.932.58c-.028.405-.254 1.824-.48 3.36-.338 2.172-.705 4.547-.705 4.547s-.057.666-.537.782c-.48.116-1.27-.406-1.41-.522-.114-.087-2.118-1.39-2.851-2.027-.198-.174-.424-.522.028-.927 1.016-.956 2.23-2.143 2.963-2.897.339-.347.678-1.158-.734-.173a240.426 240.426 0 01-3.98 2.751s-.45.29-1.297.03c-.847-.261-1.835-.609-1.835-.609s-.677-.434.48-.898z"
        fill="#fff"
      ></path>
    </svg>
  );
};

TelegramBlack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TelegramBlack.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default TelegramBlack;
