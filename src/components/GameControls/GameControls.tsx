import { useContext, useEffect } from "react";
import { GameContext } from "../../context";

import Card from "../Card/Card";

import CardTypeChooser from "../CardTypeChooser/CardTypeChooser";
import ColorChooser from "../ColorChooser/ColorChooser";
import CountCardItemsChooser from "../../CountCardItemsChooser/CountCardItemsChooser";

import { checkAnswer } from "../../helpers/checkAnswer";
import { actionGameTypes } from "../../context/enums";
import { getRandomCloseCardId } from "../../helpers/randomGenerator";
import { NO_ICON } from "../../const";

import "./GameControls.scss";
import { useHandleGameControls } from "../../hooks/useHandleGameControls";

const GameControls: React.FC = () => {
  const { gameCtx, dispatch } = useContext(GameContext);

  const { targetCardHightlight, closeCards, cards, userChooseCard, round } =
    gameCtx;

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

  const [handleCheckAnswer, handleNextRound, handleNewGame] =
    useHandleGameControls({ ...gameCtx, dispatch });

  return (
    <div className='gamecontrols'>
      <Card card={userChooseCard} />
      {closeCards.length > 3 ? (
        <button className='checkbutton' onClick={handleCheckAnswer}>
          Check
        </button>
      ) : round < 3 ? (
        <button className='checkbutton' onClick={handleNextRound}>
          Next round
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
