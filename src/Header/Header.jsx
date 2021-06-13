import React from 'react';
import './style.css';
import img from './img/logo.svg';

export const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={img} />
        <h1 className="header__title">Cesta domů</h1>
      </header>
    </>
  );
};
