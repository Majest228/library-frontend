import React, { useEffect } from 'react';
import { FilterBlock } from 'components/FilterBlock';
import './Books.scss';

export const Books = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="all-books__wrapper ">
        <p className="all-books__title">Все книги</p>
      </div>
      <div className="container">
        <FilterBlock />
      </div>
    </>
  );
};
