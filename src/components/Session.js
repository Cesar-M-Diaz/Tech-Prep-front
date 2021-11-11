import history from '../utils/history';

function Session({ data }) {
  function redirectPage(e) {
    e.preventDefault();
    history.push(`/session/score/${data._id}`);
  }

  return (
    <div>
      <div>
        <h1>
          <span>{data.technology}</span> <span>{data.level}</span> session at{' '}
          <span>{Date(data.createdAt)}</span>{' '}
        </h1>
        <p>
          Score: <span>{data.correct_answers.length}</span>/{data.question_number}
        </p>
      </div>
      <button onClick={redirectPage}>view answers</button>
    </div>
  );
}

export default Session;
