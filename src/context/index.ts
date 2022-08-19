import { createContext } from "react";
import { CARD_ITEMS_COLOR_GREEN, LAMP } from "../const";
import { IGameContext } from "../interfaces/IGameContext";

const defaultContext: IGameContext = {
  cards: [],
  userChooseCard: {
    id: 0,
    countItem: 1,
    cardType: LAMP,
    cardColor: CARD_ITEMS_COLOR_GREEN,
    cardOpen: true,
  },
  targetCardID: 0,
  score: 0,
  tryCount: 0,
  round: 1,
  bestScore: 0,
};

export const GameContext = createContext(defaultContext);

// export const contextProvider = (o: any) => {
//   const { children } = o;

//   console.log(children);

//   // return (
//   //   <GameContext.provider value={contextValue}>{children}</GameContext.provider>
//   // );
// };
