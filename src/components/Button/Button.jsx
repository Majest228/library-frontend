import React from 'react';
import PropTypes from 'prop-types'; // ES6
import clsx from 'clsx';
import './Button.scss';

const Button = ({ type = 'button', style = 'filled', children, className, ...props }) => {
  return (
    <button
      className={clsx('button', style === 'filled' && 'filled', style === 'outlined' && 'outlined')}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(['outlined', 'filled']),
};

export default Button;
