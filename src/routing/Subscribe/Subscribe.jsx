import { Button } from 'components/common/Button';
import React from 'react';
import { toast } from 'react-toastify';
import './Subscribe.scss';

export const Subscribe = () => {
  const handleClick = () => {
    toast.warn('Недоступно в рамках дипломной работы');
  };

  return (
    <>
      <div className="subscribe__page container">
        <div className="subscribe__card">
          <div className="subscribe__card__label">
            <div className="subscribe__card__title">Стандарт</div>
            <div className="subscribe__card__price">Бесплатно</div>
          </div>
          <div className="subscribe__card__list">
            <ul className="subscribe__card__list-container">
              <li className="subscribe__card__list-item">Ограниченный каталог книг</li>
              <li className="subscribe__card__list-item">
                Отсутствие доступа к прослушиванию аудиокниг
              </li>
            </ul>
          </div>
          <Button className="subscribe__card__button">Уже приобретено</Button>
        </div>
        <div className="subscribe__card premium-shadow">
          <div className="subscribe__card__label premium">
            <div className="subscribe__card__title premium-text">Премиум</div>
            <div className="subscribe__card__price premium-text">
              <p>970</p> тг/месяц
            </div>
          </div>
          <div className="subscribe__card__list">
            <ul className="subscribe__card__list-container">
              <li className="subscribe__card__list-item premium-item">Все книги</li>
              <li className="subscribe__card__list-item premium-item">Все аудиокниги</li>
              <li className="subscribe__card__list-item premium-item">Персональные рекомендации</li>
            </ul>
          </div>
          <Button className="subscribe__card__button premium-button" onClick={handleClick}>
            Приобрести
          </Button>
        </div>
      </div>
    </>
  );
};
