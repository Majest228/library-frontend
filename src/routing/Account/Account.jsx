import React, { useReducer, useCallback, useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'components/common/Button';
import { DefaultBooksList } from 'components/common/BooksPage';
import Premium from 'icons/Premium';
import Free from 'icons/Free';
import { BOOKS_SIZE_ACCOUNT } from 'constants/search';
import { getFavoritedBooks, getReadLaterBooks } from 'api';
import { setPage, setTotal, setBooks, favoriteBook, resetStore } from 'redux/actions';
import booksReducer from 'redux/reducers/books';
import './Account.scss';

const Account = ({ user, resetStore }) => {
  const [favorited, dispatchFavorited] = useReducer(booksReducer, {
    page: 0,
    total: 0,
    list: [],
  });
  const [readLater, dispatchReadLater] = useReducer(booksReducer, {
    page: 0,
    total: 0,
    list: [],
  });
  const userAge = useMemo(() => {
    const now = Date.now();
    const dateBorn = Date.parse(user.dateBorn);
    const age = Math.floor((now - dateBorn) / 31536000000);
    return age;
  }, [user.dateBorn]);

  const changeFavoritedPage = useCallback(page => {
    dispatchFavorited(setPage(page));
  }, []);

  const changeReadLaterPage = useCallback(page => {
    dispatchReadLater(setPage(page));
  }, []);

  const toggleFavorite = useCallback(id => {
    dispatchFavorited(favoriteBook(id));
  }, []);

  const exit = useCallback(() => resetStore(), [resetStore]);

  useEffect(() => {
    getFavoritedBooks(BOOKS_SIZE_ACCOUNT, favorited.page).then(response => {
      if (response.success) {
        dispatchFavorited(setBooks(response.data.list));
        dispatchFavorited(setTotal(response.data.total));
      }
    });
  }, [favorited.page]);

  useEffect(() => {
    getReadLaterBooks(BOOKS_SIZE_ACCOUNT, readLater.page).then(response => {
      if (response.success) {
        dispatchReadLater(setBooks(response.data.list));
        dispatchReadLater(setTotal(response.data.total));
      }
    });
  }, [readLater.page]);

  return (
    <>
      <div className="account__page container">
        <div className="account__user">
          <div className="account__row">
            <div className="user__name">
              Пользователь:{' '}
              <b>
                {user.name} {user.surname}
              </b>
            </div>
            <div className="user__age">
              Возраст: <b>{userAge}</b>
            </div>
          </div>
          <div className="account__row">
            <div className="user__email">
              Электронная почта: <b>{user.login}</b>
            </div>
            <div className="user__subscribe">
              Подписка:
              <b>
                {user.subscribe === 0 ? (
                  <Free className="subscribe__icon" />
                ) : (
                  <Premium className="subscribe__icon" />
                )}
              </b>
            </div>
          </div>
        </div>
        <div>
          <div className="container__wrapper">
            <div className="container__title">Избранные книги</div>
            <DefaultBooksList
              page={favorited.page}
              total={favorited.total}
              list={favorited.list}
              setPage={changeFavoritedPage}
              favoriteBook={toggleFavorite}
              auth
              hidePagination
            />
          </div>
          <div className="container__wrapper">
            <div className="container__title">Читать позже</div>
            <DefaultBooksList
              page={readLater.page}
              total={readLater.total}
              list={readLater.list}
              setPage={changeReadLaterPage}
              hidePagination
            />
          </div>
        </div>
        <Button className="account__button" onClick={exit}>
          Выход
        </Button>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user.info,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ resetStore }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
