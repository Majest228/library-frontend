import React from 'react';
import { ShadowWrapper } from 'components/ShadowWrapper';
import { Button } from 'components/common/Button';
import { StarRating } from 'components/common/StarRating';
import './BookView.scss';

export const BookView = ({ book }) => {
  return (
    <ShadowWrapper className="book">
      <h2 className="book__name">{book.name}</h2>
      <div className="book__row">
        <img className="book__image" src={book.image} alt="" />
        <div className="book__property">
          <table>
            <caption>Характеристики:</caption>
            <tbody>
              <tr>
                <td>Автор</td>
                <td>{book.author}</td>
              </tr>
              <tr>
                <td>Жанр</td>
                <td>{book.genre}</td>
              </tr>
              <tr>
                <td>Год издания</td>
                <td>{book.publicationDate} год</td>
              </tr>
              <tr>
                <td>Возраст</td>
                <td>{book.ageLimit}</td>
              </tr>
              <tr>
                <td>Язык</td>
                <td>{book.language}</td>
              </tr>
              <tr>
                <td>Страницы</td>
                <td>{book.numberOfPages} страниц</td>
              </tr>
              <tr>
                <td>Переплёт</td>
                <td>{book.shell}</td>
              </tr>
              <tr>
                <td>Стоимость</td>
                <td>{book.price === 0 ? <>Бесплатно</> : <>{book.price} тг</>}</td>
              </tr>
            </tbody>
          </table>
          <div className="book__rating">
            <div className="book__rating-name">Рейтинг:</div>
            <div className="book__rating-stars">
              <StarRating rating={book.rating} size={32} disabled />
            </div>
          </div>
        </div>
        <div className="book__buttons-container">
          <Button className="book__button" variant="outlined">
            Добавить в избранное
          </Button>
          <Button className="book__button" variant="outlined">
            Купить
          </Button>
        </div>
      </div>
      <div className="book__description">
        <div className="book__description__name">Описание:</div>
        <div className="book__description__text">{book.description}</div>
      </div>
    </ShadowWrapper>
  );
};
