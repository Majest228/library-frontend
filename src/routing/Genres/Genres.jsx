import React, { useEffect, useState } from 'react';
import { TextField } from 'components/common/TextField';
import { ShadowWrapper } from 'components/ShadowWrapper';
import { GenreItem } from 'components/GenreItem';
import { has } from 'utils';
import { getGenres } from 'api';
import './Genres.scss';

export const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState('');

  const filteredGenres = genres.filter(genre => has(genre.name, search));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getGenres().then(response => {
      setGenres(response.data || []);
    });
  }, []);

  const searchChange = event => {
    setSearch(event.target.value);
  };

  return (
    <ShadowWrapper className="genres-page container">
      <TextField
        className="genres__search"
        placeholder="Начните поиск"
        value={search}
        onChange={searchChange}
      />
      {genres.length !== 0 ? (
        filteredGenres.length !== 0 ? (
          filteredGenres.map(genre => <GenreItem genre={genre} key={genre.id} />)
        ) : (
          <div className="genres-page__warning">Совпадений не найденно</div>
        )
      ) : null}
    </ShadowWrapper>
  );
};
