import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Promo } from 'components/Promo';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Home } from 'routing/Home/Home';

const App = () => (
  <Router>
    <Promo />
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;
