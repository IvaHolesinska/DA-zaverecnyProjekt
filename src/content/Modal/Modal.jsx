import React from 'react';
import './style.css';

export const Modal = ({ text, onCloseModal, modal }) => {
  return (
    <>
      <div className={`modal__container${modal}`}>
        <div className="modal__text">{text}</div>
        <button
          className="modal__btn"
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
