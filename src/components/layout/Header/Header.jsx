import React from 'react';
import { NavLink } from 'react-router-dom';
import { TextField } from 'components/common/TextField';
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
        <TextField className="header__search" placeholder="начните поиск" />
        <div className="header__buttons">
          <LikeButton className="header__favorites" liked secondary />
          <Button>получить подписку</Button>
          <Button variant="outlined">войти</Button>
        </div>
      </div>
      <hr className="header__divider" />
      <nav className="header__menu">
        <ul className="header__list">
          <li className="header__menu-item">
            <NavLink to="/" className="header__link">
              жанры
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/" className="header__link">
              книги
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/authors" className="header__link">
              авторы
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/" className="header__link">
              аудиокниги
            </NavLink>
          </li>
          {/* <li className="header__menu-item">
            <NavLink to="/" className="header__link">
              издательства
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
