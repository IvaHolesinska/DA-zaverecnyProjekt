import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Introduction } from './content/Introduction/Introduction';
import { Instruction } from './content/Instruction/Instruction';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Game } from './content/Game/Game.jsx';

import './style.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Introduction />
        </Route>
        <Route path="/instrukce" exact>
          <Instruction />
        </Route>
        <Route path="/hra" exact>
          <Game />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
render(<App />, document.querySelector('#app'));
