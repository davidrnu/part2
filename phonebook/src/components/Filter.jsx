const Filter = ({ inputValue, valueHandler }) => (
  <div>
    filter shown with <input value={inputValue} onChange={valueHandler} />
  </div>
);

export default Filter