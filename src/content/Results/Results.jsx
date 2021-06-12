import React, { useState } from 'react';
import './style.css';
import img from './img/resultsBg.svg';
import { Link } from 'react-router-dom';

export const Results = ({ name, counter, numberOfAnimals, onBackToGame }) => {
  const [backToGame, setBackToGame] = useState(false);

  return (
    <>
      <div className="signboard">
        <div className="signboard--bg">
          <img className="signboard--img" src={img}></img>
          <div className="signboard--content">
            <h1 className="signboard--title">Děkujeme!</h1>
            <p> Zachránce: {name}</p>
            <p>
              {' '}
              {numberOfAnimals} zvířátka jsou doma na {counter} pokusů
            </p>
            <Link to="/hra">
              <button
                className="buttonClass"
                onClick={() => {
                  setBackToGame(true);
                  onBackToGame(backToGame);
                }}
              >
                Hrát znovu
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
