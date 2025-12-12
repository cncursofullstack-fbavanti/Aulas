import React from "react";

function HelloWorld(props) {
    return (
        <>
            <h1>Olá, {props.nome}!</h1>
            <p>Essa é a minha primeira Aplicação React</p>
        </>
    )
}

export default HelloWorld;