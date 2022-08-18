import { createContext } from "react";
import { IGameContext } from "../interfaces/IGameContext";

const defaultContext: IGameContext = {
  cards: [],
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
