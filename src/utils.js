export const generate = (shape, count, helpers = {}) =>
  Array.from({ length: count }, (_, index) => shape(index, helpers));

export const noop = () => {};

/**
 * @param {string} value
 * @param {string} needle
 */
export const has = (value, needle) => value.toLowerCase().includes(needle.toLowerCase());
