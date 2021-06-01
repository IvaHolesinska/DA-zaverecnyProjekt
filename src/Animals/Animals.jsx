import React from 'react';
import './style.css';
import { animals } from './index';

export const Animals = () => {
  return (
    <>
      <div className="container--gallery">
        {animals.map((animal) => (
          <img src={animal.img} alt={animal.name} key={animal.name} />
        ))}
      </div>
    </>
  );
};
