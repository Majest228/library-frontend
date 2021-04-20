import React from 'react';
import { FilterWithSearch } from './FilterWithSearch';
import { getAuthorsDictionary } from 'api';

const sortItems = (a, b) => a.fullName.localeCompare(b.fullName);

const renderItem = entry => (
  <>
    {entry.fullName} ({entry.booksCount})
  </>
);

export const AuthorsFilter = ({ name }) => (
  <FilterWithSearch
    name={name}
    title="Авторы"
    placeholder="Введите автора"
    notFound="Мы не нашли авторов по Вашему запросу"
    getEntries={getAuthorsDictionary}
    sortItems={sortItems}
    renderItem={renderItem}
  />
);
