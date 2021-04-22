import axios from 'axios';

export const getAuthorsDictionary = name => {
  const params = new URLSearchParams({ author: name });
  return axios.get(`/api/dictionary/authors?${params}`).then(response => response.data);
};

export const getGenresDictionary = name => {
  const params = new URLSearchParams({ genre: name });
  return axios.get(`/api/dictionary/genre?${params}`).then(response => response.data);
};

export const getLanguagesDictionary = name => {
  const params = new URLSearchParams({ language: name });
  return axios.get(`/api/dictionary/languages?${params}`).then(response => response.data);
};

export const getAgeLimitsDictionary = () => {
  return axios.get(`/api/dictionary/ageLimit`).then(response => response.data);
};

export const getYearsOfPublicationRange = () => {
  return axios.get(`/api/dictionary/yearOfPublicaton`).then(response => response.data);
};

export const getTypeOfContentDictionary = () => {
  return axios.get(`/api/dictionary/typeOfContent`).then(response => response.data);
};
