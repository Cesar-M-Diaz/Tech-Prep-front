import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/components/GameCard.scss';
// import { useState } from 'react';

function GameCard({ data, flip, assignAnswers }) {
  function selectAnswer(e) {
    e.preventDefault();
    const id = e.target.id;
    const answer = data[id];
    if (answer !== data.answer) {
      assignAnswers(data.id, 'wrong');
    } else {
      assignAnswers(data.id, 'correct');
    }
  }

  return (
    <div className="game-card__base">
      <div className="game-card__flip-card">
        <div className={`game-card__flip-card-inner ${flip && 'showBack'}`}>
          <div className="game-card__flip-card-front">
            <img src={logo} alt="logo" className="game-tech-prep__logo" />
          </div>
          <div className="game-card__flip-card-back">
            <p>{data?.question}</p>
            <div className="game-card__option-text-container">
              <div className="game-card-option__container">
                <button id="option_1" onClick={selectAnswer}></button>
                <p>{data?.option_1}</p>
              </div>
              <div className="game-card-option__container">
                <button id="option_2" onClick={selectAnswer}></button>
                <p>{data?.option_2}</p>
              </div>
              <div className="game-card-option__container">
                <button id="option_3" onClick={selectAnswer}></button>
                <p>{data?.option_3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
