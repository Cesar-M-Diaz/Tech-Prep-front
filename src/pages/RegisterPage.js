import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import history from '../utils/history';
import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/pages/Register.scss';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

function RegisterPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main className="register-page__body">
      <img src={logo} alt="logo" className="tech-prep__logo" onClick={() => history.push('/')} />
      <form onSubmit={handleSubmit(onSubmit)} className="register-form__container">
        <section className="register-form__auth-0">
          <button>
            <div className="auth-0-button__container">
              <FcGoogle className="company__logo" />
              <p>Continue with Google</p>
            </div>
          </button>
          <button>
            <div className="auth-0-button__container">
              <FaGithub className="company__logo" />
              <p>Continue with GitHub</p>
            </div>
          </button>
        </section>
        <div className="register-page__division">
          <div></div>
          <p>or</p>
          <div></div>
        </div>
        <section className="register-form__data">
          <input
            type="text"
            {...register('name', {
              required: true,
              pattern:
                /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
            })}
            placeholder="Name"
          />
          {(errors.name?.type === 'required' && <p>Name is required</p>) ||
            (errors.name?.type === 'pattern' && <p>Name must only contain letters</p>)}
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
          <button type="submit">Register</button>
        </section>

        <p className="link-text">
          Already have an account ?
          <Link to="/login">
            <p className="link"> Login </p>
          </Link>
        </p>
      </form>
    </main>
  );
}

export default RegisterPage;
