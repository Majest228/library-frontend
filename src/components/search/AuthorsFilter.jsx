import React from 'react';
import { Filter } from './Filter';
import { getAuthorsDictionary } from 'api';

const sortItems = (a, b) => a.fullName.localeCompare(b.fullName);

const renderItem = entry => (
  <>
    {entry.fullName} ({entry.booksCount})
  </>
);

export const AuthorsFilter = ({ name }) => (
  <Filter
    name={name}
    title="Автор"
    placeholder="Введите автора"
    notFound="Мы не нашли авторов по Вашему запросу"
    getEntries={getAuthorsDictionary}
    sortItems={sortItems}
    renderItem={renderItem}
  />
);
