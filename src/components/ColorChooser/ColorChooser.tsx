import "./ColorChooser.scss";
const ColorChooser = () => {
  return (
    <div className='colorchooser'>
      <input type='radio' name='color' id='red' value='red' />
      <label htmlFor='red'>
        <span className='red'></span>
      </label>
      <input type='radio' name='color' id='green' />
      <label htmlFor='green'>
        <span className='green'></span>
      </label>
      <input type='radio' name='color' id='yellow' />
      <label htmlFor='yellow'>
        <span className='yellow'></span>
      </label>
      <input type='radio' name='color' id='blue' />
      <label htmlFor='blue'>
        <span className='blue'></span>
      </label>{" "}
    </div>
  );
};

export default ColorChooser;
