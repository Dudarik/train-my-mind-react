import { useState } from "react";
import { ICard } from "../../interfaces/ICard";
import Card from "../Card/Card";

import "./Board.scss";

const LAMP = "lamp",
  BATTERY = "battery",
  GEAR = "gear",
  TOOL = "tool";

const COLOR_RED = "#CC0000",
  COLOR_GREEN = "#00EE00",
  COLOR_BLUE = "#00bFFF",
  COLOR_YELLOW = "#FFFF00";

const mockData: ICard[] = [
  { id: 0, cardType: LAMP, count: 4, color: COLOR_BLUE },
  { id: 1, cardType: BATTERY, count: 3, color: COLOR_GREEN },
  { id: 2, cardType: GEAR, count: 1, color: COLOR_BLUE },
  { id: 3, cardType: BATTERY, count: 4, color: COLOR_RED },

  { id: 4, cardType: LAMP, count: 2, color: COLOR_GREEN },
  { id: 5, cardType: BATTERY, count: 2, color: COLOR_GREEN },
  { id: 6, cardType: GEAR, count: 3, color: COLOR_YELLOW },
  { id: 7, cardType: BATTERY, count: 1, color: COLOR_BLUE },

  { id: 8, cardType: GEAR, count: 4, color: COLOR_YELLOW },
  { id: 9, cardType: TOOL, count: 2, color: COLOR_BLUE },
  { id: 10, cardType: LAMP, count: 4, color: COLOR_RED },
  { id: 11, cardType: TOOL, count: 1, color: COLOR_YELLOW },

  { id: 12, cardType: BATTERY, count: 1, color: COLOR_YELLOW },
  { id: 13, cardType: GEAR, count: 2, color: COLOR_RED },
  { id: 14, cardType: TOOL, count: 1, color: COLOR_BLUE },
  { id: 15, cardType: TOOL, count: 3, color: COLOR_GREEN },
];

const Board: React.FC = () => {
  const [cards, setCards] = useState<ICard[]>(mockData);
  // console.log(cards);
  return (
    <div className='board'>
      {cards.map((card: ICard) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Board;
