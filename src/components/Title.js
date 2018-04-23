import React, { Component } from "react";

class Title extends Component {
  state = {
    title: "Eventit @Helsinki",
    editMode: false
  };

  editMode = () => {
    this.setState({
      editMode: true
    });
  };

  displayMode = () => {
    this.setState({
      editMode: false
    });
  };

  updateTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    if (this.state.editMode) {
      return (
        <input
          type="text"
          onBlur={this.displayMode}
          value={this.state.title}
          onChange={this.updateTitle}
        />
      );
    }
    return <h2 onClick={this.editMode}>{this.state.title}</h2>;
  }
}

export default Title;
