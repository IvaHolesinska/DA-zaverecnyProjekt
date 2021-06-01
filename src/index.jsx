import React from 'react';
import { render } from 'react-dom';
import { animals, Animals } from './Animals/Animals';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Instruction } from './Instruction/Instruction';
import { Introduction } from './Introduction/Introduction';

import './style.css';

const App = () => {
  return (
    <>
      <Header />
      {/* <Introduction /> */}
      <Instruction />
      {/* {animals.map((animal) => (
        <Animals key={animal.name} img={animal.img} name={animal.name} />
      ))} */}
      <Footer />
    </>
  );
};
render(<App />, document.querySelector('#app'));
