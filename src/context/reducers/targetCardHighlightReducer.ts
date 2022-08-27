import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const targetCardHighlightReducer = (
  state: boolean,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionGameTypes.setTargetCardHighligth:
      return payload;

    default:
      return state;
  }
};
