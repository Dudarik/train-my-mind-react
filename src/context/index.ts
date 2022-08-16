import React, { createContext, ReactNode } from "react";
import { IGameContext } from "../interfaces/IGameContext";

export const GameContext = createContext<IGameContext | null>(null);

export const contextProvider = (children: React.FC) => {
  const contextValue: IGameContext = {
    cards: [{ id: 1, cardType: "lamp", count: 2, color: "red" }],
    score: 0,
  };
  // return (<GameContext.provider value={contextValue}>{children}</GameContext.provider>)
};
