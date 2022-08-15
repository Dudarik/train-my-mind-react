import { ICard } from "../../interfaces/ICard";
import CardItem from "../CardItem/CardItem";
import "./Card.scss";

// type Props = {
//   cardType: string;
//   count: number;
//   color: string;
// };

const Card: React.FC<ICard> = (props) => {
  console.log(props);
  return (
    <div className='card'>
      {}
      {/* <CardItem str='O' />
      <CardItem str='P' />

      <CardItem str='H' /> */}
      {/* <CardItem str='B' /> */}
    </div>
  );
};

export default Card;
