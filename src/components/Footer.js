import React from 'react';
import '../assets/styles/components/Footer.scss';

function Footer() {
  return (
    <section className="footer-body">
      <div className="footer-line"></div>
      <div className="footer-text__container">
        <p>2021 Tech-prep</p>
        <p>built for the Dev Community</p>
        <p>
          <a href="https://github.com/Cesar-M-Diaz/Tech-Prep-front">github repo</a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
