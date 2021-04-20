import React from 'react';
import { Formik } from 'formik';
import { AuthorsFilter } from 'components/search/AuthorsFilter';
import { GenresFilter } from 'components/search/GenresFilter';
import './FilterBlock.scss';

const initialValues = {
  authors: [],
  genres: [],
};

export const FilterBlock = () => {
  return (
    <Formik initialValues={initialValues}>
      {({ values }) => (
        <div
          className="container"
          style={{
            backgroundColor: '#EDF6FC',
            marginTop: 50,
            marginBottom: 50,
            padding: 20,
          }}
        >
          <pre>{JSON.stringify(values, null, 2)}</pre>
          <AuthorsFilter name="authors" />
          <GenresFilter name="genres" />
        </div>
      )}
    </Formik>
  );
};
