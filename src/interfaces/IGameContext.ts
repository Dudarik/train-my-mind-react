import { ICard } from "./ICard";

export interface IGameContext {
  cards: ICard[];
  userChooseCard: ICard;
  targetCardID: number;
  round: number;
  tryCount: number;
  score: number;
  bestScore: number;
}
