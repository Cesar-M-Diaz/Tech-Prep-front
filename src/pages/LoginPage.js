import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/pages/Login.scss';

function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="login-page__body">
      <img src={logo} alt="logo" className="tech-prep__logo" />
      <form onSubmit={handleSubmit(onSubmit)} className="login-form__container">
        <section className="login-form__auth-0">
          <button>Continue with Google</button>
          <button>Continue with GitHub</button>
        </section>
        <div className="login-page__division">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <section className="login-form__data">
          <input
            type="email"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder="Email"
          />
          {(errors.email?.type === 'required' && <p>Email is required</p>) ||
            (errors.email?.type === 'pattern' && <p>Please enter a valid email</p>)}
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 5,
            })}
            placeholder="Password"
          />
          {(errors.password?.type === 'required' && <p>Password is required</p>) ||
            (errors.password?.type === 'minLength' && <p>Password is to short</p>)}
          <button type="submit">Login</button>
        </section>
        <div className="link-text">
          Don't have an account ?{' '}
          <Link to="/register">
            <p className="link"> Register </p>
          </Link>{' '}
        </div>
      </form>
    </main>
  );
}

export default LoginPage;
