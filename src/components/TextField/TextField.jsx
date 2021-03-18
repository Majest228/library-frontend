import React from 'react';
import clsx from 'clsx';
import './TextField.scss';

const TextField = ({ type = 'text', className, ...props }) => {
  return <input className={clsx('text-field', className)} type={type} {...props} />;
};

export default TextField;