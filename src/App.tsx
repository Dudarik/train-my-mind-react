import "./App.css";

import Footer from "./components/Footer/Footer";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";
import { ARRAY_OF_CARD_COLORS, ARRAY_OF_CARD_TYPES } from "./const";

import { GameContext } from "./context";

import { generateNewField } from "./helpers/generateNewField";
import { getRandomCardType, getRandomColor } from "./helpers/randomGenerator";

import { ICard } from "./interfaces/ICard";
import { IGameContext } from "./interfaces/IGameContext";

const defaultTargetCardValue: ICard = {
  countItem: 1,
  cardOpen: true,
  id: 1000,
  cardType: ARRAY_OF_CARD_TYPES[getRandomCardType()],
  cardColor: ARRAY_OF_CARD_COLORS[getRandomColor()],
};

const contextValue: IGameContext = {
  cards: generateNewField(),
  userChooseCard: defaultTargetCardValue,
  targetCardID: 0,
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
