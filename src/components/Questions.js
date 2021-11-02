import React from 'react';

function Questions({ questionsData }) {
  return (
    <>
      {questionsData.map((question) => (
        <div>
          <h3>{question.title}</h3>
          <p>{question.option1}</p>
          <p>{question.option2}</p>
          <p>{question.option3}</p>
        </div>
      ))}
    </>
  );
}

export default Questions;
