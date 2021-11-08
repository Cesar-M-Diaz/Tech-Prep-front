import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import Slider from 'react-slick';
import history from '../utils/history';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../assets/styles/pages/GamePage.scss';
// import soundtrack from '../assets/audio/soundtrack.mp3';

function ResultPage() {
  // const [result, setResult] = useState(12);
  // const [questionsNumber, setQuestionsNumber] = useState(15);
  const [imageIndex, setImageIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mockQuestions = [
    {
      id: 1,
      answer: 'answer Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_1: 'answer Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
    {
      id: 2,
      answer: 'answer Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_1: 'answer Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
    {
      id: 3,
      answer: 'answer Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_1: 'answer Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
    {
      id: 4,
      answer: 'answer Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_1: 'answer Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
  ];

  function assignAnswers(answer, status) {
    setAnswers((prev) => ({ ...prev, [answer]: status }));
  }

  function submitAnswers() {
    Object.keys(answers).forEach((answer) => {
      if (answers[answer] === 'wrong') {
        setWrongAnswers((prev) => [...prev, answer]);
      }
    });
    history.push('/result');
  }
  console.log(wrongAnswers);
  console.log(answers);

  return (
    <div className="game-page">
      <div className="game-top">
        <h1>time left 10:00 min</h1>
      </div>
      <div className="game-questions-container">
        <Slider {...settings}>
          {mockQuestions?.map((answer, idx) => (
            <div className={idx === imageIndex ? 'game-slide-active-slide' : 'game-slide'}>
              <GameCard data={answer} flip={idx === imageIndex} assignAnswers={assignAnswers} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="game-controls">
        <div
          className={
            Object.keys(answers).length === mockQuestions.length
              ? 'game__button-container'
              : 'game__button-container-hidden'
          }
          onClick={submitAnswers}
        >
          <div className="game__collapsible-a"></div>
          <p>check answers</p>
          <div className="game__collapsible-b"></div>
        </div>
        <div className="game__button-container" onClick={() => history.push('/train')}>
          <div className="game__collapsible-a"></div>
          <p>quit game</p>
          <div className="game__collapsible-b"></div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
