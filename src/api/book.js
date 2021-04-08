import axios from 'axios';

export const getBook = id => axios.get(`/api/book/${id}`).then(response => response.data);
