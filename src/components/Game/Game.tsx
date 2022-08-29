import { useStartNewRound } from "../../hooks/useStartNewRound";

import Board from "../Board/Board";
import GameControls from "../GameControls/GameControls";
import GameInfo from "../GameInfo/GameInfo";

import "./Game.scss";

const Game: React.FC = () => {
  useStartNewRound();

  return (
    <div className='game'>
      <GameInfo />
      <Board />
      <GameControls />
    </div>
  );
};

export default Game;
