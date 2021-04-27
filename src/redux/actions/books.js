import { SET_PAGE, SET_TOTAL, SET_BOOKS, BULK_SET_BOOKS } from 'redux/actionTypes';

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

export const bulkSetBooks = payload => ({
  type: BULK_SET_BOOKS,
  payload,
});
