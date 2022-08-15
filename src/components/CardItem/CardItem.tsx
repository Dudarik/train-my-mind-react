import "./CardItem.scss";
import Gear from "../Gear/Gear";
import Lamp from "../Lamp/Lamp";
import Battery from "../Battery/Battery";
import Tool from "../Tool/Tool";

type Props = {
  str?: string;
};

const CardItem: React.FC<Props> = (props: Props) => {
  const { str } = props;
  return (
    <div className='carditem'>
      {/* <Gear color={"#22FF22"} /> */}
      {/* <Lamp /> */}
      {/* <Battery /> */}
      <Tool />
    </div>
  );
};

export default CardItem;
