import { CARD_ITEMS_COLOR_GREEN, LAMP } from "../const";
import { IGameContext } from "../interfaces/IGameContext";

export const initialGameCtx: IGameContext = {
  cards: [],
  closeCards: [],
  userChooseCard: {
    id: 0,
    countItem: 1,
    cardType: LAMP,
    cardColor: CARD_ITEMS_COLOR_GREEN,
    cardOpen: true,
  },
  targetCardID: -1,
  round: 1,
  score: 0,
  tryCount: 0,
  bestScore: 0,
};
