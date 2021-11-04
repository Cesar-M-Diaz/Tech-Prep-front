import React from 'react';
import '../assets/styles/components/CardEdit.scss';

function CardEdit({ data }) {
  return (
    <div className="card-edit__page-body">
      <p>{data?.question}</p>
      <p>{data?.option_1}</p>
      <p>{data?.option_2}</p>
      <p>{data?.option_3}</p>
      <h2>{data?.title}</h2>
      <p>{data?.explanation}</p>
    </div>
  );
}

export default CardEdit;
