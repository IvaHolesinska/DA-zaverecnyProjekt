import React from 'react';
import { render } from 'react-dom';
import { animals, Animals } from './Animals/Animals';
import { Introduction } from './content/Introduction/Introduction';
import { Instruction } from './content/Instruction/Instruction';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Map } from './content/Map/Map.jsx';

import './style.css';

const App = () => {
  return (
    <>
      <Header />
      {/* <Introduction /> */}
      {/* <Instruction /> */}
      <Map />
      {animals.map((animal) => (
        <Animals key={animal.name} img={animal.img} name={animal.name} />
      ))}
      <Footer />
    </>
  );
};
render(<App />, document.querySelector('#app'));
