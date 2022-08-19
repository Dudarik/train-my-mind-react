import { useContext } from "react";
import { GameContext } from "../../context";
import Card from "../Card/Card";

import "./GameControls.scss";
import CardTypeChooser from "../CardTypeChooser/CardTypeChooser";
import ColorChooser from "../ColorChooser/ColorChooser";
import CountCardItemsChooser from "../../CountCardItemsChooser/CountCardItemsChooser";

const GameControls: React.FC = () => {
  const { userChooseCard } = useContext(GameContext);
  console.log(userChooseCard);
  return (
    <div className='gamecontrols'>
      <Card {...userChooseCard} />
      <CardTypeChooser
        cardType={userChooseCard.cardType}
        cardColor={userChooseCard.cardColor}
      />
      <ColorChooser />
      <CountCardItemsChooser />
    </div>
  );
};

export default GameControls;
