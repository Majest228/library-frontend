import React from 'react';
import { Intro } from 'components/Intro';
import { CategoryView } from 'components/CategoryView/CategoryView';
import './Home.scss';

export const Home = () => (
  <>
    <Intro />
    <div className="categories">
      <CategoryView
        title="Книги"
        moreText="Все книги"
        moreLink="/"
        renderItemsCount={count => (
          <>
            Всего книг в библиотеке <b>{count}</b>
          </>
        )}
        getItems={getItems}
      />
      <CategoryView
        title="Аудиокниги"
        moreText="Все аудиокниги"
        moreLink="/"
        renderItemsCount={count => (
          <>
            Всего аудиокниг в библиотеке <b>{count}</b>
          </>
        )}
        getItems={getItems}
      />
      <CategoryView
        title="Авторы"
        moreText="Все авторы"
        moreLink="/"
        renderItemsCount={count => (
          <>
            Всего авторов в библиотеке <b>{count}</b>
          </>
        )}
        getItems={getItems}
      />
      <CategoryView title="Подборка недели от WeWeBook" getItems={getItems} />
    </div>
  </>
);

const generate = (shape, count, helpers = {}) =>
  Array.from({ length: count }, (_, index) => shape(index, helpers));

const fake = (data, delay = 0) => new Promise(resolve => setTimeout(resolve, delay, data));

const pick = array => array[Math.floor(Math.random() * array.length)];

const books = generate(
  (index, helpers) => ({
    id: index + 1,
    image: `https://dummyimage.com/150x250/${helpers.color()}/ffffff`,
    name: `Book ${index + 1}`,
    description: `Author ${index + 1}`,
    rating: helpers.rating(),
    favorited: Math.random() > 0.5,
  }),
  10,
  {
    color: () => pick(['222222', '236830', '236830', '90305B', '74832C']),
    rating: () => pick([0.0, 1.0, 2.0, 3.0, 4.0, 5.0]),
  }
);

const getItems = () => fake({ list: books, total: 100 + Math.round(Math.random() * 1000) }, 500);
