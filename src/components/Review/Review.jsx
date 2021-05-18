import React from 'react';
import User from './images/User';
import './Review.scss';

export const Review = ({ fullName, post, image, children }) => {
  return (
    <div className="review__container">
      <div className="review__row">
        <div className="review__column">
          <div className="review__specifications">
            <div className="review__specifications-fullName">{fullName}</div>
            <div className="review__specifications-post">{post}</div>
          </div>
        </div>
        <div className="review__column">
          <div>
            {image !== undefined ? (
              <img className="review__specifications-image" src={image} alt="" />
            ) : (
              <User className="review__specifications-image" />
            )}
          </div>
        </div>
      </div>
      <div className="review__description">{children}</div>
    </div>
  );
};
