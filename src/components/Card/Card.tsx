import { useContext, useEffect, useState } from "react";

import { ICard } from "../../interfaces/ICard";
import { ICardItem } from "../../interfaces/ICardItem";

import CardItem from "../CardItem/CardItem";
import "./Card.scss";

/**
 *
 * ##TODO
 * Удалить обработчик клика по карточке
 * Удалить стейт
 * Это только для теста
 */

const Card: React.FC<ICard> = (props) => {
  // const [cardOpen, setCardOpen] = useState<boolean>(false);

  const { cardOpen } = props;
  const cardItems: ICardItem[] = [];

  for (let i = 0; i < props.countItem; i++) {
    cardItems.push({
      cardType: props.cardType,
      cardColor: props.cardColor,
      id: i,
    });
  }

  if (props.countItem === 2) {
    cardItems.unshift({ cardType: "empty", cardColor: "none", id: 5 });
    cardItems.push({ cardType: "empty", cardColor: "none", id: 6 });
  }

  return (
    <div className={`card ${cardOpen && "cardopen"}`}>
      <div className='front'></div>
      <div className='back'>
        {cardItems.map((cardItem) => (
          <CardItem key={cardItem.id} {...cardItem} />
        ))}
      </div>
    </div>
  );
};

export default Card;
