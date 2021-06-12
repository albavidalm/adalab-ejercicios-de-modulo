import "../stylesheets/App.css";

const Preview = (props) => {
  return (
    <div className="border--medium">
      <h2>Preview</h2>
      <p>Tu email es: {props.email}</p>
      <p>Tu nombre es: {props.name}</p>
      <p>Tu color es: {props.color}</p>
      {/*<button className="form__btn" onClick={props.handleReset}>
        Reset
  </button>*/}
    </div>
  );
};

export default Preview;
