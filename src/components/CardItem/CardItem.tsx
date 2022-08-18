import "./CardItem.scss";
import Gear from "../Gear/Gear";
import Lamp from "../Lamp/Lamp";
import Battery from "../Battery/Battery";
import Tool from "../Tool/Tool";
import { ICardItem } from "../../interfaces/ICardItem";
import EmptyItem from "../EmpyItem/EmptyItem";
import { BATTERY, GEAR, LAMP, TOOL } from "../../const";

const CardItem: React.FC<ICardItem> = (props) => {
  return (
    <div className='carditem'>
      {props.cardType === "empty" && <EmptyItem />}
      {props.cardType === LAMP && <Lamp color={props.cardColor} />}
      {props.cardType === GEAR && <Gear color={props.cardColor} />}
      {props.cardType === BATTERY && <Battery color={props.cardColor} />}
      {props.cardType === TOOL && <Tool color={props.cardColor} />}
    </div>
  );
};

export default CardItem;
