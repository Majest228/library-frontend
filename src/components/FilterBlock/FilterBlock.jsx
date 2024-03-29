import React from 'react';
import { Formik } from 'formik';
import { AuthorsFilter } from 'components/search/AuthorsFilter';
import { GenresFilter } from 'components/search/GenresFilter';
import { LanguagesFilter } from 'components/search/LanguagesFilter';
import { YearsFilter } from 'components/search/YearsFilter';
import { AgeLimitFilter } from 'components/search/AgeLimitFilter';
import { TypeOfContentFilter } from 'components/search/TypeOfContentFilter';
import BooksLoader from 'components/BooksLoader';
import './FilterBlock.scss';

const initialValues = {
  authors: [],
  genres: [],
  years: { from: '', to: '' },
  ageLimits: [],
  languages: [],
  typeOfContent: [],
};

export const FilterBlock = () => {
  return (
    <div>
      <h2 className="heading">Сортировка</h2>
      <Formik initialValues={initialValues}>
        {({ values }) => (
          <div className="filter-container">
            <AuthorsFilter name="authors" />
            <GenresFilter name="genres" />
            <YearsFilter name="years" />
            <AgeLimitFilter name="ageLimits" />
            <LanguagesFilter name="languages" />
            <TypeOfContentFilter name="typeOfContent" />
            <BooksLoader values={values} />
          </div>
        )}
      </Formik>
    </div>
  );
};
