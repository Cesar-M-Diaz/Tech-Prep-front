import { useState, useEffect } from 'react';
import Questions from '../components/Questions';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import jsLogo from '../assets/images/jsLogo.png';
import reactLogo from '../assets/images/reactLogo.png';
import axios from '../utils/axios';
import Loader2 from '../components/Loader2';
import 'normalize.css';
import '../assets/styles/pages/HomePage.scss';

function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="home-arrow-next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="home-arrow-prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
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
    async function getQuestions() {
      try {
        const { data } = await axios.get('/question');
        setQuestions(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
    getQuestions();
  }, []);

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
          <div className="home-answers-container">
            {isLoading ? (
              <Loader2 />
            ) : (
              <Slider {...settings}>
                {questions?.map((question, idx) => (
                  <div key={question._id} className="home-slide">
                    <p className="home-slide__text">
                      Added by: <span>{question.user_id.name}</span>{' '}
                    </p>
                    <p className="home-slide__text">
                      Technology: <span>{question.technology}</span>{' '}
                    </p>
                    <p className="home-slide__text">
                      Question level: <span>{question.level}</span>{' '}
                    </p>
                    <Questions data={question} />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
