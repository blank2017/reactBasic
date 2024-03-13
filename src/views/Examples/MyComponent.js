import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "DOAN TRUNG HIEU",
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.handleOnChangeInput(event)}
        />
        <h1>My Name is {this.state.name}</h1>
      </React.Fragment>
    );
  }
}

export default MyComponent;
