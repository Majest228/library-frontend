import React from 'react';
import clsx from 'clsx';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BOOKS_SIZE } from 'constants/search';
import { createRange } from 'utils/createRange';
import { setPage } from 'redux/actions';
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

const BooksList = ({ page, setPage, total, list }) => {
  const count = Math.ceil(total / BOOKS_SIZE);
  const pages = React.useMemo(() => createRange(page, 2, count), [page, count]);

  return (
    <div className="book-list">
      <div className="book-list__button-container">
        {pages[0] !== 0 && (
          <>
            <PageButton page={0} active={page === 0} onClick={setPage} />
            <span className="three-dots">...</span>
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
            <span className="three-dots">...</span>
            <PageButton page={count - 1} active={page === count - 1} onClick={setPage} />
          </>
        )}
      </div>
      <div className="book-list__total">Книг найдено: {total}</div>
      <pre
        style={{
          maxWidth: 1000,
          maxHeight: 800,
          margin: 0,
          overflow: 'auto',
        }}
      >
        {JSON.stringify(list, null, 2)}
      </pre>
    </div>
  );
};

const mapStateToProps = state => ({
  ...state.books,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ setPage }, dispatch),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(BooksList);
