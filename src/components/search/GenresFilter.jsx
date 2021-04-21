import React from 'react';
import { Filter } from './Filter';
import { getGenresDictionary } from 'api';

const sortItems = (a, b) => a.name.localeCompare(b.name);

const renderItem = entry => (
  <>
    {entry.name} ({entry.booksCount})
  </>
);

export const GenresFilter = ({ name }) => (
  <Filter
    name={name}
    title="Жанры"
    placeholder="Введите жанр"
    notFound="Мы не нашли жанры по Вашему запросу"
    getEntries={getGenresDictionary}
    sortItems={sortItems}
    renderItem={renderItem}
  />
);
