import React from 'react';
import './style.css';

export const Modal = ({ text, onCloseModal }) => {
  return (
    <>
      <div className="modal--container">
        {text}
        <button
          className="modal--btn"
          onClick={() => {
            onCloseModal();
          }}
        >
          {' '}
          X{' '}
        </button>
      </div>
    </>
  );
};
