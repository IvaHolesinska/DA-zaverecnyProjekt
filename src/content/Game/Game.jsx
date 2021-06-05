import React, { useState, useEffect } from 'react';
import { Map } from '../Map/Map.jsx';
import { Animal, animals } from '../Animal/Animal';

export const Game = () => {
  const [move, setMove] = useState(null);
  const [index, setIndex] = useState(null);

  const handleMove = (item) => {
    setMove(item);
  };

  const round = () => {
    let randomNumber = Math.floor(Math.random() * animals.length);
    return randomNumber;
  };

  useEffect(() => {
    setIndex(round());
  }, []);

  useEffect(() => {
    if (index !== null) {
      move === animals[index].area
        ? alert(animals[index].text)
        : console.log('zkus to znovu');
    }
  }, [move]);

  return (
    <>
      <Map onMove={handleMove} />
      {index === null ? (
        'načítám'
      ) : (
        <Animal
          key={animals[index].name}
          img={animals[index].img}
          name={animals[index].name}
        />
      )}
    </>
  );
};
