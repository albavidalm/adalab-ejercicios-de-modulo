import React from "react";

class App extends React.Component {
  render() {
    const onClickListener = (ev) => {
      alert(
        "Para más información, acuda a recepción.\nMe ha salido un pareado sin haberlo planeado."
      );
    };

    const alertButton = (
      <button onClick={onClickListener}>Pedir más información</button>
    );
    return alertButton;
  }
}

export default App;
