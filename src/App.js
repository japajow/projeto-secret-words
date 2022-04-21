import "./App.css";
import { StartScreen } from "./components/StartScreen/StartScreen";

import { useState, useEffect, useCallback } from "react";

import { wordsList } from "./data/word";
import { GameScreen } from "./components/GameScreen/GameScreen";
import { EndScreen } from "./components/EndScreen/EndScreen";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [word] = useState(wordsList);

  const startGame = () => {
    setGameStage(stages[1].name);
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  console.log(word);
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      {gameStage === "end" && <EndScreen retry={retry} />}
    </div>
  );
}

export default App;
