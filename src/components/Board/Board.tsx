import { useContext } from "react";

import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";

import "./Board.scss";

import { GameContext } from "../../context";

const Board: React.FC = () => {
  const { gameCtx } = useContext(GameContext);
  const { cards } = gameCtx;
  const targetCardID = gameCtx.targetCardID;

  return (
    <div className='board'>
      {cards.map((card: ICard) => (
        <Card targetCardID={targetCardID} key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Board;
