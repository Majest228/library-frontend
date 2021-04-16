import axios from 'axios';

export const getBook = id => axios.get(`/api/book/${id}`).then(response => response.data);

export const getRandomBooks = (count = 10) =>
  axios.get(`/api/book/random/${count}`).then(response => response.data);
