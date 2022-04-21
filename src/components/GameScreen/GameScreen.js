import React from "react";
import './GameScreen.css';
export const GameScreen = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blackSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form action="">
          <input type="text" name="letter" id="letter" maxLength={1} required />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLetterContainer">
        <p>Letras já utilizadas:</p>
        <span>a,</span>
        <span>b,</span>
      </div>
    </div>
  );
};
