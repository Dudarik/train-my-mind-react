import { useContext } from "react";
import { GameContext } from "../context";

export const useOpenBoard = () => {
  const {
    gameCtx: { cards },
    dispatch,
  } = useContext(GameContext);

  // for (let i = 0; i < cards.length; i++) {
  //   dispatch({ type: actionGameTypes.openCard, payload: i });
  // }

  console.log(cards);
};
