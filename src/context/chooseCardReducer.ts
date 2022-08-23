import { ICard } from "../interfaces/ICard";
import { actionChooseCardTypes } from "./enums";
import { TGameActions } from "./types";

export const chooseCardReducer = (
  state: ICard,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionChooseCardTypes.changeUCSCardType:
      return {
        ...state,
        cardType: payload,
      };
    case actionChooseCardTypes.changeUCSCardColor:
      return {
        ...state,
        cardColor: payload,
      };
    case actionChooseCardTypes.changeUCSCardCountItem:
      return {
        ...state,
        countItem: payload,
      };

    default:
      return state;
  }
};
