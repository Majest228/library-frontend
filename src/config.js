import axios, { Cancel } from 'axios';
import localForage from 'localforage';
import { toast } from 'react-toastify';

axios.interceptors.request.use(async config => {
  const token = await localForage.getItem('token');
  if (token !== null) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  response => {
    const message = response.data.message;
    if (message) {
      if (response.data.success) {
        toast.success(message);
      } else {
        toast.warn(message);
      }
    }

    return response;
  },
  error => {
    if (error instanceof Cancel) {
      return Promise.reject(error);
    }

    if (error.response !== undefined) {
      const message = error.response.data?.message;
      if (message) {
        toast.error(message);
      }
    }

    return Promise.resolve(error.response);
  }
);
