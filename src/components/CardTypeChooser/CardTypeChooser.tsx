import React from "react";
import { BATTERY } from "../../const";
import Battery from "../Battery/Battery";
import Gear from "../Gear/Gear";
import Lamp from "../Lamp/Lamp";
import Tool from "../Tool/Tool";
import "./CardTypeChooser.scss";

type Props = {
  cardType: string;
  cardColor: string;
};

const CardTypesChooser: React.FC<Props> = (props: Props) => {
  const { cardType, cardColor } = props;

  const handleCardTypesChooser = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {};

  // console.log(cardType, cardColor);
  return (
    <div className='chooser-container'>
      <form className='chooser-form'>
        <label htmlFor='battery'>
          <input
            type='radio'
            name='rating'
            className={`chooser-${BATTERY}`}
            id={BATTERY}
            value={BATTERY}
            radioGroup='cardtypechooser'
            checked={cardType === BATTERY}
            onChange={handleCardTypesChooser}
          />
          <Battery color={cardColor} />
        </label>

        <label htmlFor='happy'>
          <input
            type='radio'
            name='rating'
            className='happy'
            id='happy'
            value='happy'
            radioGroup='cardtypechooser'
          />
          <Gear color={cardColor} />
        </label>

        <label htmlFor='neutral'>
          <input
            type='radio'
            name='rating'
            className='neutral'
            id='neutral'
            value='neutral'
            radioGroup='cardtypechooser'
          />
          <Lamp color={cardColor} />
        </label>

        <label htmlFor='sad'>
          <input
            type='radio'
            name='rating'
            className='sad'
            id='sad'
            value='sad'
            radioGroup='cardtypechooser'
          />
          <Tool color={cardColor} />
        </label>
      </form>
    </div>
  );
};

export default CardTypesChooser;
