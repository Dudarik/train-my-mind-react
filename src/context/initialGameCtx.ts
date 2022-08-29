import { CARD_ITEMS_COLOR_GREEN, LAMP } from "../const";
import { getBestScore } from "../helpers/getBestScore";
import { IGameContext } from "../interfaces/IGameContext";

export const initialGameCtx: IGameContext = {
  cards: [],
  closeCards: [],
  userChooseCard: {
    id: -1,
    countItem: 1,
    cardType: LAMP,
    cardColor: CARD_ITEMS_COLOR_GREEN,
    cardOpen: true,
  },
  targetCardID: -1,
  targetCardHightlight: false,
  round: 1,
  score: 0,
  tryCount: 0,
  bestScore: getBestScore(),
};
