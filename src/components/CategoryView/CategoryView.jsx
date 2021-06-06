import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { CategoryItem, CategoryItemSkeleton } from 'components/CategoryItem';
import { Fade } from 'components/animations/Fade';
import { generate } from 'utils';
import { markAsFavorited } from 'api';
import './CategoryView.scss';

const CategoryView = ({
  title,
  moreText,
  moreLink,
  renderItemsCount,
  getItems,
  onNameClick,
  onDescriptionClick,
  canFavorite = true,
  auth,
}) => {
  const [items, setItems] = useState({
    total: 0,
    list: [],
  });

  const toggleFavorite = useCallback(
    id => () => {
      if (auth && canFavorite) {
        setItems(data => ({
          ...data,
          list: data.list.map(item => ({
            ...item,
            favorited: item.id === id ? !item.favorited : item.favorited,
          })),
        }));
        markAsFavorited({ id });
      }
    },
    [auth, canFavorite]
  );

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, [getItems]);

  return (
    <div className="category-view">
      <div className="category-view__header">
        <div className="category-view__info">
          <div className="category-view__title">{title}</div>
          {renderItemsCount && (
            <div className="category-view__count">{renderItemsCount(items.total)}</div>
          )}
        </div>
        {moreLink && moreText && (
          <NavLink className="category-view__link" to={moreLink}>
            {moreText}
          </NavLink>
        )}
      </div>
      <div className="category-view__items">
        {items.total > 0
          ? items.list.map(entry => (
              <Fade className="category-view__item" in key={entry.id}>
                <CategoryItem
                  data={entry}
                  onNameClick={onNameClick}
                  onDescriptionClick={onDescriptionClick}
                  toggleFavorite={toggleFavorite(entry.id)}
                  canFavorite={canFavorite}
                />
              </Fade>
            ))
          : generate(index => index, 6).map(index => (
              <CategoryItemSkeleton className="category-view__item" key={index} />
            ))}
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

const mapStateToProps = state => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps)(CategoryView);
