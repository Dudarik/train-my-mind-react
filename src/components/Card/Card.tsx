import { generateNewCard } from "../../helpers/generateNewCard";

import { ICard } from "../../interfaces/ICard";
import { ICardItem } from "../../interfaces/ICardItem";

import CardItem from "../CardItem/CardItem";
import "./Card.scss";

const Card: React.FC<ICard> = (props) => {
  const { cardOpen } = props;
  const cardItems: ICardItem[] = generateNewCard(props);

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
