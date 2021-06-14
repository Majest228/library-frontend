import React from 'react';
import { Button } from 'components/common/Button';
import { StarRating } from 'components/common/StarRating';
import { noop } from 'utils';
import { getBookPdf } from 'api';
import Premium from 'icons/Premium';
import Free from 'icons/Free';
import './BookView.scss';
import { connect } from 'react-redux';

const BookView = ({ book, subscribed = false, toggleFavorite = noop, toggleReadLater = noop }) => {
  const Icon = book.typeOfContent ? Premium : Free;

  const openPdf = () =>
    getBookPdf(book.id).then(data => {
      const link = document.createElement('a');
      const url = URL.createObjectURL(data);

      link.href = url;
      link.target = '_blank';
      link.addEventListener('click', () => {
        setTimeout(() => {
          URL.revokeObjectURL(url);
        });
      });

      link.click();
    });

  const downloadPdf = () =>
    getBookPdf(book.id).then(data => {
      const link = document.createElement('a');
      const url = URL.createObjectURL(data);

      link.href = url;
      link.download = book.name;
      link.addEventListener('click', () => {
        setTimeout(() => {
          URL.revokeObjectURL(url);
        });
      });

      link.click();
    });

  return (
    <div className="book">
      <div className="book__title">
        <h2 className="book__name">{book.name}</h2>
        <p className="book__type">Книга</p>
      </div>
      <div className="book__rating">
        <div className="book__rating-stars">
          <StarRating rating={book.rating} size={16} disabled />
        </div>
      </div>
      <div className="book__row">
        <img className="book__image" src={book.image} alt="" />
        <div className="book__property">
          <table>
            <caption>О книге</caption>
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
        </div>
        <div className="book__buttons-container">
          <Button
            className="book__button"
            variant={book.favorited ? 'filled' : 'outlined'}
            onClick={toggleFavorite}
          >
            {book.favorited ? 'Убрать из избранного' : 'Добавить в избранное'}
          </Button>
          <Button
            className="book__button"
            variant={book.readLater ? 'filled' : 'outlined'}
            onClick={toggleReadLater}
          >
            {book.readLater ? 'Не читать' : 'Читать позже'}
          </Button>
          {book.pdfExists === 1 && (book.typeOfContent === 1 ? subscribed : true) && (
            <>
              <Button className="book__button" onClick={openPdf}>
                Открыть
              </Button>
              <Button className="book__button" onClick={downloadPdf}>
                Скачать
              </Button>
            </>
          )}
          <div className="book__premium">
            <p className="book__premium__text">Подписка:</p>
            <Icon className="book__premium__icon" />
          </div>
        </div>
      </div>

      <div className="book__buttons-container-small">
        <Button className="book__button-small" variant="outlined">
          Добавить в избранное
        </Button>
        {book.pdfExists === 1 && subscribed && (
          <>
            <Button className="book__button-small" onClick={openPdf}>
              Открыть
            </Button>
            <Button className="book__button-small" onClick={downloadPdf}>
              Скачать
            </Button>
          </>
        )}
      </div>
      <div className="book__premium-small">
        <p className="book__premium__text-small">Подписка:</p>
        <Icon className="book__premium__icon-small" />
      </div>
      <div className="book__description">
        <div className="book__description__name">Описание</div>
        <div className="book__description__text">{book.description}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  subscribed: state.user.info !== null ? state.user.info.subscribe !== 0 : false,
});

export default connect(mapStateToProps)(BookView);
