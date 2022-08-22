import { generateNewCard } from "../../helpers/generateNewCard";

import { ICard } from "../../interfaces/ICard";
import { ICardItem } from "../../interfaces/ICardItem";

import CardItem from "../CardItem/CardItem";
import "./Card.scss";

type Props = {
  card: ICard;
  targetCardID?: number;
};
const Card: React.FC<Props> = (props) => {
  const { cardOpen, id } = props.card;

  const cardItems: ICardItem[] = generateNewCard(props.card);

  return (
    <div
      className={`card ${cardOpen && "cardopen"} ${
        id === props.targetCardID ? "target-card" : null
      }`}>
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
