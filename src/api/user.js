import axios from 'axios';

export const signUp = data => axios.post('/api/user/signup', data).then(response => response.data);

export const signIn = data => axios.post('/api/user/signin', data).then(response => response.data);
