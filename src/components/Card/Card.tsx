import CardItem from "../CardItem/CardItem";
import "./Card.scss";

type Props = {};

const Card: React.FC = (props: Props) => {
  return (
    <div className='card carditems-2'>
      <CardItem str='O' />
      <CardItem str='P' />

      <CardItem str='H' />
      {/* <CardItem str='B' /> */}
    </div>
  );
};

export default Card;
