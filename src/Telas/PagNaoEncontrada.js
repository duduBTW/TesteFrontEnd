import React from 'react';

const PagNaoEncontrada = (props) => {
    return (
        <div
            style={{
                width: "100vw",
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
            className="center">
            <h1>404 Página não encontada</h1>
            <button
                onClick={() => props.history.push('/')}
                className="btn-large white black-text">
                Inicio
            </button>
        </div>
    )
}

export default PagNaoEncontrada