import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './ShadowWrapper.scss';

export const ShadowWrapper = ({ className, children }) => (
  <div className={clsx('shadow', className)}>{children}</div>
);

ShadowWrapper.propTypes = {
  className: PropTypes.string,
};
