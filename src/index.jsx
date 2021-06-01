import React from 'react';
import { render } from 'react-dom';
import { Animals } from './Animals/Animals';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Introduction } from './Introduction/Introduction';
import './style.css';

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Introduction />
        {/* <Animals /> */}
        <Footer />
      </div>
    </>
  );
};
render(<App />, document.querySelector('#app'));
