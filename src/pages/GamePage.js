import React, { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import CountDown from '../components/CountDown';
import Slider from 'react-slick';
import history from '../utils/history';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import axios from '../utils/axios';
import '../assets/styles/pages/GamePage.scss';
// import soundtrack from '../assets/audio/soundtrack.mp3';

function GamePage(props) {
  const questionsData = props?.location?.state?.state?.questions;
  const id = props.match.params.id;
  const [imageIndex, setImageIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState([]);
  const [answers, setAnswers] = useState({});

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
    swipeToSlide: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
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

  useEffect(() => {
    if (questionsData) {
      questionsData?.map((question) =>
        setAnswers((prev) => ({ ...prev, [question._id]: 'wrong' })),
      );
    } else {
      history.push('/train');
    }
  }, [questionsData]);

  function assignAnswers(answer, status) {
    setAnswers((prev) => ({ ...prev, [answer]: status }));
    setIsAnswered((prev) => ({ ...prev, [answer]: true }));
  }

  async function submitAnswers() {
    try {
      const data = { id, answers };
      await axios.put('/session', data);
      history.push(`/train/score/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  const onTimesup = async () => {
    try {
      const data = { id, answers };
      await axios.put('/session', data);
      history.push(`/train/score/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="game-page">
      <div className="game-top">
        <h1>
          time left <CountDown onTimesup={onTimesup} duration={questionsData?.length * 60} /> min
        </h1>
      </div>
      <div className="game-questions-container">
        <Slider {...settings}>
          {questionsData?.map((answer, idx) => (
            <div
              key={answer._id}
              className={idx === imageIndex ? 'game-slide-active-slide' : 'game-slide'}
            >
              <GameCard data={answer} flip={idx === imageIndex} assignAnswers={assignAnswers} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="game-controls">
        <div
          className={
            Object.keys(isAnswered).length === questionsData?.length
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

export default GamePage;
