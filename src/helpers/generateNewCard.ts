import { ICard } from "../interfaces/ICard";
import { ICardItem } from "../interfaces/ICardItem";

export const generateNewCard = (cardProp: ICard): ICardItem[] => {
  const cardItems: ICardItem[] = [];

  for (let i = 0; i < cardProp.countItem; i++) {
    cardItems.push({
      cardType: cardProp.cardType,
      cardColor: cardProp.cardColor,
      id: i,
    });
  }

  if (cardProp.countItem === 2) {
    cardItems.unshift({ cardType: "empty", cardColor: "none", id: 5 });
    cardItems.push({ cardType: "empty", cardColor: "none", id: 6 });
  }

  return cardItems;
};
