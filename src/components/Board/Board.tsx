import { useContext, useEffect } from "react";

import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";

import "./Board.scss";

import { GameContext } from "../../context";
import { actionGameTypes } from "../../context/gameReducer";
import { generateNewBoard } from "../../helpers/generateNewBoard";

const Board: React.FC = () => {
  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    dispatch({ type: actionGameTypes.loadCards, payload: generateNewBoard() });
  }, []);

  const { cards } = state;

  return (
    <div className='board'>
      {cards.map((card: ICard) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Board;
