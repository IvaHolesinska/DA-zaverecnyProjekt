import React, { useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { Introduction } from './content/Introduction/Introduction';
import { Instruction } from './content/Instruction/Instruction';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Game } from './content/Game/Game.jsx';

import './style.css';
import { Results } from './content/Results/Results';

const App = () => {
  const [moveToResult, setMoveToResult] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [counter, setCounter] = useState(0);
  const [numberOfAnimals, setNumberOfAnimals] = useState(null);
  const [moveBackToGame, setMoveBackToGame] = useState(false);

  const handleMoveToResult = (props) => {
    setMoveToResult(props);
  };

  const handleName = (name) => {
    setPlayerName(name);
  };

  const handleCount = (counter) => {
    setCounter(counter);
  };

  const handleNumberOfAnimals = (numberOfAnimals) => {
    setNumberOfAnimals(numberOfAnimals);
  };

  const handleMoveBackToGame = (backToGame) => {
    setMoveBackToGame(backToGame);
  };

  const handleReset = () => {
    setMoveToResult(false);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Introduction />
        </Route>
        <Route path="/instrukce" exact>
          <Instruction onPlayerName={handleName} />
        </Route>
        <Route path="/hra" exact>
          {moveToResult ? (
            <Redirect to="/vysledek" />
          ) : (
            <Game
              onMoveToResult={handleMoveToResult}
              onCounter={handleCount}
              onNumberOfAnimals={handleNumberOfAnimals}
            />
          )}
        </Route>

        <Route path="/vysledek" exact>
          {moveBackToGame ? (
            <Redirect to="/hra" />
          ) : (
            <Results
              name={playerName}
              counter={counter}
              numberOfAnimals={numberOfAnimals}
              onBackToGame={(handleMoveBackToGame, handleReset)}
            />
          )}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
render(<App />, document.querySelector('#app'));
