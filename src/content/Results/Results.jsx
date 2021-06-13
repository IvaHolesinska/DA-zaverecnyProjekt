import React, { useState } from 'react';
import './style.css';
import img from './img/resultsBg.svg';
import { Link } from 'react-router-dom';

export const Results = ({ name, counter, numberOfAnimals, onBackToGame }) => {
  const [backToGame, setBackToGame] = useState(false);

  return (
    <>
      <div className="signboard">
        <div className="signboard__bg">
          <img className="signboard__img" src={img}></img>
          <div className="signboard__content">
            <h1 className="signboard__title">Děkujeme!</h1>
            <p>
              {' '}
              Zachránce: <span style={{ fontWeight: 'bold' }}> {name}</span>
            </p>
            <p>
              {' '}
              {numberOfAnimals} zvířátka jsou doma na{' '}
              <span style={{ fontWeight: 'bold' }}> {counter} </span> pokusů
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
