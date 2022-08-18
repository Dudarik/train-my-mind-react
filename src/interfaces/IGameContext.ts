import { ICard } from "./ICard";

export interface IGameContext {
  cards: ICard[];
  round: number;
  tryCount: number;
  score: number;
  bestScore: number;
}
