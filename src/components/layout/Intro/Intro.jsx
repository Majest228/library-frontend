import React from 'react';
import { RouteButton } from 'components/common/RouteButton';
import hero from './hero.svg';
import './Intro.scss';

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__container container">
        <div className="intro__content">
          <p className="intro__title">WeWeBook</p>
          <p className="intro__description">
            доступ ко всем книгам
            <br />с помощью подписки
          </p>
          <div className="intro__button-wrapper">
            <RouteButton className="intro__button" size="large" to="/subscribe">
              Оформить подписку
            </RouteButton>
            <p className="intro__tag">#wewebookвсегдатут</p>
          </div>
        </div>
        <div className="intro__image-wrapper">
          <img className="intro__image" src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};
