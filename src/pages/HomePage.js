import React from 'react';
import Questions from '../components/Questions';
import 'normalize.css';
import '../assets/styles/pages/HomePage.scss';

function HomePage() {
  const questionsData = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];
  console.log(questionsData);

  return (
    <div className="home__body">
      <div className="home__questions-container">
        <h1>last questions added by the community</h1>
        <div className="home__questions">
          <Questions questionsData={questionsData} />
        </div>
      </div>
      <div className="home__technologies-container">
        <h2>technologies covered</h2>
        <div className="home__technologies-images">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
