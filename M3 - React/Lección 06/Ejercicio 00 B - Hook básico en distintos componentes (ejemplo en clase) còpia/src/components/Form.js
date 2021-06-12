import "../stylesheets/App.css";
import Input from "./Input";
import Radio from "./Radio";

const Form = (props) => {
  return (
    <form className="border--medium">
      <h2>Formulario</h2>
      <Input
        labelText="Escribe tu email"
        id="email"
        name="email"
        handleInput={props.handleInput}
      ></Input>
      <Input
        labelText="Escribe tu nombre"
        id="name"
        name="name"
        handleInput={props.handleInput}
      ></Input>
      <Radio
        labelText="Verde"
        id="color-1"
        name="color"
        value="green"
        handleInput={props.handleInput}
      ></Radio>
      <Radio
        labelText="Rojo"
        id="color-2"
        name="color"
        value="red"
        handleInput={props.handleInput}
      ></Radio>
      <Radio
        labelText="Azul"
        id="color-3"
        name="color"
        value="blue"
        handleInput={props.handleInput}
      ></Radio>
    </form>
  );
};

export default Form;
