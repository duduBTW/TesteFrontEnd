import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import '../estilos/Musicas.css'

import ArtistaInfo from './ArtistaInfo'

// import { Link } from 'react-router-dom'

class Musicas extends Component {
    state = {
        musicas: null,
        artista: this.props.artista,
        error: null
    }
    componentDidMount() {
        const url = new URL('https://itunes.apple.com/lookup')
        const parametros = { id: this.state.artista, entity: 'song' }
        url.search = new URLSearchParams(parametros)

        fetch(url, { method: 'POST' })
            .then(resultado => resultado.json())
            .then(musicas => {
                if (musicas.results !== undefined && musicas.results.length > 1) {
                    this.setState({ musicas: musicas.results })
                } else {
                    this.setState({ error: "Nenhuma música desse artista encontrada" })
                }
            })

    }
    voltar = () => {
        this.props.propiedades.history.push(`/pesquisar/${this.props.artistaNome}`)
    }
    render() {
        const { musicas, artista, error } = this.state
        return (
            <div className="conteiner">
                <div>

                    {musicas !== null ?
                        musicas.map(musica => (
                            musica.trackCensoredName !== undefined ?
                                (
                                    <div
                                        key={musica.trackId}
                                        className="itens"
                                        onClick={() => this.props.propiedades.history.push(`/musica/${this.props.artistaNome}/${artista}/${musica.trackId}`)}
                                    >
                                        <img style={{ padding: 10 }} src={musica.artworkUrl100} alt={musica.artworkUrl100} />
                                        <div style={{ padding: 20 }} >{musica.trackCensoredName}</div>
                                    </div>
                                ) :
                                (
                                    <ArtistaInfo item={musica} voltar={() => this.voltar()} />
                                )
                        ))
                        :
                        error === null ?
                            <div className="progress">
                                <div className="indeterminate"></div>
                            </div>
                            :
                            <div className="error">
                                <h2>{error}</h2>
                                <button
                                    className="btn-large white black-text"
                                    onClick={() => this.voltar()}
                                >Voltar para seleção de artistas</button>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Musicas
