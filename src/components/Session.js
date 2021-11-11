import history from '../utils/history';
// import { format } from 'date-fns';
import { formatDistance } from 'date-fns';

function Session({ data }) {
  function redirectPage(e) {
    e.preventDefault();
    history.push(`/session/score/${data._id}`);
  }

  return (
    <div className="session__container">
      <div className="session__content">
        <h1>
          <span>{data.level}</span> <span>{data.technology}</span> session{' '}
          {/* <span>{format(new Date(data.createdAt), 'dd/MMMM/yyyy')}</span>{' '} */}
          <span>
            {formatDistance(new Date(data.createdAt), new Date(), { addSuffix: true })}
          </span>{' '}
        </h1>
        <p>
          <span>Score:</span> {data.correct_answers.length}/{data.question_number}
        </p>
      </div>
      <button className="session__button" onClick={redirectPage}>
        view wrong answers
      </button>
    </div>
  );
}

export default Session;
