import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Inicio from './Telas/Inicio';
import Artista from './Telas/Artista';
import Musica from './Telas/Musica';
import Album from './Telas/Album';
import ArtistaInfos from './Telas/ArtistaInfos';
import PagNaoEncontrada from './Telas/PagNaoEncontrada'
import NavBar from './Telas/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) => <Inicio {...props} />} />
          <Route path="/pesquisar/:artista" render={(props) => <Artista {...props} />} />
          <Route path="/artista/:nomePesquisa/:idArtista" render={(props) => <ArtistaInfos {...props} />} />
          <Route path="/musica/:nomePesquisa/:nomeArtista/:idMusica" render={(props) => <Musica {...props} />} />
          <Route path="/album/:nomePesquisa/:nomeArtista/:idAlbum" render={(props) => <Album {...props} />} />
          <Route render={(props) => <PagNaoEncontrada {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App; 
