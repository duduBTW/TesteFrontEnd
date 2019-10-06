import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
// import M from "materialize-css";

import './estilos/ArtistaSelect.css'

class Artista extends Component {
    state = {
        artista: this.props.match.params.artista,
        artistas: null,
        error: null
    }
    componentDidMount() {

        const url = new URL('https://itunes.apple.com/search')
        const parametros = { term: this.state.artista, entity: 'musicArtist' }
        url.search = new URLSearchParams(parametros)

        fetch(url, { method: 'POST' })
            .then(resultado => resultado.json())
            .then(artistas => {
                if (artistas.results[0] !== undefined) {
                    this.setState({ artistas })
                } else { // Se o artista não for encontrado
                    this.setState({ error: `Artista ${this.state.artista} não encontrado` })
                }
            })
    }
    render() {
        const { artistas, error } = this.state
        return (
            <div className="conteinerArtistas">
                {artistas !== null ? <h3 className="center">Artistas encontrados</h3> : null}
                <div className="conteinerItens">
                    {artistas !== null ?
                        artistas.results.map(artista => (
                            <div
                                onClick={() => this.props.history.push(`/artista/${this.state.artista}/${artista.artistId}`)}
                                className="card"
                            >
                                <div className="card-content">
                                    <h3 className="center">{artista.artistName}</h3>
                                    {artista.primaryGenreName === undefined ?
                                        <div className="center grey-text">Gênero não encontrado</div>
                                        :
                                        <div className="center">Gênero: {artista.primaryGenreName}</div>
                                    }
                                </div>
                            </div>
                        ))
                        :
                        error === null ?
                            <div class="progress">
                                <div class="indeterminate"></div>
                            </div>
                            :
                            <div className="error">
                                <h2>{error}</h2>
                                <button
                                    className="btn-large white black-text"
                                    onClick={() => this.props.history.push('/')}
                                >
                                    Inicio
                                </button>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Artista