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

      for (const promise of pending) {
        promise.reject('Cancel');
      }
      pending.length = 0;
      pending.push({ resolve, reject });

      timeoutId = setTimeout(() => {
        Promise.resolve(handler.apply(this, args)).then(
          data => resolve(data),
          error => reject(error)
        );
      }, duration);
    });
};
