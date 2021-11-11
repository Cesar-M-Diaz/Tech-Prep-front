import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import history from '../utils/history';
import '../assets/styles/components/LayoutQuestions.scss';

function LayoutQuestions(props) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(window.location.pathname);
  const [selectSelected, setSelectSelected] = useState(window.location.pathname);
  const toggleMenu = () => {
    setActive(!active);
  };
  const handleClick = (e) => {
    setSelected(e.target.id);
    history.push(`/questions/${e.target.id}`);
    setSelected(`/questions/${e.target.id}`);
  };
  const handleChange = (e) => {
    history.push(e.target.value);
    setSelectSelected(e.target.value);
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
      <div className={`layout-divission${active ? '-active' : '-hidden'}`}>
        <div className="layout-button-container">
          <button
            id="my_questions"
            className={`questions-layout ${selected === '/questions/my_questions' && `selected`}`}
            onClick={handleClick}
          >
            My Questions
          </button>
          <button
            id="add_questions"
            className={`questions-layout ${selected === '/questions/add_questions' && `selected`}`}
            onClick={handleClick}
          >
            Add Question
          </button>
        </div>
        <div className="layout-select-container">
          <select value={selectSelected} onChange={handleChange}>
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
