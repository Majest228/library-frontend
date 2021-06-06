import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { StarRating } from 'components/common/StarRating';
import { LikeButton } from 'components/LikeButton';
import { noop } from 'utils';
import './CategoryItem.scss';

export const CategoryItem = ({
  data,
  onNameClick = noop,
  onDescriptionClick = noop,
  toggleFavorite = noop,
  canFavorite,
}) => {
  const handleNameClick = useCallback(() => onNameClick(data), [onNameClick, data]);

  const handleDescriptionClick = useCallback(() => onDescriptionClick(data), [
    onDescriptionClick,
    data,
  ]);

  return (
    <div className="category-item">
      <img className="category-item__image" src={data.image} alt="" />
      <div className="category-item__content">
        {data.rating ? (
          <>
            <div className="category-item__user-score">
              <StarRating rating={data.rating} disabled />
              {canFavorite && (
                <LikeButton
                  className="category-item__button"
                  liked={data.favorited}
                  onClick={toggleFavorite}
                />
              )}
            </div>
            <div className="category-item__info">
              <button className="category-item__invisible-button" onClick={handleNameClick}>
                <p className="category-item__name">{data.name}</p>
              </button>
              {data.description && (
                <button
                  className="category-item__invisible-button"
                  onClick={handleDescriptionClick}
                >
                  <p className="category-item__descrtiption">{data.description}</p>
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="category-item__user-score">
              <button className="category-item__invisible-button" onClick={handleNameClick}>
                <p className="category-item__name category-item__name--inline" title={data.name}>
                  {data.name}
                </p>
              </button>
              {canFavorite && (
                <LikeButton
                  className="category-item__button"
                  liked={data.favorited}
                  onClick={toggleFavorite}
                />
              )}
            </div>
            {data.description && (
              <div className="category-item__info">
                <button
                  className="category-item__invisible-button"
                  onClick={handleDescriptionClick}
                >
                  <p className="category-item__descrtiption">{data.description}</p>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.number,
    favorited: PropTypes.bool,
  }).isRequired,
  onNameClick: PropTypes.func,
  onDescriptionClick: PropTypes.func,
};
