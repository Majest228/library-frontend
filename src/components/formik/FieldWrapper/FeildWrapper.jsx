import React from 'react';
import './FieldWrapper.scss';

export const FieldWrapper = ({ children, touched, error }) => {
  return (
    <div className="field-wrapper">
      {children}
      {touched && error !== undefined && <span className="field-wrapper__error">{error}</span>}
    </div>
  );
};
