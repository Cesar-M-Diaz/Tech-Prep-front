import React, { useState } from 'react';
import Questions from '../components/Questions';
import Slider from 'react-slick';
import history from '../utils/history';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../assets/styles/pages/ResultPage.scss';

function ResultPage() {
  const [result] = useState(12);
  const [questionsNumber] = useState(15);
  const [page, setPage] = useState(1);
  // const [answers, setAnswers] = useState('');

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
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const answers = [
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
    {
      id: 4,
      question: '¿Cuál es la capital de perú?',
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explanation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis corrupti, quibusdam quis autem aliquid deserunt voluptates repudiandae ducimus dolorum molestias nihil ipsa! Quam eveniet delectus officiis vitae at quaerat? Neque dicta, recusandae totam eos nam facere perspiciatis ipsa aspernatur rerum quam inventore.',
      title: 'recursion 4',
    },
    {
      id: 5,
      question: '¿Cuál es la capital de ecuador?',
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explanation:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis corrupti, quibusdam quis autem aliquid deserunt voluptates repudiandae ducimus dolorum molestias nihil ipsa! Quam eveniet delectus officiis vitae at quaerat? Neque dicta, recusandae totam eos nam facere perspiciatis ipsa aspernatur rerum quam inventore.',
      title: 'recursion 5',
    },
  ];

  return (
    <div className="score__page">
      {page === 1 && (
        <div className="score__result-page">
          <h1 className="score__result-page-title">Session Score</h1>
          <div className="score__result-page-inner">
            <div className="score__result__number-container">
              <h2>
                {result}/{questionsNumber}
              </h2>
            </div>
            <div className="score__button-container desktop" onClick={() => setPage(page + 1)}>
              <div className="score__collapsible-a"></div>
              <p>next</p>
              <div className="score__collapsible-b"></div>
            </div>
            <div className="score__result__message-container">
              <div>
                {result < questionsNumber * 0.85 ? <h2>Keep practicing</h2> : <h2>Great job !</h2>}
              </div>
            </div>
          </div>
          <div className="score__button-container mobile" onClick={() => setPage(page + 1)}>
            <div className="score__collapsible-a"></div>
            <p>next</p>
            <div className="score__collapsible-b"></div>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="score__questions-page">
          <div className="score__top-container">
            <h1 className="score__title-container-mobile">Failed questions</h1>
            <div className="score__button-container" onClick={() => setPage(page - 1)}>
              <div className="score__collapsible-a"></div>
              <p>Back</p>
              <div className="score__collapsible-b"></div>
            </div>
            <h1 className="score__title-container-desktop">Failed questions</h1>
            <div className="score__button-container" onClick={() => history.push('/train')}>
              <div className="score__collapsible-a"></div>
              <p>Finish</p>
              <div className="score__collapsible-b"></div>
            </div>
          </div>
          <div className="score-answers-container">
            <Slider {...settings}>
              {answers?.map((answer) => (
                <div className="score-slide">
                  <Questions data={answer} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultPage;
