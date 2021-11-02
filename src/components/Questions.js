import React from 'react';
import '../assets/styles/components/Question.scss';

function Questions({ questionsData }) {
  return (
    <div className="question__container">
      {questionsData.map((question) => (
        <div key={questionsData.id} className="question__body">
          <h3>{question.title}</h3>
          <div className="question-option__container">
            <button></button>
            <p>{question.option1}</p>
          </div>
          <div className="question-option__container">
            <button></button>
            <p>{question.option2}</p>
          </div>
          <div className="question-option__container">
            <button></button>
            <p>{question.option3}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Questions;
