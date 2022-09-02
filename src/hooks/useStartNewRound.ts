import React, { useContext } from "react";
import { COUNT_CARDS } from "../const";
import { GameContext } from "../context";
import { actionGameTypes } from "../context/enums";
import { generateNewBoard } from "../helpers/generateNewBoard";

export const useStartNewRound = (): void => {
  const {
    gameCtx: { round },
    dispatch,
  } = useContext(GameContext);
  React.useEffect(() => {
    const [cards, closeCards] = generateNewBoard();

    dispatch({ type: actionGameTypes.loadCards, payload: cards });
    dispatch({ type: actionGameTypes.setCloseCards, payload: closeCards });
    setTimeout(() => {
      let i = 0;

      const interID = setInterval(() => {
        if (i === COUNT_CARDS - 1) clearInterval(interID);
        dispatch({ type: actionGameTypes.openCard, payload: i++ });
      }, 10);

      setTimeout(() => {
        for (let i = 0; i < COUNT_CARDS; i++) {
          dispatch({ type: actionGameTypes.closeCard, payload: i });
        }

        setTimeout(() => {
          dispatch({
            type: actionGameTypes.setTargetCardHighligth,
            payload: true,
          });

          //   // dispatch({
          //   //   type: actionGameTypes.setRound,
          //   //   payload: round + 1,
          //   // });
        }, 500);
      }, 1000 * 2);
    }, 1000);
    //eslint-disable-next-line
  }, [round]);
};
