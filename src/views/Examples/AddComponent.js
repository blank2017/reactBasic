import React from "react";

class AddComponent extends React.Component {
  state = {
    Job: "",
    salary: "",
  };
  handleChangeJob = (e) => {
    this.setState({
      Job: e.target.value,
    });
  };
  handleChangeSalary = (e) => {
    this.setState({
      salary: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(">>> Check Data After Submit: ", this.state);
    if (!this.state.Job || !this.state.salary) {
      alert("Please fill all fields");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random * 100),
      Job: this.state.Job,
      salary: this.state.salary,
    });
    this.setState({
      Job: "",
      salary: "",
    });
  };
  render() {
    console.log(">>> Check Data Input: ", this.state);
    return (
      <React.Fragment>
        <form action="">
          <label htmlFor="Job">Job's Title:</label>
          <br />
          <input
            type="text"
            value={this.state.Job}
            onChange={(e) => this.handleChangeJob(e)}
          />
          <br />
          <label htmlFor="salary">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(e) => this.handleChangeSalary(e)}
          />
          <br />
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddComponent;
