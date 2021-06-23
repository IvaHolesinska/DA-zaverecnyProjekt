import React from 'react';
import './style.css';

export const Modal = ({ text, onCloseModal, modal }) => {
  return (
    <>
      <div className={`modal-container${modal}`}>
        <div className="modal-container__text">{text}</div>
        <button
          className="modal-container__btn"
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
