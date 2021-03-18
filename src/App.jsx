import React from 'react';
import classes from './style.module.scss';
import { Header } from './components/Header';
import { Button } from './components/Button';

const App = () => {
  return (
    <>
      <Header />
      {/* <Button>Войти</Button>
      <Button disabled>Войти</Button>
      <div className={classes.btn}>
        <Button style="outlined">Регистрация</Button>
        <Button disabled style="outlined">
          Регистрация
        </Button>
      </div> */}
    </>
  );
};

export default App;
