import '../assets/styles/components/CardEdit.scss';

function CardEdit({ data, count }) {
  return (
    <div className="card-edit__base">
      <div className="card-edit__flip-card">
        <div className={`card-edit__flip-card-inner ${count === 2 && 'showBack'}`}>
          <div className="card-edit__flip-card-front">
            <p>{data?.question}</p>
            <div className="card-edit__option-text-container">
              <div className="card-edit-option__container">
                <div></div>
                <p>{data?.option_1}</p>
              </div>
              <div className="card-edit-option__container">
                <div></div>
                <p>{data?.option_2}</p>
              </div>
              <div className="card-edit-option__container">
                <div></div>
                <p>{data?.option_3}</p>
              </div>
            </div>
          </div>
          <div className="card-edit__flip-card-back">
            <h2>{data?.title}</h2>
            <div className="card_edit__explanation-container">
              <p>{data?.explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEdit;
