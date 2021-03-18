import React from 'react';
import PropTypes from 'prop-types'; // ES6
import clsx from 'clsx';
import './Button.scss';

const Button = ({ type = 'button', variant = 'filled', children, className, ...props }) => {
  return (
    <button
      className={clsx(
        'button',
        variant === 'filled' && 'filled',
        variant === 'outlined' && 'outlined'
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'filled']),
};

export default Button;
