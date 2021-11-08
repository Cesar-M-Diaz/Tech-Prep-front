import React, { useState } from 'react';
import '../assets/styles/pages/SelectLevel.scss';
import history from '../utils/history';

function SelectLevelPage() {
  const [showAmmount, setShowAmmount] = useState({
    javascript: false,
    react: false,
  });
  const [questionNumber, setQuestionNumber] = useState('');
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

  function startGame(e) {
    e.preventDefault();
    if (questionNumber === '' || level === '') {
      alert('Please select the level and number of questions');
    } else {
      history.push(`train/game`);
      console.log({ technology: technology, level: level, questionNumber: questionNumber });
    }
  }

  function handleChange(e) {
    setQuestionNumber(e.target.value);
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
              <p onClick={selectTech} id="javascript">
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
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
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
              <p onClick={selectTech} id="react">
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
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
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
