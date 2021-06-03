import React from 'react';
import { useField } from 'formik';
import { TextField as DefaultTextField } from 'components/common/TextField';
import { FieldWrapper } from './FieldWrapper';

export const TextField = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <FieldWrapper touched={meta.touched} error={meta.error}>
      <DefaultTextField
        {...props}
        name={name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
    </FieldWrapper>
  );
};
