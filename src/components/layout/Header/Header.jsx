import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search } from '../Search';
import { Button } from 'components/common/Button';
import { LikeButton } from 'components/LikeButton';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <NavLink className="header__title" to="/">
          <h1 className="header__logo">WEWEBOOK</h1>
        </NavLink>
        <Search className="header__search" />
        <div className="header__buttons">
          <LikeButton className="header__favorites" liked secondary />
          <Button>Получить подписку</Button>
          <Button variant="outlined">Войти</Button>
        </div>
        <div className="header__buttons-adaptive">
          <LikeButton className="header__favorites" liked secondary />
          <Button variant="outlined">___</Button>
        </div>
      </div>
      <hr className="header__divider" />
      <nav className="header__menu">
        <ul className="header__list">
          <li className="header__menu-item">
            <NavLink to="/genres" className="header__link">
              Жанры
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/books" className="header__link">
              Книги
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/authors" className="header__link">
              Авторы
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/" className="header__link">
              Аудиокниги
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
