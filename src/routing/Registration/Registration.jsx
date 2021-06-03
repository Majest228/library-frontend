import React, { useCallback } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button } from 'components/common/Button';
import { useHistory } from 'react-router';
import { RouteButton } from 'components/common/RouteButton';
import { TextField } from 'components/formik/TextField';
import { signUp } from 'api';
import './Registration.scss';
import registration from './registration.png';

const parseDate = (currentValue, originalValue) => {
  if (originalValue !== null) {
    const date = new Date(originalValue);

    return date.toString() !== 'Invalid Date' ? date : null;
  } else {
    return null;
  }
};

const initialValues = {
  firstName: '',
  lastName: '',
  bornDate: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required('Заполните поле имя'),
  lastName: yup.string().required('Заполните поле фамилия'),
  bornDate: yup
    .date()
    .transform(parseDate)
    .typeError('Дата не является валидной')
    .nullable()
    .required('Заполните дату рождения'),
  email: yup
    .string()
    .email('Введенное значение не является почтой')
    .required('Заполните поле электронной почты'),
  password: yup.string().min(8, 'Не меньше 8 символов').required('Заполните поле пароль'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    .min(8, 'Не меньше 8 символов')
    .required('Заполните поле пароль'),
});

export const Registration = () => {
  const history = useHistory();

  const handleSubmit = useCallback(
    (values, helpers) => {
      signUp({
        name: values.firstName,
        surname: values.lastName,
        dateBorn: values.bornDate,
        login: values.email,
        password: values.password,
        passwordConfirm: values.confirmPassword,
        subscribe: false,
      })
        .finally(() => {
          helpers.setSubmitting(false);
        })
        .then(response => {
          if (response.success) {
            history.push('/login');
          }
        });
    },
    [history]
  );

  return (
    <>
      <div className="registration__page container">
        <div className="form__wrapper">
          <h1 className="form__title">Регистрация</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnBlur
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="registration__form">
                <div className="form__inputs">
                  <TextField
                    className="form__field"
                    variant="underlined"
                    name="firstName"
                    placeholder="Имя"
                    disabled={isSubmitting}
                  />
                  <TextField
                    className="form__field"
                    variant="underlined"
                    name="lastName"
                    placeholder="Фамилия"
                    disabled={isSubmitting}
                  />
                  <TextField
                    className="form__field"
                    variant="underlined"
                    name="bornDate"
                    type="date"
                    placeholder="Дата рождения"
                    disabled={isSubmitting}
                  />
                  <TextField
                    className="form__field"
                    variant="underlined"
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                    disabled={isSubmitting}
                  />
                  <TextField
                    className="form__field"
                    variant="underlined"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    disabled={isSubmitting}
                  />
                  <TextField
                    className="form__field"
                    variant="underlined"
                    name="confirmPassword"
                    type="password"
                    placeholder="Повторите пароль"
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
                  Зарегистрироваться
                </Button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="registration__image">
          <img src={registration} alt="" />
          <RouteButton className="form__back-button-reg" to="/login">
            Назад
          </RouteButton>
        </div>
      </div>
    </>
  );
};
