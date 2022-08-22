import { useContext } from "react";
import { GameContext } from "../../context";
import "./GameInfo.scss";

const GameInfo = () => {
  const {
    gameCTX: { score, bestScore, tryCount, round },
  } = useContext(GameContext);

  return (
    <div className='gameinfo'>
      <span className='gcspan'>score: {score}</span>
      <span className='gcspan'>bestScore: {bestScore}</span>
      <span className='gcspan'>tryCount: {tryCount}</span>
      <span className='gcspan'>round: {round}</span>
    </div>
  );
};

export default GameInfo;
