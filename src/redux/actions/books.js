import { SET_PAGE, SET_TOTAL, SET_BOOKS, FAVORITE_BOOK, BULK_SET_BOOKS } from 'redux/actionTypes';

export const setPage = payload => ({
  type: SET_PAGE,
  payload,
});

export const setTotal = payload => ({
  type: SET_TOTAL,
  payload,
});

export const setBooks = payload => ({
  type: SET_BOOKS,
  payload,
});

export const favoriteBook = payload => ({
  type: FAVORITE_BOOK,
  payload,
});

export const bulkSetBooks = payload => ({
  type: BULK_SET_BOOKS,
  payload,
});
