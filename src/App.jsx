import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Promo } from 'components/layout/Promo';
import { Header } from 'components/layout/Header';
import { Footer } from 'components/layout/Footer';
import { Home } from 'routing/Home';
import { Book } from 'routing/Book';
import { Authors } from 'routing/Authors';
import { Genres } from 'routing/Genres';
import { Books } from 'routing/Books';
import { Error } from 'components/Error';
import { AboutProject } from 'routing/AboutProject';
import { Contacts } from 'routing/Сontacts';
import { Audiobooks } from 'routing/Audiobooks';
import { Reviews } from 'routing/Reviews';
import { Login } from 'routing/Login';
import { Registration } from 'routing/Registration';
import { Subscribe } from 'routing/Subscribe';
import { Account } from 'routing/Account';

const App = ({ auth }) => (
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
        <Route path="/genres">
          <Genres />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/audiobooks">
          <Audiobooks />
        </Route>
        <Route path="/about">
          <AboutProject />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        {auth ? (
          <Route path="/account">
            <Account />
          </Route>
        ) : (
          <>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
          </>
        )}
        <Route path="/subscribe">
          <Subscribe />
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

const mapStateToProps = state => ({
  auth: state.user.auth,
});

export default connect(mapStateToProps)(App);
