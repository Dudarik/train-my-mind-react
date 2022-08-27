import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const scroreReducer = (
  state: number,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionGameTypes.setScore:
      return payload;
    default:
      return state;
  }
};
