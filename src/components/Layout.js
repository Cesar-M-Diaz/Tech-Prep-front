import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import '../assets/styles/components/Layout.scss';

function Layout(props) {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <div className={`layout__container${active ? '-active' : '-hidden'}`}>{props.children}</div>
      <Footer />
    </>
  );
}

export default Layout;
