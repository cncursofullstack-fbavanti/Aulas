import React from "react";

function Card(props) {
  if(props.foto){
    return (
      <>
        <div className="card">
          <img src={props.foto} alt={props.nome} />
          <h3>{props.nome}</h3>
          <p>{props.detalhe}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="card">
          <h3>{props.nome}</h3>
          <p>{props.detalhe}</p>
        </div>
      </>
    );
  }
}

export default Card;