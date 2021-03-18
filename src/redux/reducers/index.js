import { combineReducers } from 'redux';
import { RESET_STORE } from '../actionTypes';

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
