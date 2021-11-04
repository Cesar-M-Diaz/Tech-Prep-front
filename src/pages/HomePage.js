import React from 'react';
import Questions from '../components/Questions';
import 'normalize.css';
import '../assets/styles/pages/HomePage.scss';
import jsLogo from '../assets/images/jsLogo.png';
import reactLogo from '../assets/images/reactLogo.png';

function HomePage() {
  const questionsData = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explanation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea. Atque odit est tempora quam architecto dolorum dolorem doloremque natus!',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explanation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea. Atque odit est tempora quam architecto dolorum dolorem doloremque natus!',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explanation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea. Atque odit est tempora quam architecto dolorum dolorem doloremque natus!',
    },
  ];

  return (
    <div className="home__body">
      <div className="home__technologies-container">
        <h2>technologies covered</h2>
        <div className="home__technologies-images">
          <img src={jsLogo} alt="" />
          <img src={reactLogo} alt="" />
        </div>
      </div>
      <div className="home__questions-container">
        <h1>last questions added by the community</h1>
        <div className="home__questions">
          {questionsData.map((card) => (
            <Questions key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
