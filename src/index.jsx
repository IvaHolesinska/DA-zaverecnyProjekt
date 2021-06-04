import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { animals, Animals } from './Animals/Animals';
import { Introduction } from './content/Introduction/Introduction';
import { Instruction } from './content/Instruction/Instruction';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Map } from './content/Map/Map.jsx';

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
          <Map />
          {animals.map((animal) => (
            <Animals key={animal.name} img={animal.img} name={animal.name} />
          ))}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
render(<App />, document.querySelector('#app'));
