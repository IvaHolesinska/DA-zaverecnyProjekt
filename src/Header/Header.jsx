import React from 'react';
import './style.css';
import img from './img/logo.svg';

export const Header = () => {
  return (
    <>
      <header className="header">
        <img className="logo" src={img} />
        <h1 className="title">Cesta domů</h1>
      </header>
    </>
  );
};
