import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { TextField } from 'components/common/TextField';
import { getYearsOfPublicationRange } from 'api';
import './FilterStyles.scss';

export const YearsFilter = ({ name }) => {
  const [yearsRange, setYearsRange] = useState({ min: undefined, max: undefined });
  const [field, , helpers] = useField(name);

  useEffect(() => {
    getYearsOfPublicationRange().then(response => setYearsRange(response.data));
  }, []);

  const handleChange = event => {
    helpers.setValue({
      ...field.value,
      [event.target.name]: parseInt(event.target.value) || '',
    });
  };

  const handleBlur = event => {
    const { name } = event.target;

    if (name === 'from' && field.value.from !== '') {
      helpers.setValue({
        ...field.value,
        [name]: Math.max(
          yearsRange.min,
          Math.min(field.value.from, field.value.to || yearsRange.max)
        ),
      });
    }

    if (name === 'to') {
      helpers.setValue({
        ...field.value,
        [name]: Math.min(
          yearsRange.max,
          Math.max(field.value.to, field.value.from || yearsRange.min)
        ),
      });
    }
  };

  return (
    <div className="block">
      <p className="block__title">Год публикации</p>
      <div className="block__columns">
        <label className="block__control">
          <span className="block__control-label">С</span>
          <TextField
            className="block__field"
            size="medium"
            name="from"
            value={field.value.from}
            placeholder={yearsRange.min}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
        <label className="block__control">
          <span className="block__control-label">По</span>
          <TextField
            className="block__field"
            size="medium"
            name="to"
            value={field.value.to}
            placeholder={yearsRange.max}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </label>
      </div>
    </div>
  );
};
