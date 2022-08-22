import { useContext } from "react";
import { BATTERY, GEAR, LAMP, TOOL } from "../../const";
import { GameContext } from "../../context";
import { actionChooseCardTypes } from "../../context/gameReducer";
import Battery from "../Battery/Battery";
import Gear from "../Gear/Gear";
import Lamp from "../Lamp/Lamp";
import Tool from "../Tool/Tool";
import "./CardTypeChooser.scss";

const CardTypesChooser: React.FC = () => {
  const { state, dispatch } = useContext(GameContext);
  const { cardType, cardColor } = state.userChooseCard;

  const handleCardTypesChooser = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch({
      type: actionChooseCardTypes.changeUCSCardType,
      payload: event.target.value,
    });
  };

  return (
    <div className='chooser-container'>
      <form className='chooser-form'>
        <label htmlFor={BATTERY}>
          <input
            type='radio'
            name='cardchooser'
            className={`chooser-${BATTERY}`}
            id={BATTERY}
            value={BATTERY}
            radioGroup='cardtypechooser'
            checked={cardType === BATTERY}
            onChange={handleCardTypesChooser}
          />
          <Battery color={cardColor} />
        </label>

        <label htmlFor={GEAR}>
          <input
            type='radio'
            name='cardchooser'
            className={`chooser-${GEAR}`}
            id={GEAR}
            value={GEAR}
            radioGroup='cardtypechooser'
            checked={cardType === GEAR}
            onChange={handleCardTypesChooser}
          />
          <Gear color={cardColor} />
        </label>

        <label htmlFor={LAMP}>
          <input
            type='radio'
            name='cardchooser'
            className={`chooser-${LAMP}`}
            id={LAMP}
            value={LAMP}
            radioGroup='cardtypechooser'
            checked={cardType === LAMP}
            onChange={handleCardTypesChooser}
          />
          <Lamp color={cardColor} />
        </label>

        <label htmlFor={TOOL}>
          <input
            type='radio'
            name='cardchooser'
            className={`chooser-${TOOL}`}
            id={TOOL}
            value={TOOL}
            radioGroup='cardtypechooser'
            checked={cardType === TOOL}
            onChange={handleCardTypesChooser}
          />
          <Tool color={cardColor} />
        </label>
      </form>
    </div>
  );
};

export default CardTypesChooser;
