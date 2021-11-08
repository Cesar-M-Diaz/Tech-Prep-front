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
      question: '¿Cuál es la capital de México?',
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explanation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis corrupti, quibusdam quis autem aliquid deserunt voluptates repudiandae ducimus dolorum molestias nihil ipsa! Quam eveniet delectus officiis vitae at quaerat? Neque dicta, recusandae totam eos nam facere perspiciatis ipsa aspernatur rerum quam inventore.',
      title: 'recursion',
    },
    {
      id: 2,
      question: '¿Cuál es la capital de colombia?',
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explanation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis corrupti, quibusdam quis autem aliquid deserunt voluptates repudiandae ducimus dolorum molestias nihil ipsa! Quam eveniet delectus officiis vitae at quaerat? Neque dicta, recusandae totam eos nam facere perspiciatis ipsa aspernatur rerum quam inventore.',
      title: 'recursion 2',
    },
    {
      id: 3,
      question: '¿Cuál es la capital de chile?',
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explanation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis corrupti, quibusdam quis autem aliquid deserunt voluptates repudiandae ducimus dolorum molestias nihil ipsa! Quam eveniet delectus officiis vitae at quaerat? Neque dicta, recusandae totam eos nam facere perspiciatis ipsa aspernatur rerum quam inventore.',
      title: 'recursion 3',
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
          {questionsData.map((question) => (
            <Questions key={question.id} data={question} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
