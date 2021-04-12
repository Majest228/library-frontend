import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Promo } from 'components/layout/Promo';
import { Header } from 'components/layout/Header';
import { Footer } from 'components/layout/Footer';
import { Home } from 'routing/Home';
import { Book } from 'routing/Book';
import { Authors } from 'routing/Authors';
import { Error } from 'components/Error';

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
          <div className="container">
            <Error />
          </div>
        </Route>
      </Switch>
    </div>
    <Footer />
  </Router>
);

export default App;
