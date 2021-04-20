import axios from 'axios';

export const getGenres = () => axios.get(`/api/genre`).then(response => response.data);

export const getGenre = id => axios.get(`/api/genre/${id}`).then(response => response.data);
