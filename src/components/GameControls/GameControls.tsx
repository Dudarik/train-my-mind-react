import { useContext } from "react";
import { GameContext } from "../../context";
import Card from "../Card/Card";

import "./GameControls.scss";
import CardTypeChooser from "../CardTypeChooser/CardTypeChooser";
import ColorChooser from "../ColorChooser/ColorChooser";
import CountCardItemsChooser from "../../CountCardItemsChooser/CountCardItemsChooser";

const GameControls: React.FC = () => {
  const {
    gameCTX: { userChooseCard },
  } = useContext(GameContext);

  return (
    <div className='gamecontrols'>
      <Card card={userChooseCard} />
      <CardTypeChooser />
      <ColorChooser />
      <CountCardItemsChooser />
      <button className='checkbutton'>check</button>
    </div>
  );
};

export default GameControls;
