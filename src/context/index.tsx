import { createContext, Dispatch, useReducer } from "react";
import { CARD_ITEMS_COLOR_GREEN, LAMP } from "../const";
import { IGameContext } from "../interfaces/IGameContext";
import {
  gameReducer,
  chooseCardReducer,
  TGameActions,
  cardsReducer,
} from "./gameReducer";

const initialGameCTX: IGameContext = {
  cards: [],
  userChooseCard: {
    id: 0,
    countItem: 1,
    cardType: LAMP,
    cardColor: CARD_ITEMS_COLOR_GREEN,
    cardOpen: true,
  },
  targetCardID: 0,
  round: 1,
  score: 0,
  tryCount: 0,
  bestScore: 0,
};

export const GameContext = createContext<{
  gameCTX: IGameContext;
  dispatch: Dispatch<TGameActions>;
}>({
  gameCTX: initialGameCTX,
  dispatch: () => null,
});

const mainReducer = (
  {
    cards,
    userChooseCard,
    targetCardID,
    score,
    tryCount,
    round,
    bestScore,
  }: IGameContext,
  action: TGameActions
) => ({
  cards: cardsReducer(cards, action),
  targetCardID: gameReducer(targetCardID, action),
  userChooseCard: chooseCardReducer(userChooseCard, action),
  score: gameReducer(score, action),
  tryCount: gameReducer(tryCount, action),
  round: gameReducer(round, action),
  bestScore: gameReducer(bestScore, action),
});

export const GameProvider: React.FC<any> = ({ children }) => {
  const [gameCTX, dispatch] = useReducer(mainReducer, initialGameCTX);

  return (
    <GameContext.Provider value={{ gameCTX, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
