import React, { useEffect } from 'react';
import './style.css';
import success from '../../audio/success.mp3';

export const Modal = ({ text, onCloseModal }) => {
  useEffect(() => {
    const success = document.getElementById('success')[0];
    success.play();
  });

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
        {/* <audio id="success">
          <source src={success}></source>
        </audio> */}
      </div>
    </>
  );
};
