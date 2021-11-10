import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/components/GameCard.scss';
import { useState } from 'react';

function GameCard({ data, flip, assignAnswers }) {
  const [selected, setSelected] = useState({
    option_1: false,
    option_2: false,
    option_3: false,
  });

  function selectAnswer(e) {
    e.preventDefault();
    const id = e.target.id;
    const cleanId = id.split('-')[0];
    const answer = data[cleanId];

    if (cleanId === 'option_1') {
      setSelected({
        option_1: true,
        option_2: false,
        option_3: false,
      });
    } else if (cleanId === 'option_2') {
      setSelected({
        option_1: false,
        option_2: true,
        option_3: false,
      });
    } else if (cleanId === 'option_3') {
      setSelected({
        option_1: false,
        option_2: false,
        option_3: true,
      });
    }

    if (answer !== data.answer) {
      assignAnswers(data._id, 'wrong');
    } else {
      assignAnswers(data._id, 'correct');
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
              <div
                className={`game-card-option__container ${selected.option_1 && 'selected'} `}
                id="option_1-div"
                onClick={selectAnswer}
              >
                <div id="option_1-button"></div>
                <p id="option_1-text">{data?.option_1}</p>
              </div>
              <div
                className={`game-card-option__container ${selected.option_2 && 'selected'} `}
                id="option_2-div"
                onClick={selectAnswer}
              >
                <div id="option_2-button"></div>
                <p id="option_2-text">{data?.option_2}</p>
              </div>
              <div
                className={`game-card-option__container ${selected.option_3 && 'selected'} `}
                id="option_3-div"
                onClick={selectAnswer}
              >
                <div id="option_3-button"></div>
                <p id="option_3-text">{data?.option_3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
