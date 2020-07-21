import React from 'react';
import Game from '../game';
import './app.css';
import tfLogo from '../../images/tflogo.png';

function App() {
  return (
    <div className="App">
      <header id="main-header"><img src={tfLogo} alt="Logo"/><h1>MateriaQuiz</h1></header>
      {/*<NavBar />*/}
      <Game />
    </div>
  );
}

export default App;
