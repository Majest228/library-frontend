import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Search } from '../Search';
import { Button } from 'components/common/Button';
import { LikeButton } from 'components/LikeButton';
import { RouteButton } from 'components/common/RouteButton';
import User from 'icons/User';
import './Header.scss';

const Header = ({ user }) => {
  return (
    <header className="header">
      <div className="header__container container">
        <NavLink className="header__title" to="/">
          <h1 className="header__logo">WEWEBOOK</h1>
        </NavLink>
        <Search className="header__search" />
        <div className="header__buttons">
          <RouteButton to="/subscribe">Получить подписку</RouteButton>
          {user.auth ? (
            <NavLink to="/account">
              <User className="header__user" />
            </NavLink>
          ) : (
            <RouteButton to="/login" variant="outlined">
              Войти
            </RouteButton>
          )}
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
            <NavLink to="/audiobooks" className="header__link">
              Аудиокниги
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
