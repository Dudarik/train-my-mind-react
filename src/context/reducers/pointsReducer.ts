import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const pointsReducer = (
  state: number,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionGameTypes.setPoints:
      return payload;

    default:
      return state;
  }
};
