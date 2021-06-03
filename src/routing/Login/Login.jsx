import React, { useState, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button } from 'components/common/Button';
import { RouteButton } from 'components/common/RouteButton';
import { Modal } from 'components/common/Modal';
import { TextField } from 'components/formik/TextField';
import { setUser } from 'redux/actions';
import localForage from 'localforage';
import { signIn } from 'api';
import './Login.scss';
import login from './login.png';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Введенное значение не является почтой')
    .required('Заполните поле электронной почты'),
  password: yup.string().min(8, 'Не меньше 8 символов').required('Заполните поле пароль'),
});

const Login = ({ setUser }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleSubmit = useCallback(
    (values, helpers) => {
      signIn({
        login: values.email,
        password: values.password,
      })
        .finally(() => {
          helpers.setSubmitting(false);
        })
        .then(async response => {
          if (response.success) {
            helpers.resetForm();
            await localForage.setItem('token', response.data.token);
            setUser(response.data.user);
          }
        });
    },
    [setUser]
  );

  return (
    <>
      <div className="login__page container">
        <div className="form__wrapper">
          <h1 className="form__title">Добро пожаловать</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="login__form">
                <div className="form__inputs">
                  <TextField
                    className="form__email"
                    type="email"
                    name="email"
                    variant="underlined"
                    placeholder="Электронная почта"
                    disabled={isSubmitting}
                  />
                  <TextField
                    className="form__password"
                    type="password"
                    name="password"
                    variant="underlined"
                    placeholder="Пароль"
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  className="form__button"
                  variant="outlined"
                  size="medium"
                  disabled={isSubmitting}
                >
                  Войти
                </Button>
              </Form>
            )}
          </Formik>
          <Button className="form__link" onClick={() => setOpen(true)}>
            Забыли пароль?
          </Button>
          {/* prettier-ignore */}
          <div>У вас нет аккаунта? <a href="/registration" className="form__link">Зарегистрируйтесь.</a></div>
        </div>
        <div className="login__image">
          <img src={login} alt="" />
          <RouteButton className="form__back-button-log" to="/">
            Назад
          </RouteButton>
        </div>
      </div>
      <Modal className="modal" open={open} onClose={handleClose}>
        <button className="close" onClick={handleClose}>
          <div className="close-icon">
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>
        </button>
        <div className="modal forgot-password wrapper">
          <div className="login forgot-password__title">
            Введите адрес электронной почты:
            <input className="forgot-password__email" type="text" placeholder="Электронная почта" />
          </div>
          <Button className="login forgot-password__button">Сбросить пароль</Button>
        </div>
      </Modal>
    </>
  );
};

const mapDispathToProps = dispatch => bindActionCreators({ setUser }, dispatch);

export default connect(null, mapDispathToProps)(Login);
