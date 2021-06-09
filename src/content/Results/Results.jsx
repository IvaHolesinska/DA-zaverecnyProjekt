import React from 'react';

export const Results = ({ name, counter }) => {
  return (
    <>
      <div>
        <h1>Děkujeme!</h1>
        <p> Zachránce:{name}</p>
        <p>3 zvířátka jsou doma na {counter} pokusů</p>
        <button type="submit">Hrát znovu</button>
      </div>
    </>
  );
};
