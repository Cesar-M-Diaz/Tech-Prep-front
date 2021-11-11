import history from '../utils/history';
// import { format } from 'date-fns';
import { formatDistance } from 'date-fns';

function Session({ data }) {
  function redirectPage(e) {
    e.preventDefault();
    history.push(`/session/score/${data._id}`);
  }

  return (
    <div>
      <div>
        <h1>
          <span>{data.technology}</span> <span>{data.level}</span> session{' '}
          {/* <span>{format(new Date(data.createdAt), 'dd/MMMM/yyyy')}</span>{' '} */}
          <span>
            {formatDistance(new Date(data.createdAt), new Date(), { addSuffix: true })}
          </span>{' '}
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
