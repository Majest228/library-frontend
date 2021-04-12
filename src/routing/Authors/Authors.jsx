import React, { useEffect, useState } from 'react';
import { AuthorCard } from 'components/AuthorCard';
import { useRouteMatch } from 'react-router';
import { getAuthors } from 'api';
import { ShadowWrapper } from 'components/ShadowWrapper';
import './Authors.scss';

export const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(response => {
      setAuthors(response.data || []);
    });
  }, []);

  return (
    <ShadowWrapper className="author-page container">
      {authors.map(author => (
        <AuthorCard author={author} key={author.id} />
      ))}
    </ShadowWrapper>
  );
};
