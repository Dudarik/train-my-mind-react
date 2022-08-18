import "./App.css";

import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";

import { GameContext } from "./context";

import { generateNewField } from "./helpers/generateNewField";

import { IGameContext } from "./interfaces/IGameContext";

const contextValue: IGameContext = {
  cards: generateNewField(),
  score: 0,
  tryCount: 0,
  round: 1,
  bestScore: 0,
};

function App() {
  return (
    <GameContext.Provider value={contextValue}>
      <div className='App'>
        <Header />
        <main>
          <Game />
        </main>
        <Footer />
      </div>
    </GameContext.Provider>
  );
}

export default App;
