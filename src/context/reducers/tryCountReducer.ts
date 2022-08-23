import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const tryCountReducer = (
  state: number,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionGameTypes.setTryCount:
      return payload;

    default:
      return state;
  }
};
