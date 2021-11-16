import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import history from '../utils/history';
import '../assets/styles/components/LayoutQuestions.scss';

function LayoutQuestions(props) {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
  };

  const handleClick = (e) => {
    history.push(e.target.id);
  };
  const handleChange = (e) => {
    history.push(e.target.value);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <div className={`layout-divission${active ? '-active' : '-hidden'}`}>
        <div className="layout-button-container">
          <button
            id="/questions/my_questions"
            className={`questions-layout ${
              window.location.pathname === '/questions/my_questions' && `selected`
            }`}
            onClick={handleClick}
          >
            My Questions
          </button>
          <button
            id="/questions/add_questions"
            className={`questions-layout ${
              window.location.pathname === '/questions/add_questions' && `selected`
            }`}
            onClick={handleClick}
          >
            Add Question
          </button>
        </div>
        <div className="layout-select-container">
          <select value={window.location.pathname} onChange={handleChange}>
            <option value="/questions/my_questions">my questions</option>
            <option value="/questions/add_questions">add questions</option>
          </select>
        </div>
        <div className="layout-questions__container">{props.children}</div>
      </div>
      <Footer />
    </>
  );
}

export default LayoutQuestions;
