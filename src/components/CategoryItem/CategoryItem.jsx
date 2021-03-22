import React from 'react';
import PropTypes from 'prop-types';
import { StarRating } from 'components/StarRating';
import { LikeButton } from 'components/LikeButton';
import './CategoryItem.scss';

export const CategoryItem = ({ data }) => {
  return (
    <div className="category-item">
      <img className="category-item__image" src={data.image} alt="" />
      <div className="category-item__content">
        <div className="category-item__user-score">
          <StarRating rating={data.rating} disabled />
          <LikeButton className="category-item__button" liked={data.favorited} disabled />
        </div>
        <div className="category-item__info">
          <p className="category-item__name">{data.name}</p>
          <p className="category-item__descrtiption">{data.description}</p>
        </div>
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
};
