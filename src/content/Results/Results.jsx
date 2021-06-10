import React, { useState } from 'react';
import './style.css';
import img from './img/resultsBg.svg';

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
        <div className="signboard--bg">
          <img className="signboard--img" src={img}></img>
          <div className="signboard--content">
            <h1 className="signboard--title">Děkujeme!</h1>
            <p> Zachránce:{name}</p>
            <p>
              {' '}
              {numberOfAnimals} zvířátka jsou doma na {counter} pokusů
            </p>

            <button
              className="signboard--btn"
              onClick={() => {
                // setBackToGame(true);
                // onBackToGame(backToGame);
                handle();
              }}
            >
              Hrát znovu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
