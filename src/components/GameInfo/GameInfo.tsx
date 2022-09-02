import { useContext } from "react";
import { GameContext } from "../../context";
import "./GameInfo.scss";

const GameInfo = () => {
  const {
    gameCtx: { score, bestScore, round },
  } = useContext(GameContext);

  return (
    <div className='gameinfo'>
      <div className='gcdiv'>
        Раунд: <span>{round}</span>
      </div>
      <div className='gcdiv'>
        Очки: <span>{score}</span>
      </div>
      <div className='gcdiv'>
        Рекорд: <span>{bestScore}</span>
      </div>
      {/* <span className='gcspan'>tryCount: {tryCount}</span> */}
    </div>
  );
};

export default GameInfo;
