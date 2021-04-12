import React, { useEffect, useState } from 'react';
import { BookView } from 'components/BookView';
import { FallbackMessage } from 'components/common/FallbackMessage';
import { useRouteMatch } from 'react-router';
import { getBook } from 'api';
import './Book.scss';
import { Error } from 'components/Error';

export const Book = () => {
  const { params } = useRouteMatch();
  const [success, setSuccess] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBook(params.id).then(response => {
      setSuccess(response.success);
      setBook(response.data);
    });
  }, [params.id]);

  return (
    <div className="book-page container">
      {success ? (
        book !== null ? (
          <BookView book={book} />
        ) : (
          <FallbackMessage type="loading">Идет загрузка книги</FallbackMessage>
        )
      ) : (
        <Error />
      )}
    </div>
  );
};
