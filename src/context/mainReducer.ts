import { IGameContext } from "../interfaces/IGameContext";
import { cardsReducer } from "./cardsReducer";
import { chooseCardReducer } from "./chooseCardReducer";

import { gameReducer } from "./gameReducer";
import { TGameActions } from "./types";

export const mainReducer = (
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
