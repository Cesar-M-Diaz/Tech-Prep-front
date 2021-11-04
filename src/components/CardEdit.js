import '../assets/styles/components/CardEdit.scss';

function CardEdit({ data, count }) {
  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${count === 2 && 'showBack'}`}>
        <div className="flip-card-front">
          <h3>{data?.question}</h3>
          <div className="card-edit-option__container ">
            <div></div>
            <p>{data?.option_1}</p>
          </div>
          <div className="card-edit-option__container ">
            <div></div>
            <p>{data?.option_2}</p>
          </div>
          <div className="card-edit-option__container ">
            <div></div>
            <p>{data?.option_3}</p>
          </div>
        </div>
        <div className="flip-card-back">
          <h2>{data?.title}</h2>
          <p>{data?.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default CardEdit;
