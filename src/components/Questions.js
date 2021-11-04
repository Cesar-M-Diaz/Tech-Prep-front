import React, { useState } from 'react';
import '../assets/styles/components/Question.scss';

function Questions({ card }) {
  const [flip, setFlip] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setFlip(!flip);
  }
  return (
    <div className="question__base" onClick={handleClick}>
      <div className="question__flip">
        <div className={`question__inner-flip ${flip && 'showBack'}`}>
          <div className="question__front-flip">
            <h3>{card.title}</h3>
            <div className="question-option__container">
              <div></div>
              <p>{card.option1}</p>
            </div>
            <div className="question-option__container">
              <div></div>
              <p>{card.option2}</p>
            </div>
            <div className="question-option__container">
              <div></div>
              <p>{card.option3}</p>
            </div>
          </div>
          <div className="question__back-flip">
            <h3>recursion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis quos itaque
              at ipsam officia amet ex illo omnis, molestias esse molestiae! Nulla officia amet
              ipsam. Minima voluptate dignissimos laboriosam! Facilis iusto unde iste nostrum ipsa
              vel nesciunt, possimus amet dolore, aspernatur quidem accusantium dolorem temporibus
              dolorum incidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;
