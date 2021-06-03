import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'components/common/Button';
import Premium from 'icons/Premium.jsx';
import Free from 'icons/Free.jsx';
import './Account.scss';

const Account = ({ user }) => {
  const getUserAge = () => {
    const now = Date.now();
    const dateBorn = Date.parse(user.dateBorn);
    const age = Math.floor((now - dateBorn) / 31536000000);
    return age;
  };
  console.log(user.subscribe);
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
              Возраст: <b>{getUserAge()}</b>
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
        <Button className="account__button">Выход</Button>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user.info,
});

export default connect(mapStateToProps)(Account);
