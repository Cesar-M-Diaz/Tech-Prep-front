import React, { useState, useEffect } from 'react';
import Questions from '../components/Questions';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import history from '../utils/history';
import axios from '../utils/axios';
import { swalStyled } from '../components/SwalCongfig';
import Loader2 from '../components/Loader2';
import '../assets/styles/pages/SessionScore.scss';

function SessionScorePage(props) {
  const id = props.match.params.id;
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    async function getAnwers(id) {
      try {
        const sessionData = await axios.get(`/session/${id}`);
        const wrong_answers = sessionData.data.wrong_questions;
        setWrongAnswers(wrong_answers);
        setIsLoading(false);
      } catch (err) {
        swalStyled.fire({
          icon: 'error',
          title: 'Oops... Please try again Score Page',
          text: err.message,
        });
      }
    }
    getAnwers(id);
  }, [id]);

  return (
    <div className="score__page">
      <div className="score__questions-page">
        <div className="session-score__top-container">
          <h1>Wrong Answers</h1>
          <button onClick={() => history.push('/sessions')}>go back</button>
        </div>
        {isLoading ? (
          <div className="score-loader_container">
            <Loader2 />
          </div>
        ) : wrongAnswers.length === 0 ? (
          <p className="result-page__success_message">
            Nothing to see here!! you did great, keep the good work
          </p>
        ) : (
          <div className="score-answers-container">
            <Slider {...settings}>
              {wrongAnswers?.map((answer) => (
                <div key={answer._id} className="score-slide">
                  <Questions data={answer} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}

export default SessionScorePage;
