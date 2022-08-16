import { ICard } from "./ICard";

export interface IGameContext {
  cards: ICard[];
  score: number;
}
