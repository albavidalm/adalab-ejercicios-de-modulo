import "../stylesheets/App.css";

const Radio = (props) => {
  const handleInput = () => {
    props.handleInput(props.name, props.value);
  };
  return (
    <div>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        className="form__input-text"
        type="radio"
        id={props.id}
        name={props.name}
        onChange={handleInput}
      />
    </div>
  );
};

export default Radio;
