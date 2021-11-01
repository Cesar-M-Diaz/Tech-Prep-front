import React from 'react';
import { Suspense } from 'react';
import { useState } from 'react';
import Geometry from '../components/Geometry';
import history from '../utils/history';
import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/pages/Langing.scss';

function LandingPage() {
  const [speed] = useState(0.4);
  const [target] = useState(5);
  const [count] = useState(30);
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
