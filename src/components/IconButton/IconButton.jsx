import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.scss';
import clsx from 'clsx';

const IconButton = ({ primary = true, secondary = false, className, children, ...props }) => {
  return (
    <button
      className={clsx(
        'icon-button',
        primary && 'icon-button--primary',
        secondary && 'icon-button--secondary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default IconButton;
