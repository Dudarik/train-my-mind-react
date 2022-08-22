import { useContext } from "react";

import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";

import "./Board.scss";

import { GameContext } from "../../context";

const Board: React.FC = () => {
  const { gameCTX } = useContext(GameContext);
  const { cards } = gameCTX;
  const targetCardID = gameCTX.targetCardID;

  return (
    <div className='board'>
      {cards.map((card: ICard) => (
        <Card targetCardID={targetCardID} key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Board;
