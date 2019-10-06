import React, { Component } from 'react';

import "./estilos/MusicaTela.css"

class Musica extends Component {
    state = {
        musica: null,
        idMusica: this.props.match.params.idMusica,
        artista: this.props.match.params.nomeArtista,
        error: null
    }
    componentDidMount() {
        const url = new URL('https://itunes.apple.com/lookup')
        const parametros = { id: this.state.idMusica }
        url.search = new URLSearchParams(parametros)

        fetch(url, { method: 'POST' })
            .then(resultado => resultado.json())
            .then(musica => {
                if (musica.results !== undefined && musica.results[0] !== undefined) {
                    this.setState({ musica: musica.results[0] })
                } else { // Se a musica não for encontrada
                    this.setState({ error: `Música não encontrada` })
                }
            })
    }
    render() {
        const { musica, artista, error } = this.state
        return (
            <div>
                <div>
                    {musica !== null ?
                        <div className="conteinerMusica">
                            <div className="musicaInfosConteiner">
                                <img className="img" src={musica.artworkUrl100} alt={musica.artworkUrl100} />
                                <div className="musicaInfos">
                                    <div className="titulo">{musica.trackName}</div>
                                    <div className="preco">R$: {((musica.trackPrice * 4.06).toFixed(2))}</div>
                                </div>
                            </div>
                            <div className="muscaInfos2 center">
                                <div>Álbum: {musica.collectionName}</div>
                                <div>Artista: {musica.artistName}</div>
                            </div>
                            <div className="previw center">
                                <h3>Preview:</h3>
                                <audio controls>
                                    <source src={musica.previewUrl} type="audio/mp3" />
                                </audio> <br />
                            </div>
                            <div className="voltar">
                                <button className="btn white black-text" onClick={() => this.props.history.push(`/artista/${this.props.match.params.nomePesquisa}/${artista}`)}>Voltar</button>
                            </div>
                        </div>
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
                                    onClick={() => this.props.history.push(`/artista/${this.props.match.params.nomePesquisa}/${artista}`)}
                                >
                                    Voltar
                                </button>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

export default Musica
