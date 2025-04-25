const PersonForm = ({
  formOnSubmit,
  nameValue,
  nameValueHandler,
  numberValue,
  numberValueHandler,
}) => {
  return (
    <form onSubmit={formOnSubmit}>
      <div>
        name: <input value={nameValue} onChange={nameValueHandler} />
      </div>

      <div>
        number: <input value={numberValue} onChange={numberValueHandler} />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
