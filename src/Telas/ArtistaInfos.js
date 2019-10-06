import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

import './estilos/Artista.css'
import Musicas from './componentes/Musicas';
import Albuns from './componentes/Albuns';

class Artista extends Component {
    state = {
        idArtista: "Hifumi",
        artista: this.props.match.params.idArtista,
        artistaNome: this.props.match.params.nomePesquisa

    }
    componentDidMount() {
        M.Tabs.init(document.querySelector(".tabs"));
    }
    render() {
        const { artistaNome, artista } = this.state
        return (
            <div>
                <ul id="tabs-swipe-demo" className="tabs center">
                    <li className="tab col s3"><a className="active" href="#test-swipe-1">Musicas</a></li>
                    <li className="tab col s3"><a href="#test-swipe-2">Albuns</a></li>
                </ul>
                <div id="test-swipe-1">
                    <Musicas artistaNome={artistaNome} artista={artista} propiedades={this.props} />
                </div>

                <div id="test-swipe-2">
                    <Albuns artistaNome={artistaNome} artista={artista} propiedades={this.props} />
                </div>
            </div>
        )
    }
}

export default Artista