import React from "react";

export const EndScreen = ({ retry }) => {
  return (
    <>
      <h1>EndScreen</h1>
      <button onClick={retry}>Reiniciar o jogo</button>
    </>
  );
};
