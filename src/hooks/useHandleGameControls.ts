import { MouseEventHandler } from "react";
import { NO_ICON } from "../const";
import { actionGameTypes } from "../context/enums";
import { TGameActions } from "../context/types";
import { checkAnswer } from "../helpers/checkAnswer";
import { ICard } from "../interfaces/ICard";

type TProps = {
  closeCards: number[];
  targetCardID: number;
  cards: ICard[];
  round: number;
  bestScore: number;
  score: number;
  userChooseCard: ICard;
  dispatch: (action: TGameActions) => void;
};
export const useHandleGameControls = (props: TProps): MouseEventHandler[] => {
  const {
    closeCards,
    targetCardID,
    cards,
    round,
    bestScore,
    score,
    dispatch,
    userChooseCard,
  } = props;

  const handleNewGame = (): void => {
    if (round === 3 && closeCards.length === 3) {
      if (bestScore < score) {
        localStorage.setItem("bestscore", score.toString());
        dispatch({ type: actionGameTypes.setBestScore, payload: score });
      }
      dispatch({ type: actionGameTypes.setScore, payload: 0 });
      dispatch({ type: actionGameTypes.setRound, payload: 1 });
    }
  };

  const handleNextRound = (): void => {
    if (round < 3) {
      dispatch({ type: actionGameTypes.setRound, payload: round + 1 });
    }
  };

  const handleCheckAnswer = (): void => {
    if (closeCards.length === 3) {
      dispatch({
        type: actionGameTypes.setTargetCardHighligth,
        payload: false,
      });
      return;
    }

    const result = checkAnswer(
      [
        cards[targetCardID].cardType,
        cards[targetCardID].cardColor,
        cards[targetCardID].countItem,
      ],
      [
        userChooseCard.cardType !== NO_ICON
          ? userChooseCard.cardType
          : undefined,
        userChooseCard.cardColor !== "#FFF"
          ? userChooseCard.cardColor
          : undefined,
        userChooseCard.countItem !== 0 ? userChooseCard.countItem : undefined,
      ]
    );
    dispatch({ type: actionGameTypes.setPoints, payload: result });

    dispatch({
      type: actionGameTypes.removeFromCloseCards,
      payload: targetCardID,
    });

    dispatch({ type: actionGameTypes.openCard, payload: targetCardID });

    dispatch({ type: actionGameTypes.setScore, payload: score + result });
  };

  return [handleCheckAnswer, handleNextRound, handleNewGame];
};
