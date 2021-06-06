import React, { useState, useEffect } from 'react';
import { Map } from '../Map/Map.jsx';
import { Animal } from '../Animal/Animal';
import { Modal } from '../Modal/Modal.jsx';
import africanElephant from '../Animal/Gallery/Africa/africanElephant.svg';
import panda from '../Animal//Gallery/Asia/panda.svg';
import kangaroo from '../Animal//Gallery/Australia/kangaroo.svg';
import europeanBeaver from '../Animal//Gallery/Europe/europeanBeaver.svg';
import lamaAlpaca from '../Animal//Gallery/SouthAmerica/lamaAlpaca.svg';
import americanBison from '../Animal//Gallery/NorthAmerica/americanBison.svg';

export const Game = ({ onMoveToResult }) => {
  const [move, setMove] = useState(null);
  const [index, setIndex] = useState(null);
  const [result, setResult] = useState(null);
  const [closeModal, setCloseModal] = useState(null);
  const [reloadMap, setReloadMap] = useState(true);
  const [counter, setCounter] = useState(0);
  const [animals, setAnimals] = useState([
    {
      img: africanElephant,
      name: 'slon africký',
      area: 'AF',
      text: 'Na rozdíl od svého indického příbuzného mám mnohem větší uši. Žijeme ve skupině, kterou vede nejzkušenejší slonice',
      level: '1',
      visible: true,
    },
    {
      img: panda,
      name: 'panda velká',
      area: 'AS',
      text: 'Moje zbarvení je nápadně černobílé a živím se převážně bambusovými výhonky',
      level: '1',
      visible: true,
    },
    {
      img: kangaroo,
      name: 'klokan velký',
      area: 'OC',
      text: 'Můj ocas je tak silný, že mi slouží jako opora těla.',
      level: '1',
      visible: true,
    },
    {
      img: europeanBeaver,
      name: 'bobr evropský',
      area: 'EU',
      text: 'Pomocí svých mohutných zubů buduji na řekách hráze.',
      level: '1',
      visible: true,
    },
    {
      img: lamaAlpaca,
      name: 'lama',
      area: 'SA',
      text: 'Říkají mi horský velbloud a mám velmi jemnou srst',
      level: '1',
      visible: true,
    },
    {
      img: americanBison,
      name: 'bizon americký',
      area: 'NA',
      text: 'Možná vypadám těžkopádně, ale dokážu běžet až rychlostí 50 km/h',
      level: '1',
      visible: true,
    },
  ]);
  const [availableAnimals, setAvailableAnimals] = useState(animals);

  const handleMove = (item, reload) => {
    setMove(item);
    setReloadMap(reload);
    setCounter(counter + 1);
    // console.log(item);
    // console.log(closeModal);
  };

  const handleClick = (text) => {
    setCloseModal(true);
    setAnimals(availableAnimals);
    setIndex(round(availableAnimals.length));
    setReloadMap(true);
    setResult(false);
  };

  const round = (animalsCount) => {
    let randomNumber = Math.floor(Math.random() * animalsCount);
    return randomNumber;
  };

  useEffect(() => {
    setIndex(round(animals.length));
  }, []);

  useEffect(() => {
    if (index !== null) {
      setResult(move === animals[index].area);
      setCloseModal(false);
    }
  }, [counter]);

  useEffect(() => {
    if (result === true) {
      availableAnimals[index].visible = false;
      setAvailableAnimals(animals.filter((animal) => animal.visible === true));
    }
    console.log(index, animals);
  }, [result]);

  useEffect(() => {
    onMoveToResult(availableAnimals);
    console.log(index);
  });

  console.log('return', index, animals[index], animals);

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
        <Modal onCloseModal={handleClick} text={animals[index].text} />
      ) : (
        <Modal
          onCloseModal={handleClick}
          text="Bohužel. Tady můj domov není."
        />
      )}
    </>
  );
};
