import React, { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import CountDown from '../components/CountDown';
import Slider from 'react-slick';
import history from '../utils/history';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import axios from '../utils/axios';
import '../assets/styles/pages/GamePage.scss';
// import soundtrack from '../assets/audio/soundtrack.mp3';

function ResultPage(props) {
  const questionsData = props?.location?.state?.state?.questions;
  const _id = props?.location?.state?.state?.session_id;
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
    questionsData?.map((question) => setAnswers((prev) => ({ ...prev, [question._id]: 'wrong' })));
  }, [questionsData]);

  function assignAnswers(answer, status) {
    setAnswers((prev) => ({ ...prev, [answer]: status }));
    setIsAnswered((prev) => ({ ...prev, [answer]: true }));
  }

  async function submitAnswers() {
    try {
      const data = { _id, answers };
      await axios.put('/session', data);
      history.push(`/train/score/${_id}`);
    } catch (error) {
      console.log(error);
    }
  }

  const onTimesup = async () => {
    try {
      const data = { _id, answers };
      await axios.put('/session', data);
      history.push(`/train/score/${_id}`);
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
            <div className={idx === imageIndex ? 'game-slide-active-slide' : 'game-slide'}>
              <GameCard
                ket={answer._id}
                data={answer}
                flip={idx === imageIndex}
                assignAnswers={assignAnswers}
              />
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

export default ResultPage;
