import { ICard } from "../interfaces/ICard";
import { ActionMap } from "./ActionMap";
import { actionChooseCardTypes, actionGameTypes } from "./enums";

export type GamePayload = {
  [actionGameTypes.setTargetCardId]: number;
  [actionGameTypes.setScore]: number;
  [actionGameTypes.setTryCount]: number;
  [actionGameTypes.setRound]: number;
  [actionGameTypes.setBestScore]: number;
};

export type ChooseCardPayload = {
  [actionChooseCardTypes.changeUCSCardType]: string;
  [actionChooseCardTypes.changeUCSCardCountItem]: number;
  [actionChooseCardTypes.changeUCSCardColor]: string;
};

export type CardsPayload = {
  [actionGameTypes.loadCards]: ICard[];
  [actionGameTypes.openCard]: number;
  [actionGameTypes.closeCard]: number;
};

export type TGameActions = GameActions | CardsActions | ChooseCardActions;

export type GameActions = ActionMap<GamePayload>[keyof ActionMap<GamePayload>];

export type ChooseCardActions =
  ActionMap<ChooseCardPayload>[keyof ActionMap<ChooseCardPayload>];

export type CardsActions =
  ActionMap<CardsPayload>[keyof ActionMap<CardsPayload>];