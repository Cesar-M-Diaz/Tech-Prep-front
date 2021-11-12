import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CardEdit from '../components/CardEdit';
import axios from '../utils/axios';
import { swalStyled } from '../components/SwalCongfig';
import '../assets/styles/pages/CardCreatePage.scss';

function CreateCardPage() {
  const user_id = useSelector((state) => state.currentUser._id);
  const [count, setCount] = useState(1);
  const [isAnswer, setIsAnswer] = useState({
    option_1: false,
    option_2: false,
    option_3: false,
  });
  const [questionData, setQuestionData] = useState({
    technology: '',
    level: '',
    question: '',
    option_1: '',
    option_2: '',
    option_3: '',
    title: '',
    explanation: '',
    answer: '',
  });
  const [errors, setErrors] = useState({
    technology: '',
    level: '',
    question: '',
    option_1: '',
    option_2: '',
    option_3: '',
    title: '',
    explanation: '',
    submit: '',
  });

  const handleChange = (e) => {
    setQuestionData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function selAnswer(e) {
    e.preventDefault();
    if (e.target.id === 'option_1') {
      setIsAnswer({
        option_1: !isAnswer.option_1,
        option_2: false,
        option_3: false,
      });
      setQuestionData((prevState) => ({
        ...prevState,
        answer: questionData.option_1,
      }));
    } else if (e.target.id === 'option_2') {
      setIsAnswer({
        option_1: false,
        option_2: !isAnswer.option_2,
        option_3: false,
      });
      setQuestionData((prevState) => ({
        ...prevState,
        answer: questionData.option_2,
      }));
    } else if (e.target.id === 'option_3') {
      setIsAnswer({
        option_1: false,
        option_2: false,
        option_3: !isAnswer.option_3,
      });
      setQuestionData((prevState) => ({
        ...prevState,
        answer: questionData.option_3,
      }));
    }
  }

  function previous() {
    setCount(count - 1);
    if (count === 1) {
      setCount(1);
    }
  }

  function next() {
    setCount(count + 1);
    if (count === 2) {
      setCount(2);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      errors.technology === false &&
      errors.level === false &&
      errors.question === false &&
      errors.option_1 === false &&
      errors.option_2 === false &&
      errors.option_3 === false &&
      errors.title === false &&
      errors.explanation === false &&
      (isAnswer.option_1 || isAnswer.option_2 || isAnswer.option_3)
    ) {
      setErrors((prevState) => ({
        ...prevState,
        submit: false,
      }));
      const data = { ...questionData, user_id };
      try {
        const response = await axios.post('/question', data);
        swalStyled.fire({
          icon: 'success',
          title: `Question ${response.statusText}`,
        });
        setQuestionData({
          technology: false,
          level: false,
          question: '',
          option_1: '',
          option_2: '',
          option_3: '',
          title: '',
          explanation: '',
          answer: '',
        });
        setIsAnswer({
          option_1: false,
          option_2: false,
          option_3: false,
        });
      } catch (error) {
        swalStyled.fire({
          icon: 'error',
          title: 'Oops... Please try again',
          text: error.message,
        });
      }
    } else if (questionData.answer === '') {
      setErrors((prevState) => ({
        ...prevState,
        submit: 'Please fill the form correctly and select an answer',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        technology: 'Please select the technology and level',
        level: 'Please select the technology and level',
        submit: 'Please select the technology and level',
      }));
    }
  }

  function validateInputs(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    if ((name === 'technology' || name === 'level') && value === '') {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Please select the technology and level',
      }));
    } else if (value === '') {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Field is required',
      }));
    } else if (
      (name === 'option_1' || name === 'option_2' || name === 'option_3') &&
      value.length > 100
    ) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Option must me less than 100 characters',
      }));
    } else if (name === 'question' && value.length > 165) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Question must me less than 165 characters',
      }));
    } else if (name === 'explanation' && value.length > 445) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Explanation must me less than 445 characters',
      }));
    } else if (name === 'title' && value.length > 30) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Title must me less than 30 characters',
      }));
    } else {
      setErrors((prevState) => ({
        ...prevState,
        [name]: false,
      }));
    }
  }

  // measure max length of input
  // const text =
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
  // console.log(text.length);

  return (
    <div className="create-card__page-body">
      <form onSubmit={handleSubmit} className="create-card__form">
        <h3>Create new question</h3>
        {count === 1 && (
          <>
            <div className="create-card__select-container">
              <div className="create-card__select-element">
                <label htmlFor="technology" className="input__label">
                  technology
                </label>
                <select
                  name="technology"
                  id="technology_selector"
                  onChange={handleChange}
                  onBlur={validateInputs}
                  value={questionData.technology}
                >
                  <option value="" hidden>
                    Select technology
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="react">React</option>
                </select>
              </div>
              <div className="create-card__select-element">
                <label htmlFor="level" className="input__label">
                  Level
                </label>
                <select
                  name="level"
                  id="level_selector"
                  onChange={handleChange}
                  onBlur={validateInputs}
                  value={questionData.level}
                >
                  <option value="" hidden>
                    Select Level
                  </option>
                  <option value="junior">Junior</option>
                </select>
              </div>
            </div>
            {(errors.technology || errors.level) && <p>{errors.technology || errors.level}</p>}
            <label className="input__label">Question</label>
            <textarea
              className="create-card__question"
              type="text"
              name="question"
              onBlur={validateInputs}
              onChange={handleChange}
              value={questionData.question}
              placeholder="Question"
            ></textarea>
            {errors.question && <p>{errors.question}</p>}

            <div className="create-card__label-container">
              <label className="input__label">option 1</label>
              <button
                onClick={selAnswer}
                id="option_1"
                disabled={!questionData.option_1}
                className={!isAnswer.option_1 && 'unselected'}
              >
                {isAnswer.option_1 ? 'unset as answer' : 'set as answer'}
              </button>
            </div>
            <textarea
              className="create-card__option"
              type="text"
              name="option_1"
              placeholder="Option 1"
              onChange={handleChange}
              onBlur={validateInputs}
              value={questionData.option_1}
            ></textarea>
            {errors.option_1 && <p>{errors.option_1}</p>}

            <div className="create-card__label-container">
              <label className="input__label">option 2</label>
              <button
                onClick={selAnswer}
                id="option_2"
                disabled={!questionData.option_2}
                className={!isAnswer.option_2 && 'unselected'}
              >
                {isAnswer.option_2 ? 'unset as answer' : 'set as answer'}
              </button>
            </div>
            <textarea
              className="create-card__option"
              type="text"
              name="option_2"
              placeholder="Option 2"
              onChange={handleChange}
              onBlur={validateInputs}
              value={questionData.option_2}
            ></textarea>
            {errors.option_2 && <p>{errors.option_2}</p>}

            <div className="create-card__label-container">
              <label className="input__label">option 3</label>
              <button
                onClick={selAnswer}
                id="option_3"
                disabled={!questionData.option_3}
                className={!isAnswer.option_3 && 'unselected'}
              >
                {isAnswer.option_3 ? 'unset as answer' : 'set as answer'}
              </button>
            </div>
            <textarea
              className="create-card__option"
              type="text"
              name="option_3"
              placeholder="Option 3"
              onChange={handleChange}
              onBlur={validateInputs}
              value={questionData.option_3}
            ></textarea>
            {errors.option_3 && <p>{errors.option_3}</p>}
          </>
        )}
        {count === 2 && (
          <>
            <label className="input__label">Title</label>
            <input
              className="create-card__title"
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              onBlur={validateInputs}
              value={questionData.title}
            />
            {errors.title && <p>{errors.title}</p>}
            <label className="input__label">Explanation</label>
            <textarea
              className="create-card__explanation"
              type="text"
              name="explanation"
              placeholder="Explanation"
              onChange={handleChange}
              onBlur={validateInputs}
              value={questionData.explanation}
            ></textarea>
            {errors.explanation && <p>{errors.explanation}</p>}
          </>
        )}
        {errors.submit && <p>{errors.submit}</p>}

        <div className="create-card__button-container">
          <button
            onClick={previous}
            disabled={count === 1}
            className={count === 1 ? 'create-card__button-disabled' : 'create-card__page-button'}
          >
            previous
          </button>
          <button
            onClick={next}
            disabled={count === 2}
            className={
              count === 2 ? 'create-card__next-button-disabled' : 'create-card__page-button'
            }
          >
            next
          </button>
          <input
            type="submit"
            className={
              count === 2 ? 'create-card__page-button' : 'create-card__save-button-disabled'
            }
            value="save"
          />
        </div>
      </form>
      <div className="create-card__preview-container">
        <h3>Preview</h3>
        <CardEdit data={questionData} count={count} />
      </div>
    </div>
  );
}

export default CreateCardPage;
