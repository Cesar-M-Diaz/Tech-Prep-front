import logo from '../assets/images/logo techprep grueso.svg';
import '../assets/styles/components/GameCard.scss';

function GameCard({ data, flip }) {
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
                <div></div>
                <p>{data?.option_1}</p>
              </div>
              <div className="game-card-option__container">
                <div></div>
                <p>{data?.option_2}</p>
              </div>
              <div className="game-card-option__container">
                <div></div>
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
