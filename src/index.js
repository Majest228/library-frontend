import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './redux/store';
import '@fontsource/roboto/latin.css';
import '@fontsource/roboto/cyrillic.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import App from './App';
import './config';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
