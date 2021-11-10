import React from 'react';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Geometry from '../components/Geometry';
import history from '../utils/history';
import logo from '../assets/images/logo techprep grueso.svg';
import { AUTHORIZED } from '../actions/constants';
import '../assets/styles/pages/Langing.scss';

function LandingPage() {
  const auth_status = useSelector((state) => state.auth_status);
  const [speed] = useState(0.4);
  const [target] = useState(5);
  const [count] = useState(40);

  useEffect(() => {
    if (auth_status === AUTHORIZED) {
      history.push('/home');
    }
  }, [auth_status]);

  return (
    <main className="landing__body">
      <Suspense fallback={null}>
        <div className="landing__3d-elements">
          <Geometry speed={speed} target={target} count={count} />
        </div>
      </Suspense>
      <div className="landing__fadeIn"></div>
      <section className="landing__overlay">
        <img src={logo} alt="logo" className="landing__logo" />
        <div className="landing__overlay-content">
          <h1>Tech-Prep</h1>
          <p>A collaborative interview prep platform</p>
          <div className="landing__overlay-content__buttons">
            <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/register')}>Register</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
