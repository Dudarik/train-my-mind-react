import { ICard } from "../../interfaces/ICard";
import { ICardItem } from "../../interfaces/ICardItem";
import CardItem from "../CardItem/CardItem";
import "./Card.scss";

// type Props = {
//   cardType: string;
//   count: number;
//   color: string;
// };

const Card: React.FC<ICard> = (props) => {
  const cardItems: ICardItem[] = [];
  for (let i = 0; i < props.count; i++) {
    cardItems.push({ cardType: props.cardType, color: props.color, id: i });
  }

  return (
    <div className='card'>
      {cardItems.map((cardItem) => (
        <CardItem key={cardItem.id} {...cardItem} />
      ))}
      {/* <CardItem str='O' />
      <CardItem str='P' />

      <CardItem str='H' /> */}
      {/* <CardItem str='B' /> */}
    </div>
  );
};

export default Card;
