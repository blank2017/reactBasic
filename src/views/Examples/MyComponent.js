import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Doan Trung Hieu",
    old: "26 years old",
  };
  render() {
    return (
      <h1>
        My Name is {this.state.name}, I {this.state.old}
      </h1>
    );
  }
}

export default MyComponent;
