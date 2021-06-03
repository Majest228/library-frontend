import React, { useEffect } from 'react';
import { ShadowWrapper } from 'components/ShadowWrapper';
import './AboutProject.scss';

export const AboutProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ShadowWrapper className="about-project-page container">
      <h2 className="about-project-page__name">О проекте</h2>
      <div className="about-project-page__title">Что это такое?</div>
      <div className="about-project-page__description">
        <p className="about-project-page__paragraph">
          <a className="about-project-page__paragraph__link" href="/">
            WeWeBook
          </a>
          — это современная библиотека в интернете, которая открывает вам доступ к каталогу
          бестселлеров и классической литературы. Идея библиотеки в том, что вместо покупки
          отдельных книг вы получаете доступ ко всему каталогу при наличии подписки.
        </p>
        <p className="about-project-page__paragraph">
          Зарегистрированные пользователи, чтобы не потерять понравившиеся произведения, могут
          добавлять их в избранное. Теперь не придётся долго искать любимую книгу и можно собирать
          подборки.
        </p>
      </div>
      <div className="about-project-page__title">Поиск</div>
      <div className="about-project-page__description">
        <p className="about-project-page__paragraph">
          На сайте реализовано 2 режима поиска, обычный (по названию книги), доступный в "шапке"
          сайта и расширенный. В расширенном поиске вы сможете фильтровать книги по автору, жанру,
          дате публикации, возрастному ограничению и т.д.
        </p>
      </div>
      <div className="about-project-page__title">Как устроен WeWeBook?</div>
      <div className="about-project-page__description">
        <p className="about-project-page__paragraph">
          Книги из бесплатного набора вы можете читать без подписки, например, классику и издания,
          которые авторы и издатели разрешили читать без оплаты. Так что, если у вас подписка
          закончилась, а читать хочется — обратите на них внимание или перечитайте заново что-то из
          вечной классики.
        </p>
        <p className="about-project-page__paragraph">
          Все произведения на сайте пока-что представлены в формате pdf, но в будущем количество
          форматов может увеличится.
        </p>
        <p className="about-project-page__paragraph">Сейчас у нас в коллекции более 900 книг.</p>
      </div>
      <div className="about-project-page__title">Наша миссия</div>
      <div className="about-project-page__description">
        <p className="about-project-page__paragraph">
          Свободно искать, получать и распространять информацию является одним из важнейших
          политических и личных прав человека и включена во Всеобщую декларацию прав человека.
          Свобода слова, расширением которой является свобода информации, — это фундаментальное
          право человека, признанное в международном праве.
        </p>
      </div>
      <div className="about-project-page__title">История создания</div>
      <div className="about-project-page__description">
        <p className="about-project-page__paragraph">
          Электронная библиотека WeWeBook была создана в 2021 году на основе дипломной работы
          казахстанскими студентами.
        </p>
      </div>
      <div className="about-project-page__title">Правообладателям</div>
      <div className="about-project-page__description">
        <p className="about-project-page__paragraph">
          Все книги, представленные на сайте WeWeBook, являются исключительно собственностью
          авторов. Мы ни в коем случае не претендуем на данные произведения. Все книги берём из
          открытых источников и предоставляем их нашим читателям.
        </p>
        <p className="about-project-page__paragraph">
          Если вы являетесь автором книги, размещённой на нашем сайте, можете предоставить
          юридическое подтверждение своих авторских прав и не хотите, чтобы книга была размещена в
          библиотеке, тогда напишите в техническую по адресу{' '}
          <a href="mailto:wewebook@mail.ru" className="about-project-page__paragraph__link">
            WeWeBook@mail.ru
          </a>{' '}
          все книги, принадлежащие вам, будут удалены по первому требованию.
        </p>
      </div>
      <div className="about-project-page__message">
        С уважением администрация библиотеки{' '}
        <b>
          <a className="about-project-page__paragraph__link" href="/">
            WeWeBook
          </a>
        </b>
        .
      </div>
    </ShadowWrapper>
  );
};
