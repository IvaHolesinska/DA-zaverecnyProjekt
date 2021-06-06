import React from 'react';
import './style.css';

const drag = (ev) => {
  console.log(ev.target);
};

export const Animal = ({ img, name }) => {
  return (
    <>
      <div className="animal--gallery">
        <img
          className="animal--img"
          src={img}
          draggable={true}
          onDragStart={(event) => drag(event)}
        />
        <p className="animal--name">{name}</p>
      </div>
    </>
  );
};
