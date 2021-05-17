import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/common/Button';
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
          <div className="footer__description">Знания это сила!</div>
          <div className="footer__copyright">Copyright © 2021</div>
        </div>
        <nav className="footer__link">
          <ul className="footer__link-list">
            <li className="footer__link-list-item">
              <NavLink className="footer__link-list-item-link" to="/about">
                О проекте
              </NavLink>
            </li>
            <li className="footer__link-list-item">
              <NavLink className="footer__link-list-item-link" to="/">
                Отзывы
              </NavLink>
            </li>
            <li className="footer__link-list-item">
              <NavLink className="footer__link-list-item-link" to="/contacts">
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="footer__buttons">
          <Button className="footer__button" size="medium">
            Получить подписку
          </Button>
          <Button className="footer__button" variant="outlined" size="medium">
            Войти
          </Button>
        </div>
      </div>
    </footer>
  );
};
