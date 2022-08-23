import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const targetCardReducer = (
  state: number,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionGameTypes.setTargetCardId:
      return payload;

    case actionGameTypes.resetTargetCardId:
      return -1;

    default:
      return state;
  }
};
