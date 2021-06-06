import axios from 'axios';

export const getFavoritedBooks = (count = 10, page = 0) => {
  const params = new URLSearchParams({
    count,
    page,
  });

  return axios.get(`/api/profile/favorite?${params}`).then(response => response.data);
};

export const getReadLaterBooks = (count = 10, page = 0) => {
  const params = new URLSearchParams({
    count,
    page,
  });

  return axios.get(`/api/profile/later?${params}`).then(response => response.data);
};
