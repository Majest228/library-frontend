import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import localForage from 'localforage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: ['user'],
};

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(require('redux-logger').default);
}

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(...middleware)
);

const persistor = persistStore(store);

export { store, persistor };
