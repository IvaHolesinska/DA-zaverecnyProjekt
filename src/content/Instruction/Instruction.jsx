import React from 'react';
import './style.css';

export const Instruction = () => {
  return (
    <>
      <div className="instruction--list">
        <ul>
          <h2>Instrukce</h2>
          <li>Podívej se na zvíře</li>
          <li>Prohlédni si mapu a rozmysli si, kde je jeho pravý domov</li>
          <li>Klikni na zvíře a umísti jej na správný kontinent</li>
        </ul>
        <div className="form--input">
          <form className="form">
            <label className="input">
              Zadej své jméno: <input />{' '}
            </label>
            <button>Pokračovat</button>
          </form>
        </div>
      </div>
    </>
  );
};
