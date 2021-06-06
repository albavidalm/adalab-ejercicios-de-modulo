import React from "react";
import "../stylesheets/App.css";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextArea = this.handleTextArea.bind(this);
    this.isHating = false;
  }

  handleTextArea(event) {
    if (event.target.value.includes("cebolla")) {
      this.isHating = true;
      this.forceUpdate();
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  }

  render() {
    const className = this.isHating === true ? "red" : "none";
    return (
      <div className={"page " + className}>
        <textarea
          className="textarea"
          name="textarea"
          id="textarea"
          onChange={this.handleTextArea}
        ></textarea>
      </div>
    );
  }
}

export default OnionHater;
