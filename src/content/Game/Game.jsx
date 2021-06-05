import React, { useState } from 'react';
import { Map } from '../Map/Map.jsx';
import { Animal, animals } from '../Animal/Animal';

export const Game = () => {
  const [player, setPlayer] = useState(null);

  const handleClick = () => {};

  return (
    <>
      <Map />
      {animals.map((animal) => (
        <Animal key={animal.name} img={animal.img} name={animal.name} />
      ))}
    </>
  );
};
