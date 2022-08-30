import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateEmail, validatePassword } from './funciones';

export const Login = () => {
  const navigate = useNavigate();
  // Funcion para canvelar el login
  const handleCancel = () => {
    navigate('/', { replace: false });
  };
  return (
    <div className="login__container">
      <div className="login__content card__shadow">
        <button className="btn__login-close" onClick={handleCancel}>
          <svg
            fill="crimson"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </button>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(valores) => {
            let errores = {};

            // validando email
            errores = validateEmail(valores, errores);

            // validando password
            errores = validatePassword(valores, errores);

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            console.log('formulario enviado');
            console.log(valores);
            resetForm();
          }}
        >
          {({ errors }) => (
            <Form>
              <div className="form__content-descrip">
                <h2 className="form__title">
                  <span>[</span> Ingresar <span>]</span>
                </h2>
                <small>Frente de Unidad del Magisterio</small>
              </div>

              <div className="form-control">
                <Field
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="mail"
                  placeholder="Ingrese su email"
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="form__error">{errors.email}</div>
                  )}
                />
              </div>

              <div className="form-control">
                <Field
                  autoComplete="off"
                  type="password"
                  name="password"
                  id="pass"
                  placeholder="Ingrese su password"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="form__error">{errors.password}</div>
                  )}
                />
              </div>

              <div className="form__btn-content">
                <small>LLene los campos e ingrese</small>
                <button type="submit" className="btn btn-primary btn__log">
                  Ingresar
                  <svg
                    fill="#bcb4b4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" />
                  </svg>
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="form__cuenta">
          <Link to={'/registro'}>
            NO tienes una cuenta? <span>Registrate aqui</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
