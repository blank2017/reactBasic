import React from "react";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  handleChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
  };

  render() {
    console.log(">>> Call Render: ", this.state);
    return (
      <React.Fragment>
        <form action="">
          <label htmlFor="fname">First Name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(e) => this.handleChangeFirstName(e)}
          />
          <br />
          <label htmlFor="lname">Last Name:</label>
          <br />
          <input type="text" onChange={(e) => this.handleChangeLastName(e)} />
          <br />
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
        <h1>Hello World</h1>
      </React.Fragment>
    );
  }
}

export default MyComponent;
