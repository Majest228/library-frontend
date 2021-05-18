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
        <Review fullName="Имя" post="Должность">
          Текст отзыва
        </Review>
        <Review fullName="Имя" post="Должность">
          Текст отзыва
        </Review>
        <Review fullName="Имя" post="Должность">
          Текст отзыва
        </Review>
      </div>
    </ShadowWrapper>
  );
};
