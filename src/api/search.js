import axios, { CancelToken } from 'axios';

export const searchBooks = (data, count = 10, page = 0) => {
  const params = new URLSearchParams({
    count,
    page,
  });

  return new Promise(resolve => {
    const source = CancelToken.source();

    resolve([
      axios
        .post(`/api/search/books?${params}`, data, { cancelToken: source.token })
        .then(response => response.data),
      () => source.cancel(),
    ]);
  });
};
