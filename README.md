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
import "./StartScreen.css";

import React from "react";

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
