import { IGameContext } from "../interfaces/IGameContext";
import { bestScoreReducer } from "./reducers/bestScoreReducer";
import { cardsReducer } from "./reducers/cardsReducer";
import { chooseCardReducer } from "./reducers/chooseCardReducer";
import { closeCardsReducer } from "./reducers/closeCardsReducer";
import { roundReducer } from "./reducers/roundReducer";
import { scroreReducer } from "./reducers/scoreReducer";

import { targetCardReducer } from "./reducers/targetCardReducer";
import { tryCountReducer } from "./reducers/tryCountReducer";
import { TGameActions } from "./types";

export const mainReducer = (
  {
    cards,
    closeCards,
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
  closeCards: closeCardsReducer(closeCards, action),
  targetCardID: targetCardReducer(targetCardID, action),
  userChooseCard: chooseCardReducer(userChooseCard, action),
  score: scroreReducer(score, action),
  tryCount: tryCountReducer(tryCount, action),
  round: roundReducer(round, action),
  bestScore: bestScoreReducer(bestScore, action),
});
