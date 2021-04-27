import { SET_PAGE, SET_TOTAL, SET_BOOKS, BULK_SET_BOOKS } from 'redux/actionTypes';

const initialValues = {
  page: 0,
  total: 0,
  list: [],
};

const booksReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_BOOKS:
      return {
        ...state,
        list: [...action.payload],
      };
    case BULK_SET_BOOKS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default booksReducer;
