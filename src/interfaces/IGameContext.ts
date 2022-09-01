import { ICard } from "./ICard";

export interface IGameContext {
  cards: ICard[];
  closeCards: number[];
  userChooseCard: ICard;
  targetCardID: number;
  targetCardHightlight: boolean;
  round: number;
  tryCount: number;
  score: number;
  points: number;
  bestScore: number;
}
