import React, { useContext } from "react";
import { GameContext } from "../context";
import { actionChooseCardTypes } from "../context/gameReducer";

import "./CountCardItemsChooser.scss";

const CountCardItemsChooser = () => {
  const { state, dispatch } = useContext(GameContext);

  const { countItem } = state.userChooseCard;

  const handlerCountCardItemsChooser = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: actionChooseCardTypes.changeUCSCardCountItem,
      payload: Number(event.target.value),
    });
  };
  return (
    <div className='form_radio_group'>
      <div className='form_radio_group-item'>
        <input
          id='radio-1'
          type='radio'
          name='radio'
          value='1'
          checked={countItem === 1}
          onChange={handlerCountCardItemsChooser}
        />
        <label htmlFor='radio-1'>1</label>
      </div>
      <div className='form_radio_group-item'>
        <input
          id='radio-2'
          type='radio'
          name='radio'
          value='2'
          checked={countItem === 2}
          onChange={handlerCountCardItemsChooser}
        />
        <label htmlFor='radio-2'>2</label>
      </div>
      <div className='form_radio_group-item'>
        <input
          id='radio-3'
          type='radio'
          name='radio'
          value='3'
          checked={countItem === 3}
          onChange={handlerCountCardItemsChooser}
        />
        <label htmlFor='radio-3'>3</label>
      </div>
      <div className='form_radio_group-item'>
        <input
          id='radio-4'
          type='radio'
          name='radio'
          value='4'
          checked={countItem === 4}
          onChange={handlerCountCardItemsChooser}
        />
        <label htmlFor='radio-4'>4</label>
      </div>
    </div>
  );
};

export default CountCardItemsChooser;
