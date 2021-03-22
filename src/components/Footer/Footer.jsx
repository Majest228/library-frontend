import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/Button';
import logo from './footer-logo.svg';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <div className="footer__image-wrapper">
            <img className="footer__image" src={logo} alt="" />
          </div>
          <div className="footer__description">Знания это сила</div>
          <div className="footer__copyright">Copyright © 2021</div>
        </div>
        <nav className="footer__link">
          <ul className="footer__link-list">
            <li className="footer__link-list-item">
              <NavLink to="/">О нас</NavLink>
            </li>
            <li className="footer__link-list-item">
              <NavLink to="/">О проекте</NavLink>
            </li>
            <li className="footer__link-list-item">
              <NavLink to="/">Отзывы</NavLink>
            </li>
            <li className="footer__link-list-item">
              <NavLink to="/">Контакты</NavLink>
            </li>
          </ul>
        </nav>
        <nav className="footer__trend">
          <ul className="footer__trend-list">
            <li className="footer__trend-list-item">
              <NavLink to="/">Бестселлеры</NavLink>
            </li>
            <li className="footer__trend-list-item">
              <NavLink to="/">Популярные авторы</NavLink>
            </li>
            <li className="footer__trend-list-item">
              <NavLink to="/">Популярные жанры</NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer__buttons">
          <Button className="footer__button" size="medium">
            получить подписку
          </Button>
          <Button className="footer__button" size="medium">
            войти
          </Button>
        </div>
      </div>
    </footer>
  );
};
