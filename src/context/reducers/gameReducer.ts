import { actionGameTypes } from "../enums";
import { TGameActions } from "../types";

export const gameReducer = (state: number, { type, payload }: TGameActions) => {
  switch (type) {
    case actionGameTypes.setTargetCardId:
      return payload;

    case actionGameTypes.setScore:
      return payload;

    case actionGameTypes.setTryCount:
      return payload;

    case actionGameTypes.setRound:
      return payload;

    case actionGameTypes.setBestScore:
      return payload;

    default:
      return state;
  }
};
