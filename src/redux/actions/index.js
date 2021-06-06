import { RESET_STORE } from 'redux/actionTypes';

export * from './books';
export * from './user';

export const resetStore = () => ({
  type: RESET_STORE,
});
