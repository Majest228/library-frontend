import React, { useEffect, useState } from 'react';
import { TextField } from 'components/common/TextField';
import { ShadowWrapper } from 'components/ShadowWrapper';
import { AuthorCard } from 'components/AuthorCard';
import { has } from 'utils';
import { getAuthors } from 'api';
import './Authors.scss';

export const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [search, setSearch] = useState('');

  const filteredAuthors = authors.filter(author => has(author.fullName, search));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getAuthors().then(response => {
      setAuthors(response.data || []);
    });
  }, []);

  const searchChange = event => {
    setSearch(event.target.value);
  };

  return (
    <ShadowWrapper className="author-page container">
      <TextField
        className="author__search"
        placeholder="Начните поиск"
        value={search}
        onChange={searchChange}
      />
      {filteredAuthors.map(author => (
        <AuthorCard author={author} key={author.id} />
      ))}
    </ShadowWrapper>
  );
};
