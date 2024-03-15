import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    fullName: "",
    age: "",
  };

  handleChangeFullName = (e) => {
    this.setState({
      fullName: e.target.value,
    });
  };
  handleChangeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
  };

  render() {
    return (
      <>
        <form action="">
          <label htmlFor="fullName">Full Name:</label>
          <br />
          <input
            type="text"
            value={this.state.fullName}
            onChange={(e) => this.handleChangeFullName(e)}
          />
          <br />
          <label htmlFor="age">Age:</label>
          <br />
          <input type="text" onChange={(e) => this.handleChangeAge(e)} />
          <br />
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>

        <ChildComponent name={this.state.fullName} age={this.state.age} />
        <h1>Hello World</h1>
      </>
    );
  }
}

export default MyComponent;
