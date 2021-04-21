import React from 'react';
import { Filter } from './Filter';
import { getAgeLimitsDictionary } from 'api';

const sortItems = (a, b) => a.id - b.id;

const renderItem = entry => (
  <>
    {entry.age} ({entry.booksCount})
  </>
);

export const AgeLimitFilter = ({ name }) => {
  return (
    <Filter
      name={name}
      title="Возрастное ограничение"
      getEntries={getAgeLimitsDictionary}
      sortItems={sortItems}
      renderItem={renderItem}
      disableSearch
    />
  );
};
