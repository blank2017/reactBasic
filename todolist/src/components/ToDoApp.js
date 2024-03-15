import React from "react";
import "../assets/scss/ToDoList.scss";

class ToDoApp extends React.Component {
  state = {
    listToDos: [],
  };

  handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(">>> Check Submit");
  };

  render() {
    return (
      <div className="container">
        <div className="background">
          <img src={require("../assets/images/bg-desktop-dark.jpg")} alt="" />
        </div>
        <div className="toDoList">
          <h1 className="title">TODO</h1>
          <div className="toDoList__wrapper">
            <div className="toDoList__wrapper--add">
              <button onClick={(e) => this.handleSubmitButton(e)} />
              <input type="text" id="toDoInput" />
            </div>
            <div className="toDoList__wrapper--list"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;
