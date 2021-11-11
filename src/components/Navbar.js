import React, { useState } from 'react';
import history from '../utils/history';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/components/Navbar.scss';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import logout from '../actions/logout';

function Navbar({ toggleMenu }) {
  const profilePhotoUser = useSelector((state) => state.currentUser.profile_photo);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const [toggleSecondaryMenu, setToggleSecondaryMenu] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    const { id } = e.target;
    const pathname = id.split('-')[0];

    // a little experiment with history instead of using react-router-dom <Link/>
    if (id === 'home__m' || id === 'home__d') {
      history.push('/home');
      setToggleSecondaryMenu(false);
    } else if (id === 'logout-m' || id === 'logout-d') {
      dispatch(logout());
      history.push('/');
      setToggleSecondaryMenu(false);
    } else if (id.match(/-m/)) {
      toggleMenu(setMenu(!menu));
      if (!pathname.match(/__/) && !pathname.match(/logout/)) {
        history.push(`/${pathname}`);
      }
    } else if (id.match(/-d/)) {
      setToggleSecondaryMenu(false);
      if (!pathname.match(/__/) && !pathname.match(/logout/)) {
        history.push(`/${pathname}`);
      }
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="header__wrapper">
          <div className="header-logo__container-mobile">
            <img
              src={logo}
              alt=""
              className="header__logo-mobile"
              id="home__m"
              onClick={handleClick}
            />
          </div>

          <div className="header__menu__container">
            {!menu ? (
              <FiMenu className="header__menu" onClick={handleClick} id="open__menu-m" />
            ) : (
              <MdClose className="header__menu" onClick={handleClick} id="close__menu-m" />
            )}
          </div>
          <div className={`header-links__container-mobile${menu ? '-active' : '-hidden'}`}>
            <img src={profilePhotoUser} alt="" />
            <p onClick={handleClick} id="profile-m">
              profile
            </p>
            <p onClick={handleClick} id="logout-m">
              logout
            </p>
            <p onClick={handleClick} id="train-m">
              train
            </p>
            <p onClick={handleClick} id="questions/my_questions-m">
              questions
            </p>
            <p onClick={handleClick} id="sessions-m">
              sessions
            </p>
          </div>
          <section className="header__container-wrapper">
            <div className="header__container">
              <div className="header-logo__container">
                <Link to="/home">
                  <img
                    src={logo}
                    alt=""
                    className="header__logo"
                    onClick={handleClick}
                    id="home__d"
                  />
                </Link>
              </div>
              <div className="header-links__container">
                <p onClick={handleClick} id="train-d">
                  train
                </p>
                <p onClick={handleClick} id="questions/my_questions-d">
                  questions
                </p>
                <p onClick={handleClick} id="sessions-d">
                  sessions
                </p>
                <img
                  src={profilePhotoUser}
                  alt=""
                  onClick={() => setToggleSecondaryMenu(!toggleSecondaryMenu)}
                />
              </div>
            </div>
            <div
              className={`header-secondary-links__container${
                toggleSecondaryMenu ? '-active' : '-hidden'
              }`}
            >
              <p onClick={handleClick} id="profile-d">
                profile
              </p>
              <p onClick={handleClick} id="logout-d">
                logout
              </p>
            </div>
          </section>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
