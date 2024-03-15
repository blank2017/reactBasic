import React from "react";

class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  handleChangeTitleJob = (e) => {
    this.setState({
      titleJob: e.target.value,
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
  };
  render() {
    console.log(">>> Check Data Input: ", this.state);
    return (
      <React.Fragment>
        <form action="">
          <label htmlFor="titleJob">Job's Title:</label>
          <br />
          <input
            type="text"
            value={this.state.titleJob}
            onChange={(e) => this.handleChangeTitleJob(e)}
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
