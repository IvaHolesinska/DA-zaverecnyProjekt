import React, { useState } from 'react';
import './style.css';
import img from './img/tabule.svg';

export const Results = ({ name, counter, numberOfAnimals, onBackToGame }) => {
  const [backToGame, setBackToGame] = useState(false);

  const handle = () => {
    setBackToGame(true);
    onBackToGame(backToGame);
    if (setBackToGame === true) {
      setBackToGame(false);
    }
  };

  return (
    <>
      <div className="signboard">
        <h1>Děkujeme!</h1>
        {/* <img className="signboard--img" src={img}></img> */}
        <p> Zachránce:{name}</p>
        <p>
          {' '}
          {numberOfAnimals} zvířátka jsou doma na {counter} pokusů
        </p>

        <button
          onClick={() => {
            // setBackToGame(true);
            // onBackToGame(backToGame);
            handle();
          }}
        >
          Hrát znovu
        </button>
      </div>
    </>
  );
};
