import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const roundReducer = (
  state: number,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionGameTypes.setRound:
      return payload;

    default:
      return state;
  }
};
