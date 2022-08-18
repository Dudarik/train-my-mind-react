import { ICardItem } from "./ICardItem";

export interface ICard extends ICardItem {
  countItem: number;
  cardOpen: boolean;
}
