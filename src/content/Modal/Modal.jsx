import React, { useEffect, useState } from 'react';
import './style.css';

// import useSound from 'use-sound';
// import success from '../../audio/success.mp3';

export const Modal = ({ text, onCloseModal }) => {
  // const [play] = useSound(success);

  // useEffect(() => {});

  return (
    <>
      {/* <button onMouseEnter={play}> */}
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
          <source src={play}></source>
        </audio> */}
      </div>
      {/* </button> */}
    </>
  );
};
