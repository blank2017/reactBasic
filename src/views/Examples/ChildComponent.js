import React from "react";
import "./Demo.scss";
class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleDeleteJob = (job) => {
    console.log(">>> handleDeleteJob: ", job);
    this.props.deleteAJob(job);
  };
  render() {
    let { arrInformation } = this.props;
    let { showJob } = this.state;

    return (
      <React.Fragment>
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <React.Fragment>
            <div className="listJob">
              {arrInformation.map((item, index) => {
                if (+item.salary >= 500) {
                  return (
                    <div key={item.id} className="listJob__item">
                      <h3 style={{ textAlign: "center" }}>
                        {item.Job}
                        <span> - </span>
                        {item.salary}
                      </h3>
                      <button onClick={() => this.handleDeleteJob(item)}>
                        Delete Job
                      </button>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default ChildComponent;
