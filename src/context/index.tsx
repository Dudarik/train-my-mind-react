import { createContext, Dispatch, useReducer } from "react";

import { IGameContext } from "../interfaces/IGameContext";
import { initialGameCtx } from "./initialGameCtx";

import { mainReducer } from "./mainReducer";
import { TGameActions } from "./types";

export const GameContext = createContext<{
  gameCtx: IGameContext;
  dispatch: Dispatch<TGameActions>;
}>({
  gameCtx: initialGameCtx,
  dispatch: () => null,
});

export const GameProvider: React.FC<any> = ({ children }) => {
  const [gameCtx, dispatch] = useReducer(mainReducer, initialGameCtx);

  return (
    <GameContext.Provider value={{ gameCtx, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
