import React, { Component } from 'react';

import "./estilos/AlbumSelect.css"

class Musica extends Component {
    state = {
        album: null,
        idAlbum: this.props.match.params.idAlbum,
        artista: this.props.match.params.nomeArtista,
        error: null
    }
    componentDidMount() {
        const url = new URL('https://itunes.apple.com/lookup')
        const parametros = { id: this.state.idAlbum, entity: 'song' }
        url.search = new URLSearchParams(parametros)

        fetch(url, { method: 'POST' })
            .then(resultado => resultado.json())
            .then(album => {
                if (album.results !== undefined && album.results[0] !== undefined) {
                    this.setState({ album: album.results })
                } else { // Se a musica não for encontrada
                    this.setState({ error: `Album não encontrada` })
                }
            })
    }
    render() {
        const { album, artista, error } = this.state
        return (
            <div>
                <div className="albumMusica">
                    {album !== null ?
                        album.map(musica => (
                            musica.trackCensoredName !== undefined ? (
                                <div
                                    key={musica.trackId}
                                    className="itens"
                                    onClick={() => this.props.history.push(`/musica/${this.props.match.params.nomePesquisa}/${artista}/${musica.trackId}`)}
                                >
                                    <img style={{ padding: 10 }} src={musica.artworkUrl100} alt={musica.artworkUrl100} />
                                    <div style={{ padding: 20 }} >{musica.trackCensoredName}</div>
                                </div>
                            ) : (
                                    <div className="center">
                                        <div className="albumInfosConteiner">
                                            <img className="img" src={musica.artworkUrl100} alt={musica.artworkUrl100} />
                                            <div className="musicaInfos">
                                                <h3 className="titulo">{musica.collectionCensoredName}</h3>
                                                <h4 className="preco">R$: {((musica.collectionPrice * 4.06).toFixed(2))}</h4>
                                            </div>
                                        </div>

                                        <button className="voltar button btn white black-text" onClick={() => this.props.history.push(`/artista/${this.props.match.params.nomePesquisa}/${artista}`)}>Voltar</button>

                                        <h3>Musicas: </h3>
                                    </div>
                                )
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
