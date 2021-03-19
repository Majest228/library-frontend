import React from 'react';
import { Button } from 'components/Button';
import logo from './footer-logo.svg';
import './Footer.scss';

const Footer = () => {
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
              <a>О нас</a>
            </li>
            <li className="footer__link-list-item">
              <a>О проекте</a>
            </li>
            <li className="footer__link-list-item">
              <a>Отзывы</a>
            </li>
            <li className="footer__link-list-item">
              <a>Контакты</a>
            </li>
          </ul>
        </nav>
        <nav className="footer__trend">
          <ul className="footer__trend-list">
            <li className="footer__trend-list-item">
              <a>Бестселлеры</a>
            </li>
            <li className="footer__trend-list-item">
              <a>Популярные авторы</a>
            </li>
            <li className="footer__trend-list-item">
              <a>Популярные жанры</a>
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

export default Footer;
