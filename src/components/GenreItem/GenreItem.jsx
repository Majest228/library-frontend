import React from 'react';
import * as icons from 'icons/genres';
import defaultIcon from 'icons/genres/Empty';
import './GenreItem.scss';

export const GenreItem = ({ genre }) => {
  const Icon = icons[genre.icon] || defaultIcon;

  return (
    <>
      <div className="genre-item">
        <Icon className="genre-item__icon" width={32} height={32} />
        <p className="genre-item__name">{genre.name}</p>
      </div>
    </>
  );
};
