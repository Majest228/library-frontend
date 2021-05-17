import React from 'react';
import PropTypes from 'prop-types';
import './FallbackMessage.scss';
import warning from './images/warning.png';
import loading from './images/loading.png';
import construction from './images/construction.png';

const imageMapping = { loading, warning, construction };

export const FallbackMessage = ({ type, children }) => {
  const image = imageMapping[type] || null;

  return (
    <div className="fallback-message">
      <div className="fallback-message__text">{children}</div>
      {image !== null && <img className="fallback-message__image" src={image} alt="" />}
    </div>
  );
};

FallbackMessage.propTypes = {
  type: PropTypes.oneOf(['loading', 'warning', 'construction']),
  children: PropTypes.string,
};
