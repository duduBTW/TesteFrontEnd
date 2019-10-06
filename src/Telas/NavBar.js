import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class NavBar extends Component {
    componentDidMount() {
        const elems = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elems);
    }
    sidenavClose = () => {
        const elems = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elems);
    }
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper black darken-3" style={{ padding: '0px 4% 0px 4%' }}>
                        <div className="conteiner">
                            <div className="brand-logo">iTunes API</div>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <div>
                                <ul className="right hide-on-med-and-down">
                                    <Link to="/">
                                        Inicio
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

                <ul onClick={this.sidenavClose} className="sidenav" id="mobile-demo">
                    <li style={{ marginTop: 10 }}>
                        <Link to="/" className="brand-logo">
                            <i className="material-icons">home</i>
                            Inicio
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavBar