import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import history from '../utils/history';
import axios from '../utils/axios';
import { swalStyled } from '../components/SwalCongfig';
import '../assets/styles/pages/SelectLevel.scss';

function SelectLevelPage() {
  const user_id = useSelector((state) => state.currentUser._id);
  const [showAmmount, setShowAmmount] = useState({
    javascript: false,
    react: false,
  });
  const [question_number, setQuestion_number] = useState('');
  const [technology, setTechnology] = useState('');
  const [level, setLevel] = useState('');

  function selectTech(e) {
    const name = e.target.id;
    if (name === 'javascript') {
      setShowAmmount({
        javascript: !showAmmount.javascript,
        react: false,
      });
      setTechnology('javascript');
    } else if (name === 'react') {
      setShowAmmount({
        javascript: false,
        react: !showAmmount.react,
      });
      setTechnology('react');
    }
  }

  function selectlevel(e) {
    const levelName = e.target.innerText.toLowerCase();
    setLevel(levelName);
  }

  async function startGame(e) {
    e.preventDefault();
    const data = { user_id, technology, level, question_number };
    console.log(data);
    if (question_number === '' || level === '' || technology === '') {
      swalStyled.fire({
        icon: 'error',
        title: 'Please select the level and number of questions',
      });
    } else {
      try {
        const session = await axios.post('/session', data);
        const questions = session.data.questions;
        const session_id = session.data.session._id;
        history.push(`train/game`, {
          state: { questions, session_id },
        });
      } catch (error) {
        swalStyled.fire({
          icon: 'error',
          title: 'Oops... Please try again',
          text: error.message,
        });
      }
    }
  }

  function handleChange(e) {
    setQuestion_number(e.target.value);
  }

  return (
    <div className="level__page-body">
      <div className="level__container">
        <h2>Select your level</h2>
        <div
          className={
            level === 'junior' ? 'level__button-container-selected' : 'level__button-container'
          }
          onClick={selectlevel}
        >
          <div className="level__collapsible-a"></div>
          <p>Junior</p>
          <div className="level__collapsible-b"></div>
        </div>
        <div
          className={
            level === 'mid-junior' ? 'level__button-container-selected' : 'level__button-container'
          }
          // onClick={selectlevel}
        >
          <div className="level__collapsible-a"></div>
          <p>comming soon</p>
          <div className="level__collapsible-b"></div>
        </div>
      </div>
      <div className="level__technologies-container">
        <h2>Select Technology</h2>
        <div className="level__technologies-cards-container">
          <div
            className={
              !showAmmount.javascript ? 'level__technology-card' : 'level__technology-card-selected'
            }
          >
            {!showAmmount.javascript ? (
              <p onClick={selectTech} id="javascript" className="level__select-card">
                JavaScript
              </p>
            ) : (
              <>
                <p>JavaScript</p>
                <h3>Select the number of questions</h3>
                <div className="level__technology-card-select__container">
                  <select name="" id="" onChange={handleChange}>
                    <option value="" hidden>
                      number of questions
                    </option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                  <button onClick={startGame}>start</button>
                </div>
              </>
            )}
          </div>
          <div
            className={
              !showAmmount.react ? 'level__technology-card' : 'level__technology-card-selected'
            }
          >
            {!showAmmount.react ? (
              <p onClick={selectTech} id="react" className="level__select-card">
                React
              </p>
            ) : (
              <>
                <p>React</p>
                <h3>Select the number of questions</h3>
                <div className="level__technology-card-select__container">
                  <select name="" id="" onChange={handleChange}>
                    <option value="" hidden>
                      number of questions
                    </option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                  <button onClick={startGame}>start</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectLevelPage;
