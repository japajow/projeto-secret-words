import React from "react";
import "./GameScreen.css";
export const GameScreen = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetter,
  wrongLetters,
  guesses,
  score,
}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessedLetter.includes(letter) ? (
            <span className="letter" key={i}>{guessedLetter}</span>
          ) : (
            <span className="blackSquare" key={i}></span>
          )
        )}
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
       {wrongLetters.map((letter,i) =>(
         <span key={i}>{letter}, </span>
       ))}
      </div>
    </div>
  );
};
