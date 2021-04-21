import React from 'react';
import { Filter } from './Filter';
import { getLanguagesDictionary } from 'api';

const sortItems = (a, b) => a.name.localeCompare(b.name);

const renderItem = entry => (
  <>
    {entry.name} ({entry.booksCount})
  </>
);

export const LanguagesFilter = ({ name }) => {
  return (
    <Filter
      name={name}
      title="Языки"
      placeholder="Введите язык"
      notFound="Мы не нашли языки по Вашему запросу"
      getEntries={getLanguagesDictionary}
      sortItems={sortItems}
      renderItem={renderItem}
    />
  );
};
