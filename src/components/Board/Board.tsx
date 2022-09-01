import { useContext, useEffect, useState } from "react";

import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";

import { GameContext } from "../../context";

import "./Board.scss";
import { actionGameTypes } from "../../context/enums";

const Board: React.FC = () => {
  const { gameCtx, dispatch } = useContext(GameContext);
  const { cards, points } = gameCtx;
  const targetCardID = gameCtx.targetCardID;

  const [currPoints, setCurrPoints] = useState<number>(0);

  useEffect(() => {
    setCurrPoints(points);

    const tId = setTimeout(() => {
      dispatch({ type: actionGameTypes.setPoints, payload: 0 });
    }, 700);

    return () => {
      clearTimeout(tId);
    };
  }, [points, dispatch]);

  return (
    <div className='board'>
      {cards.map((card: ICard) => (
        <Card targetCardID={targetCardID} key={card.id} card={card} />
      ))}
      {currPoints > 0 ? <div className='card-points'>+{currPoints}</div> : null}
    </div>
  );
};

export default Board;
