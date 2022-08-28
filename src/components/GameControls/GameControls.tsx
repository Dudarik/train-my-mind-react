import { useContext, useEffect } from "react";
import { GameContext } from "../../context";
import Card from "../Card/Card";

import "./GameControls.scss";
import CardTypeChooser from "../CardTypeChooser/CardTypeChooser";
import ColorChooser from "../ColorChooser/ColorChooser";
import CountCardItemsChooser from "../../CountCardItemsChooser/CountCardItemsChooser";
import { checkAnswer } from "../../helpers/checkAnswer";
import { actionGameTypes } from "../../context/enums";
import { getRandomCloseCardId } from "../../helpers/randomGenerator";
import { NO_ICON } from "../../const";

const GameControls: React.FC = () => {
  const {
    gameCtx: {
      userChooseCard,
      cards,
      targetCardID,
      targetCardHightlight,
      score,
      closeCards,
      round,
      bestScore,
    },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    if (targetCardHightlight && closeCards.length > 3) {
      dispatch({
        type: actionGameTypes.setTargetCardId,
        payload: getRandomCloseCardId(closeCards),
      });
    } else {
      dispatch({
        type: actionGameTypes.setTargetCardHighligth,
        payload: false,
      });
      dispatch({
        type: actionGameTypes.setTargetCardId,
        payload: -1,
      });
    } //eslint-disable-next-line
  }, [targetCardHightlight, cards, dispatch]);

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
      console.log(`Round ${round} the end!`);

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

    dispatch({
      type: actionGameTypes.removeFromCloseCards,
      payload: targetCardID,
    });

    dispatch({ type: actionGameTypes.openCard, payload: targetCardID });

    dispatch({ type: actionGameTypes.setScore, payload: score + result });
  };

  return (
    <div className='gamecontrols'>
      <Card card={userChooseCard} />
      {closeCards.length > 3 ? (
        <button className='checkbutton' onClick={handleCheckAnswer}>
          Check
        </button>
      ) : round < 3 ? (
        <button className='checkbutton' onClick={handleNextRound}>
          next round
        </button>
      ) : (
        <button className='checkbutton' onClick={handleNewGame}>
          NEW game
        </button>
      )}

      <CardTypeChooser />
      <ColorChooser />
      <CountCardItemsChooser />
    </div>
  );
};

export default GameControls;
