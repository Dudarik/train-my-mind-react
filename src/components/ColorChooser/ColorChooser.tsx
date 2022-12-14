import { useContext } from "react";
import {
  CARD_ITEMS_COLOR_BLUE,
  CARD_ITEMS_COLOR_GREEN,
  CARD_ITEMS_COLOR_RED,
  CARD_ITEMS_COLOR_YELLOW,
  CARD_ITEMS_NO_COLOR,
} from "../../const";
import { GameContext } from "../../context";
import { actionChooseCardTypes } from "../../context/enums";

import "./ColorChooser.scss";

const ColorChooser = () => {
  const { gameCtx, dispatch } = useContext(GameContext);
  const { cardColor } = gameCtx.userChooseCard;

  const handlerCardColorChooser = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: actionChooseCardTypes.changeUCSCardColor,
      payload: event.target.value,
    });
  };

  return (
    <div className='colorchooser'>
      <input
        type='radio'
        name='color'
        id='nocolor'
        checked={cardColor === CARD_ITEMS_NO_COLOR}
        value={CARD_ITEMS_NO_COLOR}
        onChange={handlerCardColorChooser}
      />
      <label htmlFor='nocolor'>
        <span className='nocolor'></span>
      </label>
      <input
        type='radio'
        name='color'
        id='red'
        checked={cardColor === CARD_ITEMS_COLOR_RED}
        value={CARD_ITEMS_COLOR_RED}
        onChange={handlerCardColorChooser}
      />
      <label htmlFor='red'>
        <span className='red'></span>
      </label>
      <input
        type='radio'
        name='color'
        id='green'
        checked={cardColor === CARD_ITEMS_COLOR_GREEN}
        value={CARD_ITEMS_COLOR_GREEN}
        onChange={handlerCardColorChooser}
      />
      <label htmlFor='green'>
        <span className='green'></span>
      </label>
      <input
        type='radio'
        name='color'
        id='yellow'
        checked={cardColor === CARD_ITEMS_COLOR_YELLOW}
        value={CARD_ITEMS_COLOR_YELLOW}
        onChange={handlerCardColorChooser}
      />
      <label htmlFor='yellow'>
        <span className='yellow'></span>
      </label>
      <input
        type='radio'
        name='color'
        id='blue'
        checked={cardColor === CARD_ITEMS_COLOR_BLUE}
        value={CARD_ITEMS_COLOR_BLUE}
        onChange={handlerCardColorChooser}
      />
      <label htmlFor='blue'>
        <span className='blue'></span>
      </label>{" "}
    </div>
  );
};

export default ColorChooser;
