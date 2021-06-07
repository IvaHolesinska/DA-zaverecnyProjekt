import React, { useState } from 'react';
import './style.css';

export const Instruction = ({ onPlayerName }) => {
  const [name, setName] = useState('');

  return (
    <>
      <div className="instruction--list">
        <h2>Instrukce</h2>
        <ul>
          <li>Podívej se na zvíře</li>
          <li>Prohlédni si mapu a rozmysli si, kde je jeho pravý domov</li>
          <li>Klikni na zvíře a umísti jej na správný kontinent</li>
        </ul>
        <div className="form--input">
          <form
            className="form"
            onSubmit={(event) => {
              event.preventDefault();
              onPlayerName(name);
              console.log(name);
            }}
          >
            <label className="input">
              Zadej své jméno:{' '}
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
              />{' '}
            </label>
            <button type="submit">Pokračovat</button>
          </form>
        </div>
      </div>
    </>
  );
};
