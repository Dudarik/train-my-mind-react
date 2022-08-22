import { useContext, useEffect } from "react";
import { COUNT_CARDS } from "../../const";

import { GameContext } from "../../context";
import { actionGameTypes } from "../../context/gameReducer";

import { generateNewBoard } from "../../helpers/generateNewBoard";

import Board from "../Board/Board";
import GameControls from "../GameControls/GameControls";
import GameInfo from "../GameInfo/GameInfo";

import "./Game.scss";

const Game: React.FC = () => {
  const { dispatch } = useContext(GameContext);

  const closeCards: Array<number> = [];

  for (let i = 0; i < COUNT_CARDS; i++) {
    closeCards.push(i);
  }
  // useOpenBoard();

  useEffect(() => {
    dispatch({ type: actionGameTypes.loadCards, payload: generateNewBoard() });
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
          dispatch({ type: actionGameTypes.setTargetCardId, payload: 2 });
        }, 1000);
      }, 1000 * 5);
    }, 1000);
  }, [dispatch]);
  return (
    <div className='game'>
      <h1>Game</h1>
      <GameInfo />
      <Board />
      <GameControls />
    </div>
  );
};

export default Game;
