import React from "react";

export const GameScreen = ({ verifyLetter }) => {
  return (
    <>
      <h1>GameScreen</h1>
      <button onClick={verifyLetter}>Finalizar o jogo</button>
    </>
  );
};
