import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const bestScoreReducer = (
  state: number,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionGameTypes.setBestScore:
      return payload;

    default:
      return state;
  }
};
