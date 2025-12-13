import React from "react";

const HelloWorld = (props) => {
  const birthYear = new Date().getFullYear() - parseInt(props.age);

  return (
    <>
      <h1 className="text 2xl text-orange-500 a-4">Olá, {props.name}!</h1>
      <p>Essa é a minha primeira Aplicação React</p>
      <p>Nascido em <strong>{birthYear}</strong></p>
    </>
  );
};

export default HelloWorld;