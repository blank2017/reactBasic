import React from "react";

class ChildComponent extends React.Component {
  render() {
    console.log(">>> Check props: ", this.props);
    let {name, age} = this.props;
    return (
      <>
        <h1>Child Component: {name} - {age}</h1>
      </>
    );
  }
}

export default ChildComponent;
