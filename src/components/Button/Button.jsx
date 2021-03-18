import React from 'react';
import PropTypes from 'prop-types'; // ES6
import clsx from 'clsx';
import './Button.scss';

const Button = ({
  type = 'button',
  size = 'normal',
  variant = 'filled',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'button',
        size === 'small' && 'button--small',
        size === 'large' && 'button--large',
        variant === 'filled' && 'button--filled',
        variant === 'outlined' && 'button--outlined',
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['normal', 'small', 'large']),
  variant: PropTypes.oneOf(['outlined', 'filled']),
};

export default Button;
