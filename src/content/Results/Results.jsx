import React, { useState } from 'react';

export const Results = ({ name, counter, numberOfAnimals, onBackToGame }) => {
  const [backToGame, setBackToGame] = useState(false);

  return (
    <>
      <div>
        <h1>Děkujeme!</h1>
        <p> Zachránce:{name}</p>
        <p>
          {' '}
          {numberOfAnimals} zvířátka jsou doma na {counter} pokusů
        </p>

        <button
          onClick={() => {
            setBackToGame(true);
            onBackToGame(backToGame);
          }}
        >
          Hrát znovu
        </button>
      </div>
    </>
  );
};
