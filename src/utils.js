export const generate = (shape, count, helpers = {}) =>
  Array.from({ length: count }, (_, index) => shape(index, helpers));
