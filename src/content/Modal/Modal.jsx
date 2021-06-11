import React, { useEffect, useState } from 'react';
import './style.css';

export const Modal = ({ text, onCloseModal, modal }) => {
  return (
    <>
      <div className={`modal--container${modal}`}>
        <div className="modal--text">{text}</div>
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
