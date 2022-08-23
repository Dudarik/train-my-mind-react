import { useContext } from "react";
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
    gameCtx: { userChooseCard, cards, targetCardID, score, closeCards },
    dispatch,
  } = useContext(GameContext);

  const handleCheckAnswer = (): void => {
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
    dispatch({ type: actionGameTypes.openCard, payload: targetCardID });
    dispatch({ type: actionGameTypes.setScore, payload: score + result });
    dispatch({
      type: actionGameTypes.removeFromCloseCards,
      payload: targetCardID,
    });
    dispatch({
      type: actionGameTypes.setTargetCardId,
      payload: getRandomCloseCardId(closeCards),
    });
  };

  return (
    <div className='gamecontrols'>
      <Card card={userChooseCard} />
      <button className='checkbutton' onClick={handleCheckAnswer}>
        check
      </button>
      <CardTypeChooser />
      <ColorChooser />
      <CountCardItemsChooser />
    </div>
  );
};

export default GameControls;
