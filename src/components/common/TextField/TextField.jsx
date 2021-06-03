import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './TextField.scss';

export const TextField = ({
  type = 'text',
  size = 'normal',
  variant = 'outlined',
  className,
  ...props
}) => {
  return (
    <input
      className={clsx(
        'text-field',
        size === 'medium' && 'text-field--medium',
        variant === 'outlined' && 'text-field--outlined',
        variant === 'underlined' && 'text-field--underlined',
        className
      )}
      type={type}
      {...props}
    />
  );
};

TextField.propTppes = {
  size: PropTypes.oneOf(['normal', 'medium']),
  variant: PropTypes.oneOf(['outlined', 'underlined']),
};
