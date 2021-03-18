import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header__sup">
      <div className="header__container">
        <div className="header__sup__content">
          <h3 className="header__sup__text">Порадуйте друзей подарочной подпиской</h3>
          <button className="header__sup__btn">подарить подписку</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
