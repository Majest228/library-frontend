export const generate = (shape, count, helpers = {}) =>
  Array.from({ length: count }, (_, index) => shape(index, helpers));

export const noop = () => {};

/**
 * @param {string} value
 * @param {string} needle
 */
export const has = (value, needle) => value.toLowerCase().includes(needle.toLowerCase());

export const debounce = (handler, duration = 0) => {
  let timeoutId = null;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => handler.apply(this, args), duration);
  };
};

export const debouncePromise = (handler, duration = 0) => {
  const pending = [];
  let timeoutId = null;

  return (...args) =>
    new Promise((resolve, reject) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentPending = [...pending];
        pending.length = 0;

        Promise.resolve(handler.apply(this, args)).then(
          data => {
            currentPending.forEach(({ resolve }) => resolve(data));
          },
          error => {
            currentPending.forEach(({ reject }) => reject(error));
          }
        );
      }, duration);

      pending.push({ resolve, reject });
    });
};
