import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Endemit</h1>
    </header>
    <main></main>
    <footer></footer>
  </div>
);

render(<App />, document.querySelector('#app'));
