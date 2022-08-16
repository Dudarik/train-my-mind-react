import "./CardItem.scss";
import Gear from "../Gear/Gear";
import Lamp from "../Lamp/Lamp";
import Battery from "../Battery/Battery";
import Tool from "../Tool/Tool";
import { ICardItem } from "../../interfaces/ICardItem";
import EmptyItem from "../EmpyItem/EmptyItem";

const CardItem: React.FC<ICardItem> = (props) => {
  return (
    <div className='carditem'>
      {props.cardType === "empty" && <EmptyItem />}
      {props.cardType === "lamp" && <Lamp color={props.color} />}
      {props.cardType === "gear" && <Gear color={props.color} />}
      {props.cardType === "battery" && <Battery color={props.color} />}
      {props.cardType === "tool" && <Tool color={props.color} />}
      {/* <Gear color={"#22FF22"} /> */}
      {/* <Lamp /> */}
      {/* <Battery /> */}
      {/* <Tool /> */}
    </div>
  );
};

export default CardItem;
