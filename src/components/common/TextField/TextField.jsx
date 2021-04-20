import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './TextField.scss';

export const TextField = ({ type = 'text', size = 'normal', className, ...props }) => {
  return (
    <input
      className={clsx('text-field', size === 'medium' && 'text-field--medium', className)}
      type={type}
      {...props}
    />
  );
};

TextField.propTppes = {
  size: PropTypes.oneOf(['normal', 'medium']),
};
