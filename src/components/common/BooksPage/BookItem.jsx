import React, { useMemo } from 'react';
import { CategoryItem } from 'components/CategoryItem';
import { toBook } from 'utils/transforms';

export const BookItem = ({ book, ...props }) => {
  const data = useMemo(() => toBook(book), [book]);

  return <CategoryItem data={data} {...props} />;
};
