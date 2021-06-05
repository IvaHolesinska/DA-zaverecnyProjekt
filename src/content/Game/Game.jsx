import React, { useState, useEffect } from 'react';
import { Map } from '../Map/Map.jsx';
import { Animal, animals } from '../Animal/Animal';
import { Modal } from '../Modal/Modal.jsx';

export const Game = () => {
  const [move, setMove] = useState(null);
  const [index, setIndex] = useState(null);
  const [result, setResult] = useState(null);
  const [closeModal, setCloseModal] = useState(null);

  const handleMove = (item) => {
    setMove(item);
    console.log(item);
    console.log(closeModal);
  };

  const handleClick = (text) => {
    setCloseModal(true);
    setIndex(round());
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
      setResult(move === animals[index].area);
      setCloseModal(false);
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
      )}{' '}
      {result === null || closeModal ? undefined : result ? (
        <Modal onCloseModal={handleClick} text={animals[index].text} />
      ) : (
        <Modal onCloseModal={handleClick} text="Chybně" />
      )}
    </>
  );
};
