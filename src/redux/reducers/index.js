import { combineReducers } from 'redux';
import books from './books';
import user from './user';
import { RESET_STORE } from '../actionTypes';

const appReducer = combineReducers({
  books,
  user,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
