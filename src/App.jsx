import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Promo } from 'components/layout/Promo';
import { Header } from 'components/layout/Header';
import { Footer } from 'components/layout/Footer';
import { Home } from 'routing/Home';
import { Book } from 'routing/Book';
import { Authors } from 'routing/Authors';

const App = () => (
  <Router>
    <Promo />
    <Header />
    <div className="fullpage">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/book/:id">
          <Book />
        </Route>
        <Route path="/authors">
          <Authors />
        </Route>
        <Route path="*">
          <mark>Такой страницы нет (404)</mark>
        </Route>
      </Switch>
    </div>
    <Footer />
  </Router>
);

export default App;
