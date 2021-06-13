import React, { useEffect } from 'react';
import { ShadowWrapper } from 'components/ShadowWrapper';
import { Review } from 'components/Review';
import './Reviews.scss';
// import men from '../../components/Review/images/men.jpg';
// import woman from '../../components/Review/images/men.jpg';

export const Reviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ShadowWrapper className="reviews-page container">
      <h2 className="reviews-page__title">Отзывы о нас</h2>
      <div className="reviews-page__wrapper">
        <Review fullName="Станислав" post="JavaScript developer">
          Данное веб-приложение избавило меня от необходимости поиска необходимой мне литературы.
          Теперь ознакомление и чтение книг стало более доступным. В целом, работу сервиса могу
          оценить на "Отлично".
        </Review>
        <Review fullName="Никита" post="C# developer">
          Веб-приложение - мне очень понравилось. Дизайн топ. Книги топ.
        </Review>
        <Review fullName="Жан" post="Unity2d developer">
          Удобный сайт, тех.поддержка быстро отвечает
        </Review>
      </div>
    </ShadowWrapper>
  );
};
