import React from 'react';
import { Button } from 'components/common/Button';
import notPage from './404.svg';
import './Error.scss';

export const Error = () => {
  return (
    <div className="notPage">
      <div>
        <h3 className="notPage__title">
          Похоже, <br /> мы не можем найти <br /> нужную страницу
        </h3>
        <Button>вернуться на главную</Button>
      </div>
      <div>
        <img src={notPage} alt="" />
      </div>
    </div>
  );
};
