import React from 'react';
import PropTypes from 'prop-types';

const TalkWhite = props => {
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
        d="M12.058 6.03c3.619 0 6.553 2.286 6.553 5.107s-2.934 5.108-6.553 5.108c-.36 0-.72-.023-1.078-.069l-2.751 1.8c-.313.165-.423.147-.295-.258l.557-2.296c-1.797-.91-2.986-2.49-2.986-4.285 0-2.82 2.934-5.108 6.553-5.108zm3.686 5.03l.918-.89a.294.294 0 00-.41-.422l-1.203 1.164V9.95a.294.294 0 10-.589 0v1.596a.293.293 0 000 .138v.898a.294.294 0 10.59 0v-.85l.266-.258.89 1.269a.293.293 0 00.306.118.293.293 0 00.226-.237.296.296 0 00-.049-.22l-.945-1.345zm-1.846 1.2h-.91v-2.3a.295.295 0 00-.59 0v2.595c0 .162.132.294.295.294h1.205a.295.295 0 000-.589zm-3.655-.681l.434-1.066.399 1.066h-.833zm1.575.304v-.01a.292.292 0 00-.079-.2l-.652-1.747a.43.43 0 00-.392-.296.434.434 0 00-.407.28L9.25 12.451a.295.295 0 00.546.223l.206-.507h1.292l.186.5a.296.296 0 00.382.18.296.296 0 00.17-.387l-.215-.578zm-2.074-1.92a.295.295 0 00-.294-.295H7.425a.295.295 0 000 .589h.724v2.332a.295.295 0 00.59 0v-2.332h.71a.295.295 0 00.295-.295z"
        fill="#000"
      ></path>
    </svg>
  );
};

TalkWhite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

TalkWhite.defaultProps = {
  // color: 'currentColor',
  color: '#111',
  size: '24'
};

export default TalkWhite;
