## Projeto secret words udemy com matheus

> Estilizando e formatando o css defaults

App.css

```css
.App {
  /* Centralicando todo conteudo */
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
```

index.css

```css
html,
body {
  height: 100%;
}

body {
  font-family: Helvetica;
  margin: 0;
  padding: 0;
  /* Colocando degrade no back ground  */
  background: linear-gradient(
    180deg,
    rgba(9, 35, 175, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  color: #fff;
}
```

> Finalizando a tela inicial

Criando o component
src/components/StartScreen.js

```tsx
export const StartScreen = () => {
  return (
    <div>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button>Começar o jogo</button>
    </div>
  );
};
```

Chamando o component no App.js

```tsx
import "./App.css";
import { StartScreen } from "./components/StartScreen";

function App() {
  return (
    <div className="App">
      <StartScreen />
    </div>
  );
}

export default App;
```

src/components/StartScreen.css

```css
.start h1 {
  font-size: 3.5em;
}

.start p {
  margin-bottom: 2em;
  color: #ecfa00;
}
```

Estilizando o botao globamnete nboi index.css

```css
button {
  background: #1646a0;
  color: #fff;
  padding: 0 45px;
  border: 2px solid #fff;
  border-radius: 25px;
  height: 50px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.4s;
}

button:hover {
  background-color: #0923af;
}
```

## Criando a pagina do jogo

importando os hooks que vamos utilizar

App.js

```tsx
import { useEffect, useCallback, useState } from "react";
```

Importando as palavras data/word.js

```tsx
import { wordList } from "./data/word";
```

Temos 3 estagios no nosso jogo , start, game, end

```tsx
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];
```

Criando o estado do jogo

```tsx
// setando o start do jogo
const [gameStage, setGameStage] = useState(stage[0].name);
```

Vamos mostrar a pagina start quando o estado for start

```tsx
// function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
//   return <div className="App">
  // quando for igual a start
  {gameStage === "start" && <StartScreen />}</div>;
  // quando for igual a game
  {gameStage === "start" && <GameScreen />}</div>;
  // quando for igual a end
  {gameStage === "start" && <EndScreen />}</div>;
// }
```

Criando as paginas no componend EndScreen e GameScreen

src/components/GameScreen/GameSreen.js
src/components/GameScreen/GameSreen.css

src/components/EndScreen/EndSreen.js
src/components/EndScreen/EndSreen.css

criando o estado das palavras

```tsx
// function App() {
//   const [gameStage,setGameStage] = useState(stages[0].name)
const [word] = useState(wordsList);
//   return (
//     <div className="App">
//       {gameStage === 'start' && <StartScreen />}
//       {gameStage === 'game' && <GameScreen />}
//       {gameStage === 'end' && <EndScreen/>}
//     </div>
//   );
// }
```

## Exibindo todos components do game

No component startscreen
criamos uma funcao que comeca o jogo

```tsx
// pegando o proximo estado game
const startGame = () => {
  setGameStage(stages[1].name);
};

//passando a funcao startGame para o component StartScreen

//  return (
//     <div className="App">
{
  gameStage === "start" && <StartScreen startGame={startGame} />;
}
//       {gameStage === "game" && <GameScreen />}
//       {gameStage === "end" && <EndScreen />}
//     </div>
//   );
// }
```

no StartScreen.js

```tsx

    passamos a propiedade startGame e no button colocamos onClick


export const StartScreen = ({startGame}) => {
//   return (
//     <div className="start">
//       <h1>Secret Word</h1>
//       <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame}>Começar o jogo</button>
//     </div>
//   );
// };

```

Criando uma funcao que vai processar o que for digitado no input

App.js

```tsx
const verifyLetter = () => {
  // passando o end para o estagio
  setGameStage(stages[2].name);
};

// passando a funcao para o component GameScreen
{
  gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />;
}

// colocando a propiedade verifyLetter no GameScreen

export const GameScreen = ({ verifyLetter }) => {
  return (
    <>
      <h1>GameScreen</h1>
      <button onClick={verifyLetter}>Verify</button>
    </>
  );
};

// Criando mais uma funcao para iniciar o jogo

const retry = () => {
  setGameStage(stages[0].name);
};
```

# Iniciando a funcionalidade do Jogo

seleciona a categoria
selecionar a palavra
explode as palavras

Criando 3 estados palavra , categoria , letras

App.js

```tsx
const [pickedWord, setPickedWord] = useState("");
const [pickedCategory, setPickedCategory] = useState("");
const [letters, setLetters] = useState([]);

// a funcao startGame primeiro montamos tudo o que e necessario e por ultimo chamamos o estado

const pickWordAndCategory = () => {
  //pegando a categoria pela chave do words

  const [words] = useState(wordsList);

  const pickWordAnCategory = () => {
    /////// selecionando a categoria //////////////
    const categories = Object.keys(words);
    //pegando uma categoria pelo Math.random e o tamanho do Object.keys(categories).length
    const category = categories[Math.random() * Object.keys(categories).length];

    // para nao retornar um numero grande usamos o Math.floor para aredondar para baixo
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    /////// selecionando a palavra//////////////

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
  };

  //retornamos word e category
  return { word, category };
};
```

Com isso conseguimos destruturar a palavra e a categoria

```tsx
const { word, category } = pickWordAndCategory();
```

Agora precisamo pegar a palavra e transformar ela em um array cada letra

```tsx
let wordLetters = word.split("");
```

Agora precisamos pegar cada letra do array e colocar todas em minusculo

```tsx
wordLetters = wordLetters.map((l) => l.lowerCase());
```

Agora setamos os estados fill states

```tsx
setPickedWord(word);
setPickedCategory(category);
setLetters(wordLetters);
```

## Estruturando o componente GameScreen

```tsx
import React from "react";

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
      <div className="wordConteiner">
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
```

## Estilizando o component GameScreen

```css
.game h1 {
  font-size: 2.5em;
}

.points span {
  font-weight: bold;
}

.tip span {
  color: #ecfa00;
}

.wordContainer {
  margin: 1.5em;
  padding: 1.5em;
  border: 20px solid #ecfa00;
  display: flex;
}

.letter,
.blackSquare {
  font-size: 70px;
  line-height: 1.5;
  border: 3px solid #000;
  height: 100px;
  width: 100px;
  text-transform: uppercase;
  background-color: #fff;
  color: #000;
  font-weight: bold;
}

.letterContainer p {
  margin-bottom: 1.2em;
}

.letterContainer form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.letterContainer input {
  height: 50px;
  width: 50px;
  font-size: 2em;
  text-align: center;
  margin-right: 1em;
}
```

## Consumindo estados do jogo

Criando os estados que faltou

App.js

```tsx
const [guessedLetter, setGuessedLetter] = useState([]);
const [wrondLetters, setWrongLetters] = useState([]);
const [guesses, setGuesses] = useState(3);
const [score, setScore] = useState(0);
```

> Passando os estados no component GameScreen

```tsx
{
  gameStage === "game" && (
    <GameScreen
      verifyLetter={verifyLetter}
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetter={guessedLetter}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
    />
  );
}
```

> Vamos no GameScreen e receber o props do estados passados acima e consumindo o html em seu determinado local

```tsx
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
            <span className="letter" key={i}>
              {guessedLetter}
            </span>
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
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};
```
