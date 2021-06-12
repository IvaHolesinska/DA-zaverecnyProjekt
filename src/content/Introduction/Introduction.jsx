import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Introduction = () => {
  return (
    <>
      <div className="container">
        <div className="intro">
          <p className="intro--text">
            Ahoj cizinče, <br />
            jsme skupina zvířat, která žila po desítky, ba i stovky let na
            stejném území. Doma jsme už znali každý keř a kámen, a tak se nám
            zachtělo okusit trochu toho dobrodružství a vydali jsme se do světa.
            <br />
            <br />
            Pár let jsme strávili na různých kontinentech, prozkoumávali tamní
            terén a poznávali nové přátele. Počasí k nám však nebylo úplně vždy
            přívětivé a občas se stalo, že jsme neměli ani co jíst.
            <br />
            <br />
            Nakonec jsme se tedy rozhodli, že objevování už bylo dost a že se
            vrátíme domů, ke svým rodinám. Stalo se však neštěstí! Zapomněli
            jsme cestu a náš kompas se rozbil. Jediný, kdo nám teď může pomoct,
            jsi ty. Ukážeš nám prosím cestu domů?
          </p>
          <div className="intro--bt">
            <Link to="/instrukce">
              <button className="buttonClass">Pokračovat</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
