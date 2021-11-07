import React, { useState } from 'react';
import GameCard from '../components/GameCard';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../assets/styles/pages/ResultPage.scss';
import soundtrack from '../assets/audio/soundtrack.mp3';

function ResultPage() {
  const [result, setResult] = useState(12);
  const [questionsNumber, setQuestionsNumber] = useState(15);
  const [page, setPage] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
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

  const answers = [
    {
      id: 1,
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
    {
      id: 2,
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
    {
      id: 3,
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
    {
      id: 4,
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
    {
      id: 5,
      option_1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      option_3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      question:
        '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia doloremque inventore accusamus quae quod cumque voluptate dolorem labore ea.',
    },
  ];

  return (
    <div className="game-questions-container">
      <button>audio on</button>
      <button>quit game</button>
      <Slider {...settings}>
        {answers?.map((answer, idx) => (
          <div className={idx === imageIndex ? 'game-slide-active-slide' : 'game-slide'}>
            <GameCard data={answer} flip={idx === imageIndex} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ResultPage;
