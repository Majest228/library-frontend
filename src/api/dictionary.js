import axios from 'axios';

export const getAuthorsDictionary = name => {
  const params = new URLSearchParams({ author: name });
  return axios.get(`/api/dictionary/authors?${params}`).then(response => response.data);
};

export const getGenresDictionary = name => {
  const params = new URLSearchParams({ genre: name });
  return axios.get(`/api/dictionary/genre?${params}`).then(response => response.data);
};
