import React, { useState } from 'react';
import history from '../utils/history';
import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/components/Navbar.scss';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons';

function Navbar({ toggleMenu }) {
  const [menu, setMenu] = useState(false);
  const [toggleSecondaryMenu, setToggleSecondaryMenu] = useState(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="header__wrapper">
          <div className="header-logo__container-mobile">
            <img
              src={logo}
              alt=""
              className="header__logo-mobile"
              onClick={() => history.push('/home')}
            />
          </div>
          <div className="header__menu__container">
            {!menu ? (
              <FiMenu className="header__menu" onClick={() => toggleMenu(setMenu(!menu))} />
            ) : (
              <MdClose className="header__menu" onClick={() => toggleMenu(setMenu(!menu))} />
            )}
          </div>
          <div className={`header-links__container-mobile${menu ? '-active' : '-hidden'}`}>
            <img src="" alt="" />
            <p onClick={() => history.push('/profile')}>profile</p>
            <p>logout</p>
            <p>train</p>
            <p>add questions</p>
            <p>resources</p>
          </div>
          <section className="header__container-wrapper">
            <div className="header__container">
              <div className="header-logo__container">
                <img
                  src={logo}
                  alt=""
                  className="header__logo"
                  onClick={() => history.push('/home')}
                />
              </div>
              <div className="header-links__container">
                <p>train</p>
                <p>add questions</p>
                <p>resources</p>
                <img src="" alt="" onClick={() => setToggleSecondaryMenu(!toggleSecondaryMenu)} />
              </div>
            </div>
            <div
              className={`header-secondary-links__container${
                toggleSecondaryMenu ? '-active' : '-hidden'
              }`}
            >
              <p onClick={() => history.push('/profile')}>profile</p>
              <p>logout</p>
            </div>
          </section>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
