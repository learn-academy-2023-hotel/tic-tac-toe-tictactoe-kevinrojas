import React from 'react';

const Modal = ({ winner, onNewGame }) => {
  let content = null;

  if (winner) {
    content = (
      <>
        <p>Winner: {winner}</p>
        <button className="reset-button" onClick={onNewGame}>New Game</button>
      </>
    );

  } else {
    content = (
      <>
        <p>It's a draw!</p>
        <button className="reset-button" onClick={onNewGame}>New Game</button>
      </>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {content}
      </div>
    </div>
  );
};

export default Modal;



