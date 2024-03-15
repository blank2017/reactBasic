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

  addNewJob = (job) => {
    console.log(">>> check job information: ", job);
    this.setState({
      arrInformation: [...this.state.arrInformation, job],
    });
  };

  deleteAJob = (job) => {
    // console.log(job.id);
    let newArr = this.state.arrInformation.filter((item) => item.id !== job.id);
    this.setState({
      arrInformation: newArr,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("click me");
  };

  render() {
    return (
      <React.Fragment>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrInformation={this.state.arrInformation}
          deleteAJob={this.deleteAJob}
        />
      </React.Fragment>
    );
  }
}

export default MyComponent;
