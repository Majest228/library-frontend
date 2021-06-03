import React from 'react';
import { useHistory } from 'react-router';
import { Intro } from 'components/layout/Intro';
import { CategoryView } from 'components/CategoryView';
import { toAuthor, toBook } from 'utils/transforms';
import { getRandomBooks, getRandomAuthors, getPopularBooks, getLastAddedBooks } from 'api';
import './Home.scss';

const getBooks = () =>
  getRandomBooks(15).then(response => ({
    total: response.data.total,
    list: response.data.list.map(toBook),
  }));

const getCompilation = () =>
  getPopularBooks(10).then(response => ({
    total: response.data.total,
    list: response.data.list.map(toBook),
  }));

const getRecent = () =>
  getLastAddedBooks(15).then(response => ({
    total: response.data.total,
    list: response.data.list.map(toBook),
  }));

const getAuthors = () =>
  getRandomAuthors(10).then(response => ({
    total: response.data.total,
    list: response.data.list.map(toAuthor),
  }));

export const Home = () => {
  const history = useHistory();

  const openBook = book => history.push(`/book/${book.id}`);

  return (
    <>
      <Intro />
      <div className="container">
        <CategoryView
          title="Книги"
          moreText="Все книги"
          moreLink="/books"
          renderItemsCount={count => (
            <>
              Всего книг в библиотеке <b>{count}</b>
            </>
          )}
          getItems={getBooks}
          onNameClick={openBook}
        />
        {/* <CategoryView
          title="Аудиокниги"
          moreText="Все аудиокниги"
          moreLink="/"
          renderItemsCount={count => (
            <>
              Всего аудиокниг в библиотеке <b>{count}</b>
            </>
          )}
          getItems={getItems}
        /> */}
        <CategoryView
          title="Авторы"
          moreText="Все авторы"
          moreLink="/authors"
          renderItemsCount={count => (
            <>
              Всего авторов в библиотеке <b>{count}</b>
            </>
          )}
          getItems={getAuthors}
        />
        <CategoryView
          title="Подборка недели от WeWeBook"
          getItems={getCompilation}
          onNameClick={openBook}
        />
        <CategoryView
          title="Недавнее обновление на WeWeBook"
          getItems={getRecent}
          onNameClick={openBook}
        />
      </div>
    </>
  );
};
