import "./CountCardItemsChooser.scss";
const CountCardItemsChooser = () => {
  return (
    <div className='form_radio_group'>
      <div className='form_radio_group-item'>
        <input id='radio-1' type='radio' name='radio' value='1' checked />
        <label htmlFor='radio-1'>Radio button 1</label>
      </div>
      <div className='form_radio_group-item'>
        <input id='radio-2' type='radio' name='radio' value='2' />
        <label htmlFor='radio-2'>Radio button 2</label>
      </div>
      <div className='form_radio_group-item'>
        <input id='radio-3' type='radio' name='radio' value='3' />
        <label htmlFor='radio-3'>Radio button 3</label>
      </div>
      <div className='form_radio_group-item'>
        <input id='radio-4' type='radio' name='radio' value='4' />
        <label htmlFor='radio-4'>Radio button 4</label>
      </div>
    </div>
  );
};

export default CountCardItemsChooser;
