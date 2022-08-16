import "./CardItem.scss";
import Gear from "../Gear/Gear";
import Lamp from "../Lamp/Lamp";
import Battery from "../Battery/Battery";
import Tool from "../Tool/Tool";
import { ICardItem } from "../../interfaces/ICardItem";

const CardItem: React.FC<ICardItem> = (props) => {
  console.log(props.color);
  return (
    <div className='carditem'>
      {props.cardType === "lamp" && <Lamp />}
      {props.cardType === "gear" && <Gear color={props.color} />}
      {props.cardType === "battery" && <Battery />}
      {props.cardType === "tool" && <Tool />}
      {/* <Gear color={"#22FF22"} /> */}
      {/* <Lamp /> */}
      {/* <Battery /> */}
      {/* <Tool /> */}
    </div>
  );
};

export default CardItem;
