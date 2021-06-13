import React from 'react';
import './style.css';

const drag = (ev) => {
  return ev.target;
};

export const Animal = ({ img, name }) => {
  return (
    <>
      <div className="animal__gallery">
        <img
          className="animal__img"
          src={img}
          draggable={true}
          onDragStart={(event) => drag(event)}
        />
        <p className="animal__name">{name}</p>
      </div>
    </>
  );
};
