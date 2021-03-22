import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { CategoryItem, CategoryItemSkeleton } from 'components/CategoryItem';
import { Fade } from 'components/Fade';
import { generate } from 'utils';
import './CategoryView.scss';

export const CategoryView = ({ title, moreText, moreLink, renderItemsCount, getItems }) => {
  const [items, setItems] = useState({
    total: 0,
    list: [],
  });

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);

  return (
    <div className="categoty-view">
      <div className="categoty-view__header">
        <div className="categoty-view__info">
          <div className="categoty-view__title">{title}</div>
          {renderItemsCount && (
            <div className="categoty-view__count">{renderItemsCount(items.total)}</div>
          )}
        </div>
        {moreLink && moreText && (
          <NavLink className="categoty-view__link" to={moreLink}>
            {moreText}
          </NavLink>
        )}
      </div>
      <div>
        <div className="categoty-view__items">
          {items.total > 0
            ? items.list.map(book => (
                <Fade className="categoty-view__item" in key={book.id}>
                  <CategoryItem data={book} />
                </Fade>
              ))
            : generate(index => index, 6).map(index => (
                <CategoryItemSkeleton className="categoty-view__item" key={index} />
              ))}
        </div>
      </div>
    </div>
  );
};

CategoryView.propTypes = {
  title: PropTypes.string.isRequired,
  moreText: PropTypes.string,
  moreLink: PropTypes.string,
  renderItemsCount: PropTypes.func,
  getItems: PropTypes.func.isRequired,
};
