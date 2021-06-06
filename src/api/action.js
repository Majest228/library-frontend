import axios from 'axios';

export const markAsFavorited = data =>
  axios.post(`/api/action/favorite`, data).then(response => response.data);

export const markAsReadLater = data =>
  axios.post(`/api/action/later`, data).then(response => response.data);
