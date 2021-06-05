import React from 'react';
import './style.css';

export const Modal = ({ text }) => {
  return (
    <>
      <div className="modal--container">
        <div> {text}</div>
      </div>
    </>
  );
};
