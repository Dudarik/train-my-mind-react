import { ICard } from "../interfaces/ICard";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum actionGameTypes {
  loadCards = "LOAD_CARDS",
  openCard = "OPEN_CARD",
  closeCard = "CLOSE_CARD",
  setTargetCardId = "SET_TARGET_CARD_ID",
  setScore = "SET_SCORE",
  setTryCount = "SET_TRY_COUNT",
  setRound = "SET_ROUND",
  setBestScore = "SET_BEST_SCORE",
}

export enum actionChooseCardTypes {
  changeUCSCardCountItem = "CHANGE_UCS_COUNT_ITEM",
  changeUCSCardType = "CHANGE_UCS_CARD_TYPE",
  changeUCSCardColor = "CHANGE_UCS_CARD_COLOR",
}

type GamePayload = {
  [actionGameTypes.setTargetCardId]: number;
  [actionGameTypes.setScore]: number;
  [actionGameTypes.setTryCount]: number;
  [actionGameTypes.setRound]: number;
  [actionGameTypes.setBestScore]: number;
};

type ChooseCardPayload = {
  [actionChooseCardTypes.changeUCSCardType]: string;
  [actionChooseCardTypes.changeUCSCardCountItem]: number;
  [actionChooseCardTypes.changeUCSCardColor]: string;
};

type CardsPayload = {
  [actionGameTypes.loadCards]: ICard[];
  [actionGameTypes.openCard]: number;
  [actionGameTypes.closeCard]: number;
};

export type TGameActions = GameActions | CardsActions | ChooseCardActions; //| ChooseCardActions | CardsActions;

export type GameActions = ActionMap<GamePayload>[keyof ActionMap<GamePayload>];

export type ChooseCardActions =
  ActionMap<ChooseCardPayload>[keyof ActionMap<ChooseCardPayload>];

export type CardsActions =
  ActionMap<CardsPayload>[keyof ActionMap<CardsPayload>];

export const cardsReducer = (
  state: ICard[],
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionGameTypes.loadCards:
      return payload;

    case actionGameTypes.openCard:
      return [
        ...state.map((card) =>
          card.id === payload ? { ...card, cardOpen: true } : card
        ),
      ];
    case actionGameTypes.closeCard:
      return [
        ...state.map((card) =>
          card.id === payload ? { ...card, cardOpen: false } : card
        ),
      ];

    default:
      return state;
  }
};

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

export const chooseCardReducer = (
  state: ICard,
  { type, payload }: TGameActions
) => {
  switch (type) {
    case actionChooseCardTypes.changeUCSCardType:
      return {
        ...state,
        cardType: payload,
      };
    case actionChooseCardTypes.changeUCSCardColor:
      return {
        ...state,
        cardColor: payload,
      };
    case actionChooseCardTypes.changeUCSCardCountItem:
      return {
        ...state,
        countItem: payload,
      };

    default:
      return state;
  }
};
