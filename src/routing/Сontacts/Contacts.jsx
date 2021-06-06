import React, { useEffect } from 'react';
import { ShadowWrapper } from 'components/ShadowWrapper';
import GithubIcon from '../../icons/GithubIcon';
import './Contacts.scss';

export const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ShadowWrapper className="contacts-page container">
      <h2 className="contacts-page__title">Контакты</h2>
      <div className="contacts-page__row">
        <div className="contacts-page__column">
          <div className="contacts-page__column-line">
            <div className="contacts-page__designation">Адрес:</div>
            <div className="contacts-page__description">
              ул. Бейбитшилик, 39, Нур-Султан (Астана)
            </div>
          </div>
          <div className="contacts-page__column-line">
            <div className="contacts-page__designation">Электронная почта:</div>
            <div className="contacts-page__description">
              <a className="contacts-page__email" href="mailto:wewebook@mail.ru">
                WeWeBook@mail.ru
              </a>
            </div>
          </div>
          <div className="contacts-page__column-line">
            <div className="contacts-page__designation">Общие контакты:</div>
            <div className="contacts-page__description">8 (747) 117-44-85</div>
          </div>

          <div className="contacts-page__designation">Разработчики:</div>
          <div className="contacts-page__developers">
            <div className="contacts-page__developer">
              <div className="developer__name">Мунько Дмитрий</div>
              <div className="developer__link">
                <a
                  className="developer__icon"
                  href="https://github.com/DimNezZ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
              </div>
              |
            </div>
            <div className="contacts-page__developer">
              <div className="developer__name">Моисеенко Дмитрий</div>
              <div className="developer__link">
                <a
                  className="developer__icon"
                  href="https://github.com/Majest228"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="contacts-page__designation">Помогали в разработке:</div>
          <div className="contacts-page__developers">
            <div className="contacts-page__developer">
              <div className="developer__name">Seasle</div>
              <div className="developer__link">
                <a
                  className="developer__icon"
                  href="https://github.com/Seasle"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contacts-page__column">
          <div className="contacts-page__map-wrapper">
            <iframe
              className="contacts-page__map"
              title="Наше местоположение"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Acc7fca44074c11f67bd635543be4e760bc4435054f3fc421010391d2cd438c33&amp;source=constructor"
              width="500"
              height="400"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </ShadowWrapper>
  );
};
