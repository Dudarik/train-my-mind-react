import { useContext, useState } from "react";

import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";

import "./Board.scss";

import { GameContext } from "../../context";

const Board: React.FC = () => {
  const { cards } = useContext(GameContext);

  return (
    <div className='board'>
      {cards.map((card: ICard) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Board;
