import {
  ARRAY_OF_CARD_COLORS,
  ARRAY_OF_CARD_TYPES,
  COUNT_CARDS,
} from "../const";
import { ICard } from "../interfaces/ICard";
import {
  getCountItem,
  getRandomCardType,
  getRandomColor,
} from "./randomGenerator";

export const generateNewField = (): ICard[] => {
  const newField: ICard[] = [];
  for (let i = 0; i < COUNT_CARDS; i++) {
    const newCard: ICard = {
      id: i,
      cardType: ARRAY_OF_CARD_TYPES[getRandomCardType()],
      countItem: getCountItem(),
      cardColor: ARRAY_OF_CARD_COLORS[getRandomColor()],
      cardOpen: true,
    };

    newField.push(newCard);
  }
  return newField;
};
