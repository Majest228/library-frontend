import React from 'react';
import { Filter } from './Filter';
import { getTypeOfContentDictionary } from 'api';

const sortItems = (a, b) => a.id - b.id;

const renderItem = entry => (
  <>
    {entry.typeOfContent === 1 ? 'Премиум ' : 'Бесплатно '}({entry.booksCount})
  </>
);

export const TypeOfContentFilter = ({ name }) => {
  return (
    <Filter
      name={name}
      title="Тип контента"
      getEntries={getTypeOfContentDictionary}
      sortItems={sortItems}
      renderItem={renderItem}
      disableSearch
    />
  );
};
