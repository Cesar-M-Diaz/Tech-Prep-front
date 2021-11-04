import React, { useState } from 'react';
import CardEdit from '../components/CardEdit';
// import history from '../utils/history';
import '../assets/styles/pages/CardCreatePage.scss';

function CreateCardPage() {
  const [count, setCount] = useState(1);
  const [isAnswer, setIsAnswer] = useState({
    option_1: false,
    option_2: false,
    option_3: false,
  });
  const [inputValue, setInputValue] = useState({
    question: '',
    option_1: '',
    option_2: '',
    option_3: '',
    title: '',
    explanation: '',
  });
  const [errors, setErrors] = useState({
    question: '',
    option_1: '',
    option_2: '',
    option_3: '',
    title: '',
    explanation: '',
  });

  const handleChange = (e) => {
    setInputValue((prevState) => ({
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
    } else if (e.target.id === 'option_2') {
      setIsAnswer({
        option_1: false,
        option_2: !isAnswer.option_2,
        option_3: false,
      });
    } else if (e.target.id === 'option_3') {
      setIsAnswer({
        option_1: false,
        option_2: false,
        option_3: !isAnswer.option_3,
      });
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

  function handleSubmit(e) {
    e.preventDefault();
    if (
      errors.question === '' &&
      errors.option_1 === '' &&
      errors.option_2 === '' &&
      errors.option_3 === '' &&
      errors.title === '' &&
      errors.explanation === ''
    ) {
      console.log(inputValue);
    } else {
      console.log('Please fill the form correctly');
    }
  }

  function validateInputs(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    if (value === '') {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Field is required',
      }));
    } else if ((name === 'option_1' || 'option_2' || 'option_3') && value.length > 65) {
      setErrors((prevState) => ({
        ...prevState,
        [name]: 'Option must me less than 65 characters',
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
        [name]: '',
      }));
    }
  }

  // measure max length of input
  // const text =
  //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
  // console.log(text.length);

  return (
    <div className="create-card__page-body">
      <form onSubmit={handleSubmit}>
        {count === 1 && (
          <>
            <label className="input__label">Question</label>
            <textarea
              className="create-card__question"
              type="text"
              name="question"
              onBlur={validateInputs}
              onChange={handleChange}
              value={inputValue.question}
              placeholder="Question"
            ></textarea>
            {errors.question && <p>{errors.question}</p>}

            <label className="input__label">option 1</label>
            <textarea
              className="create-card__option"
              type="text"
              name="option_1"
              placeholder="Option 1"
              onChange={handleChange}
              onBlur={validateInputs}
              value={inputValue.option_1}
            ></textarea>
            {errors.option_1 && <p>{errors.option_1}</p>}
            <button onClick={selAnswer} id="option_1">
              {isAnswer.option_1 ? 'unset as answer' : 'set as answer'}
            </button>

            <label className="input__label">option 2</label>
            <textarea
              className="create-card__option"
              type="text"
              name="option_2"
              placeholder="Option 2"
              onChange={handleChange}
              onBlur={validateInputs}
              value={inputValue.option_2}
            ></textarea>
            {errors.option_2 && <p>{errors.option_2}</p>}
            <button onClick={selAnswer} id="option_2">
              {isAnswer.option_2 ? 'unset as answer' : 'set as answer'}
            </button>

            <label className="input__label">option 3</label>
            <textarea
              className="create-card__option"
              type="text"
              name="option_3"
              placeholder="Option 3"
              onChange={handleChange}
              onBlur={validateInputs}
              value={inputValue.option_3}
            ></textarea>
            {errors.option_3 && <p>{errors.option_3}</p>}
            <button onClick={selAnswer} id="option_3">
              {isAnswer.option_3 ? 'unset as answer' : 'set as answer'}
            </button>
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
              value={inputValue.title}
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
              value={inputValue.explanation}
            ></textarea>
            {errors.explanation && <p>{errors.explanation}</p>}
          </>
        )}

        <button
          onClick={previous}
          disabled={count === 1}
          className={
            count === 1 ? 'create-card__previous-button-disabled' : 'create-card__page-button'
          }
        >
          previous
        </button>
        <button
          onClick={next}
          disabled={count === 2}
          className={count === 2 ? 'create-card__next-button-disabled' : 'create-card__page-button'}
        >
          next
        </button>
        <input
          type="submit"
          disabled={count !== 2}
          className={count === 2 ? 'create-card__page-button' : 'create-card__save-button-disabled'}
          value="save"
        />
      </form>
      <CardEdit data={inputValue} count={count} />
    </div>
  );
}

export default CreateCardPage;
