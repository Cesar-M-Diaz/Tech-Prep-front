import React from 'react';
import '../assets/styles/pages/Error.scss';
import { Player } from '@lottiefiles/react-lottie-player';

function ErrorPage() {
  return (
    <div className="error-page">
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_7dk7klml.json"
        className="error__illustration"
      ></Player>
    </div>
  );
}

export default ErrorPage;
