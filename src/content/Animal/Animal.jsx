import React from 'react';
import './style.css';

const drag = (ev) => {
  return ev.target;
};

export const Animal = ({ img, name }) => {
  return (
    <>
      <div className="animal-gallery">
        <img
          className="animal-gallery__img"
          src={img}
          draggable={true}
          onDragStart={(event) => drag(event)}
        />
        <p className="animal-gallery__name">{name}</p>
      </div>
    </>
  );
};
