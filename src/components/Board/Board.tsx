import { useState } from "react";
import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";

import "./Board.scss";

const LAMP = "lamp",
  BATTERY = "battery",
  GEAR = "gear",
  TOOL = "tool";

const COLOR_RED = "#ff0000",
  COLOR_GREEN = "#00FF00",
  COLOR_BLUE = "#0000FF",
  COLOR_YELLOW = "#FFFF00";

const mockData: ICard[] = [
  { cardType: LAMP, count: 4, color: COLOR_RED },
  { cardType: BATTERY, count: 2, color: COLOR_GREEN },
  { cardType: GEAR, count: 3, color: COLOR_YELLOW },
  { cardType: BATTERY, count: 4, color: COLOR_RED },

  { cardType: LAMP, count: 2, color: COLOR_GREEN },
  { cardType: BATTERY, count: 2, color: COLOR_GREEN },
  { cardType: GEAR, count: 3, color: COLOR_YELLOW },
  { cardType: BATTERY, count: 1, color: COLOR_BLUE },

  { cardType: GEAR, count: 4, color: COLOR_YELLOW },
  { cardType: TOOL, count: 2, color: COLOR_BLUE },
  { cardType: LAMP, count: 4, color: COLOR_RED },
  { cardType: TOOL, count: 1, color: COLOR_BLUE },

  { cardType: BATTERY, count: 2, color: COLOR_GREEN },
  { cardType: GEAR, count: 3, color: COLOR_YELLOW },
  { cardType: TOOL, count: 1, color: COLOR_BLUE },
  { cardType: TOOL, count: 1, color: COLOR_BLUE },
];

const Board: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>(mockData);
  console.log(cards);
  return (
    <div className='board'>
      {cards.map((card: ICard) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default Board;
