import clsx from 'clsx';
import React from 'react';
import './CategoryItem.scss';

export const CategoryItemSkeleton = ({ className }) => {
  return (
    <div className={clsx('category-item', className)}>
      <div className="category-item__image"></div>
      <div className="category-item__content">
        <div className="category-item__user-score">
          <span className="category-item__skeleton-rect" style={{ width: 100 }}></span>
          <span className="category-item__skeleton-circle"></span>
        </div>
        <div className="category-item__info">
          <p className="category-item__name">
            <span className="category-item__skeleton-rect"></span>
          </p>
          <p className="category-item__descrtiption" style={{ width: 120 }}>
            <span className="category-item__skeleton-rect"></span>
          </p>
        </div>
      </div>
    </div>
  );
};
