import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrInformation: [
      {
        id: "abc1",
        Job: "Web Developer",
        salary: "500",
      },
      {
        id: "abc2",
        Job: "Tester",
        salary: "400",
      },
      {
        id: "abc2",
        Job: "Dev OPS",
        salary: "800",
      },
    ],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
  };

  render() {
    return (
      <React.Fragment>
        <AddComponent />
        <ChildComponent arrInformation={this.state.arrInformation} />
      </React.Fragment>
    );
  }
}

export default MyComponent;
