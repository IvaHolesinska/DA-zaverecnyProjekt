import React, { useEffect, useState } from 'react';
import './style.css';

export const Modal = ({ text, onCloseModal }) => {
  return (
    <>
      <div className="modal--container">
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
