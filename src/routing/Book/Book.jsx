import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { BookView } from 'components/BookView';
import { FallbackMessage } from 'components/common/FallbackMessage';
import { Error } from 'components/Error';
import { getBook, markAsFavorited, markAsReadLater } from 'api';
import './Book.scss';

export const Book = () => {
  const { params } = useRouteMatch();
  const [success, setSuccess] = useState(true);
  const [book, setBook] = useState(null);

  const toggleFavorite = useCallback(() => {
    if (book !== null) {
      setBook(book => ({
        ...book,
        favorited: !book.favorited,
      }));
      markAsFavorited({ id: book.id });
    }
  }, [book]);

  const toggleReadLater = useCallback(() => {
    if (book !== null) {
      setBook(book => ({
        ...book,
        readLater: !book.readLater,
      }));
      markAsReadLater({ id: book.id });
    }
  }, [book]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <BookView book={book} toggleFavorite={toggleFavorite} toggleReadLater={toggleReadLater} />
        ) : (
          <FallbackMessage type="loading">Идет загрузка книги</FallbackMessage>
        )
      ) : (
        <Error />
      )}
    </div>
  );
};
