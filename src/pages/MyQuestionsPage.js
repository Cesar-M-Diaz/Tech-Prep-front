import React from 'react';
import { useState, useEffect } from 'react';
import Questions from '../components/Questions';
import axios from '../utils/axios';
import Loader2 from '../components/Loader2';
import { swalStyled, swalStyledDelete } from '../components/SwalCongfig';
import history from '../utils/history';
import '../assets/styles/pages/MyQuestions.scss';

function MyQuestionsPage() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getQuestions() {
      try {
        const { data } = await axios.get('/question');
        setQuestions(data);
        setIsLoading(false);
      } catch (e) {
        swalStyled.fire({
          icon: 'error',
          title: 'Oops... Please try again',
          text: e.message,
        });
      }
    }
    getQuestions();
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    const id = e.nativeEvent.path[2].id;
    if (e.target.name === 'delete') {
      swalStyledDelete
        .fire({
          title: `Are you sure?`,
          text: `this action can't be undone`,
          showCancelButton: true,
          confirmButtonText: 'delete',
        })
        .then((result) => {
          if (result.isConfirmed) {
            deleteQuestion(id);
          }
        });
    } else {
      history.push(`/question/edit/${id}`);
    }
  }

  async function deleteQuestion(id) {
    try {
      const response = await axios.delete(`/question/${id}`);
      console.log(response.data);
      setQuestions((prevState) => prevState.filter((question) => question._id !== id));
      swalStyled.fire({
        icon: 'success',
        title: 'Question deleted',
      });
    } catch (e) {
      swalStyled.fire({
        icon: 'error',
        title: 'Oops... Please try again',
        text: e.message,
      });
    }
  }

  return (
    <div className="my-questions__container">
      {isLoading ? (
        <Loader2 />
      ) : (
        questions?.map((question) => (
          <div id={question._id} key={question._id} className="my-question__question">
            <Questions data={question} />
            <div className="my-question__container-buttons">
              <button name="edit" onClick={handleClick}>
                edit
              </button>
              <button name="delete" onClick={handleClick}>
                delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyQuestionsPage;
