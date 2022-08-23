import { ICard } from "../../interfaces/ICard";
import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const cardsReducer = (
  state: ICard[],
  { type, payload }: TGameActions
): ICard[] => {
  switch (type) {
    case actionGameTypes.loadCards:
      return payload;

    case actionGameTypes.openCard:
      return [
        ...state.map((card) =>
          card.id === payload ? { ...card, cardOpen: true } : card
        ),
      ];
    case actionGameTypes.closeCard:
      return [
        ...state.map((card) =>
          card.id === payload ? { ...card, cardOpen: false } : card
        ),
      ];

    default:
      return state;
  }
};
