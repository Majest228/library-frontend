import React from 'react';
import { Promo } from 'components/Promo';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <Promo />
      <Header />
      <Intro />
      <Footer />
    </>
  );
};

export default App;
