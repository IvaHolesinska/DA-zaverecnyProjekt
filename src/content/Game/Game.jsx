import React, { useState, useEffect } from 'react';
import { Map } from '../Map/Map.jsx';
import { Animal } from '../Animal/Animal';
import { Modal } from '../Modal/Modal.jsx';
import zebra from '../Animal/Gallery/Africa/zebra.svg';
import panda from '../Animal//Gallery/Asia/panda.svg';
import kangaroo from '../Animal//Gallery/Australia/kangaroo.svg';
import europeanBeaver from '../Animal//Gallery/Europe/europeanBeaver.svg';
import lamaAlpaca from '../Animal//Gallery/SouthAmerica/lamaAlpaca.svg';
import americanBison from '../Animal//Gallery/NorthAmerica/americanBison.svg';

import useSound from 'use-sound';
import success from '../../audio/success.mp3';
import fail from '../../audio/fail.mp3';

export const Game = ({ onMoveToResult, onCounter, onNumberOfAnimals }) => {
  const [move, setMove] = useState(null);
  const [index, setIndex] = useState(null);
  const [result, setResult] = useState(null);
  const [closeModal, setCloseModal] = useState(null);
  const [reloadMap, setReloadMap] = useState(true);
  const [counter, setCounter] = useState(0);
  const [animals, setAnimals] = useState([
    {
      img: zebra,
      name: 'zebra stepní',
      area: 'AF',
      text: 'Jsem známá svým pruhováním, kterým se odlišuji od svých příbuzných.',
      visible: true,
    },
    {
      img: panda,
      name: 'panda velká',
      area: 'AS',
      text: 'Moje zbarvení je nápadně černobílé a živím se převážně bambusovými výhonky',
      visible: true,
    },
    {
      img: kangaroo,
      name: 'klokan velký',
      area: 'OC',
      text: 'Můj ocas je tak silný, že mi slouží jako opora těla.',
      visible: true,
    },
    {
      img: europeanBeaver,
      name: 'bobr evropský',
      area: 'EU',
      text: 'Pomocí svých mohutných zubů buduji na řekách hráze.',
      visible: true,
    },
    {
      img: lamaAlpaca,
      name: 'lama alpaka',
      area: 'SA',
      text: 'Říkají mi horský velbloud a mám velmi jemnou srst',
      visible: true,
    },
    {
      img: americanBison,
      name: 'bizon americký',
      area: 'NA',
      text: 'Možná vypadám těžkopádně, ale dokážu běžet rychlostí až 50 km/h',
      visible: true,
    },
  ]);
  const [availableAnimals, setAvailableAnimals] = useState(animals);
  const [chosenAnimals, setChosenAnimals] = useState([]);
  const [moveToResult, setMoveToResult] = useState(true);

  const handleMove = (item, reload) => {
    setMove(item);
    setReloadMap(reload);
    setCounter(counter + 1);
  };

  const handleClick = () => {
    setCloseModal(true);
    setAnimals(availableAnimals);
    setIndex(round(availableAnimals.length));
    setReloadMap(true);
    setResult(false);

    if (availableAnimals.length === 0) {
      onMoveToResult(moveToResult);
      onCounter(counter);
    }
  };

  const round = (animalsCount) => {
    let randomNumber = Math.floor(Math.random() * animalsCount);

    return randomNumber;
  };

  const shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.ceil(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  useEffect(() => {
    const newArray = shuffle(animals).slice(0, 3);
    setChosenAnimals(newArray);
    setIndex(round(animals.length));
  }, []);

  const [playSuccess] = useSound(success);
  const [playFail] = useSound(fail);

  useEffect(() => {
    if (index !== null) {
      setResult(move === animals[index].area),
        move === animals[index].area ? playSuccess() : playFail();
      setCloseModal(false);
    }
  }, [counter]);

  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    if (result === true) {
      availableAnimals[index].visible = false;
      setAvailableAnimals(
        chosenAnimals.filter((animal) => animal.visible === true),
      );
      setCorrectAnswers(correctAnswers + 1);
    }
  }, [result]);

  useEffect(() => {
    onNumberOfAnimals(correctAnswers);
  });

  return (
    <>
      <Map onMove={handleMove} reloadMap={reloadMap} />
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
        <Modal
          onCloseModal={handleClick}
          text={animals[index].text}
          modal=" modal-container--true"
        />
      ) : (
        <Modal
          onCloseModal={handleClick}
          text="Bohužel. Tady není můj domov."
          modal=" modal-container--false"
        />
      )}
    </>
  );
};
