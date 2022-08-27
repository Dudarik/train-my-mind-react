import { useStartNewRound } from "../../hooks/useStartNewRound";

import Board from "../Board/Board";
import GameControls from "../GameControls/GameControls";
import GameInfo from "../GameInfo/GameInfo";

import "./Game.scss";

const Game: React.FC = () => {
  useStartNewRound();

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
