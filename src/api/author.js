import axios from 'axios';

export const getAuthors = () => axios.get(`/api/author`).then(response => response.data);

export const getAuthor = id => axios.get(`/api/author/${id}`).then(response => response.data);
