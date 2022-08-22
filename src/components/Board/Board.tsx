import { useContext, useEffect } from "react";

import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";

import "./Board.scss";

import { GameContext } from "../../context";
// import { actionGameTypes } from "../../context/gameReducer";
// import { generateNewBoard } from "../../helpers/generateNewBoard";

const Board: React.FC = () => {
  const {
    gameCTX: { cards },
  } = useContext(GameContext);

  // useEffect(() => {
  //   dispatch({ type: actionGameTypes.loadCards, payload: generateNewBoard() });
  // }, []);

  return (
    <div className='board'>
      {cards.map((card: ICard) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Board;
