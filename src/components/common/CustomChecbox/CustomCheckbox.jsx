import React from 'react';
import './CustomCheckbox.scss';

export const CustomCheckbox = props => {
  return (
    <div className="custom-checkbox">
      <input {...props} />
      <span class="checkmark"></span>
    </div>
  );
};
