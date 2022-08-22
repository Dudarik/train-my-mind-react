import { useContext } from "react";
import { GameContext } from "../context";
import { actionGameTypes } from "../context/gameReducer";

export const useOpenBoard = () => {
  const {
    gameCTX: { cards },
    dispatch,
  } = useContext(GameContext);

  // for (let i = 0; i < cards.length; i++) {
  //   dispatch({ type: actionGameTypes.openCard, payload: i });
  // }

  console.log(cards);
};
