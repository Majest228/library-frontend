import React, { useCallback } from 'react';
import clsx from 'clsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { BookItem } from './BookItem';
import { BOOKS_SIZE } from 'constants/search';
import { noop } from 'utils';
import { createRange } from 'utils/createRange';
import { markAsFavorited } from 'api';
import { setPage, favoriteBook } from 'redux/actions';
import './BooksList.scss';

const PageButton = ({ page, active, onClick }) => (
  <button
    className={clsx('book-list__button', active && 'book-list__button--active')}
    type="button"
    onClick={() => onClick(page)}
    disabled={active}
  >
    {page + 1}
  </button>
);

const BooksList = ({
  page,
  setPage,
  total,
  list,
  auth,
  hidePagination = false,
  favoriteBook = noop,
}) => {
  const history = useHistory();

  const count = Math.ceil(total / BOOKS_SIZE);
  const pages = React.useMemo(() => createRange(page, 2, count), [page, count]);
  const canFavorite = favoriteBook !== noop;

  const openBook = book => history.push(`/book/${book.id}`);

  const toggleFavorite = useCallback(
    id => () => {
      if (auth) {
        favoriteBook(id);
        markAsFavorited({ id });
      }
    },
    [auth, favoriteBook]
  );

  const paginationVisible = total !== 0 ? (hidePagination ? pages.length > 1 : true) : false;
  const pagination = paginationVisible ? (
    <div className="book-list__button-container">
      {pages[0] !== 0 && (
        <>
          <PageButton page={0} active={page === 0} onClick={setPage} />
          <span>...</span>
        </>
      )}
      {pages.map(otherPage => (
        <PageButton
          page={otherPage}
          active={page === otherPage}
          onClick={setPage}
          key={otherPage}
        />
      ))}
      {pages[pages.length - 1] !== count - 1 && (
        <>
          <span>...</span>
          <PageButton page={count - 1} active={page === count - 1} onClick={setPage} />
        </>
      )}
    </div>
  ) : null;

  return (
    <div className="book-list">
      <div className="book-list__button-wrapper">
        <div className="book-list__total">
          Книг найдено: <b>{total}</b>
        </div>
        {pagination}
      </div>
      <div className="book-list__items">
        {list.map(book => (
          <BookItem
            book={book}
            onNameClick={openBook}
            toggleFavorite={toggleFavorite(book.id)}
            canFavorite={canFavorite}
            key={book.id}
          />
        ))}
      </div>
      {pagination}
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.books,
  auth: state.user.auth,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ setPage, favoriteBook }, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(BooksList);
export { BooksList as DefaultBooksList };
