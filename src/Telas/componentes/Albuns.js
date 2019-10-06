import React, { Component } from 'react';

import '../estilos/Musicas.css'

import ArtistaInfo from './ArtistaInfo'

class Albuns extends Component {
    state = {
        albuns: null,
        artista: this.props.artista,
        error: null
    }
    componentDidMount() {
        const url = new URL('https://itunes.apple.com/lookup')
        const parametros = { id: this.props.artista, entity: 'album' }
        url.search = new URLSearchParams(parametros)

        fetch(url, { method: 'POST' })
            .then(resultado => resultado.json())
            .then(albuns => {
                if (albuns.results !== undefined && albuns.results.length > 1) {
                    this.setState({ albuns: albuns.results })
                } else {
                    this.setState({ error: "Nenhum album desse artista encontrado" })
                }
            })
    }

    voltar = () => {
        this.props.propiedades.history.push(`/pesquisar/${this.props.artistaNome}`)
    }

    render() {
        const { albuns, artista, error } = this.state
        return (
            <div className="conteiner">
                <div >
                    {albuns !== null ?
                        albuns.map(album => (
                            album.collectionCensoredName !== undefined ?
                                (
                                    <div
                                        key={album.collectionId}
                                        onClick={() => this.props.propiedades.history.push(`/album/${this.props.artistaNome}/${artista}/${album.collectionId}`)}
                                        className="itens"
                                    >
                                        <img style={{ padding: 10 }} src={album.artworkUrl100} alt={album.artworkUrl100} />
                                        <div style={{ padding: 10, display: "flex" }} >{album.collectionCensoredName}</div>
                                    </div>
                                ) :
                                (
                                    <ArtistaInfo item={album} voltar={() => this.voltar()} />
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

export default Albuns
