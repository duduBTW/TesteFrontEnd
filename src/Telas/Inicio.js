import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

import './estilos/Inicio.css'

class Inicio extends Component {
    state = {
        idArtista: null
    }
    componentDidMount() {
        M.Parallax.init(document.querySelectorAll('.parallax'));
    }
    render() {
        const { pesquisar } = this.state
        return (
            <div className="conteinerInicio">
                <div className="section white">
                    <form onSubmit={() => this.props.history.push(`/pesquisar/${pesquisar}`)} >
                        <h2 className="center">Pesquisar por artista</h2>

                        <div className="pesquisa">
                            <div className="input-field">
                                <input
                                    required
                                    className="validate"
                                    onChange={(e) => this.setState({ pesquisar: e.target.value })}
                                    type="text"
                                    name="pesquisar"
                                    id="pesquisar"
                                />
                                <label htmlFor="pesquisar">Nome do artista</label>
                            </div>
                            <button
                                className="btn btn-large btn-floating black white-text pesquisarBtn"
                                type="submit">
                                <i class="material-icons">send</i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src="https://wallpaperaccess.com/full/446984.jpg" /></div>
                </div>
                <div className="section white">
                    <div className="row container center">
                        <h2 className="header">Teste para desenvolvedor front end</h2>
                        <p className="grey-text text-darken-3 lighten-3">
                            Projeto criado utilizando React e Materialize em 3 dias.
                        </p>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src="https://wallpaperaccess.com/full/446984.jpg" /></div>
                </div>

            </div>
        )
    }
}

export default Inicio