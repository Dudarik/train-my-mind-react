import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const closeCardsReducer = (
  state: number[],
  { type, payload }: TGameActions
): number[] => {
  switch (type) {
    case actionGameTypes.setCloseCards:
      return payload;

    case actionGameTypes.removeFromCloseCards: {
      return [...state.filter((item) => item !== payload)];
    }

    default:
      return state;
  }
};
