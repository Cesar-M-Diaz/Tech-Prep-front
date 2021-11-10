import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import history from '../utils/history';
import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/pages/Login.scss';
import login from '../actions/login';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHORIZED } from '../actions/constants';
// import { FcGoogle } from 'react-icons/fc';
// import { FaGithub } from 'react-icons/fa';

function LoginPage() {
  const auth_status = useSelector((state) => state.auth_status);
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onTouched',
  });
  // const onSubmit = () => history.push('/home');

  useEffect(() => {
    if (auth_status === AUTHORIZED) {
      history.push('/home');
    }
  }, [auth_status]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    await validateCredentials(data);
  };

  const validateCredentials = ({ email, password }) => {
    dispatch(login({ email, password }));
  };

  return (
    <main className="login-page__body">
      <img src={logo} alt="logo" className="tech-prep__logo" onClick={() => history.push('/')} />
      <form onSubmit={handleSubmit(onSubmit)} className="login-form__container">
        {/* <section className="login-form__auth-0">
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
        <div className="login-page__division">
          <div></div>
          <p>or</p>
          <div></div>
        </div> */}
        <section className="login-form__data">
          <label className="input__label">Email</label>
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
          <label className="input__label">Password</label>
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
          {globalState.login_failed && (
            <span style={{ color: 'red' }}>Incorrect email or password, please try again.</span>
          )}
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
