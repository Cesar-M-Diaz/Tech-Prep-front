import React, { useState, useEffect } from 'react';
import Questions from '../components/Questions';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import history from '../utils/history';
import axios from '../utils/axios';
import { swalStyled } from '../components/SwalCongfig';
import '../assets/styles/pages/ResultPage.scss';

function ResultPage(props) {
  const id = props.match.params.id;
  const [page, setPage] = useState(1);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [scoreData, setScoreData] = useState({
    correct: '',
    total: '',
  });

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
        setScoreData({
          correct: sessionData.data.session.correct_answers.length,
          total: sessionData.data.session.question_number,
        });
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
      {page === 1 && (
        <div className="score__result-page">
          <h1 className="score__result-page-title">Session Score</h1>
          <div className="score__result-page-inner">
            <div className="score__result__number-container">
              <h2>
                {scoreData.correct}/{scoreData.total}
              </h2>
            </div>
            <div className="score__button-container desktop" onClick={() => setPage(page + 1)}>
              <div className="score__collapsible-a"></div>
              <p>next</p>
              <div className="score__collapsible-b"></div>
            </div>
            <div className="score__result__message-container">
              <div>
                {scoreData.correct < scoreData.total * 0.85 ? (
                  <h2>Keep practicing</h2>
                ) : (
                  <h2>Great job !</h2>
                )}
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
              {wrongAnswers?.map((answer) => (
                <div className="score-slide">
                  <Questions key={answer._id} data={answer} />
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
