import React from "react";
import "../assets/scss/ToDoList.scss";
import RenderList from "./RenderList";
import AddToDo from "./AddToDo";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ToDoApp extends React.Component {
  state = {
    listToDos: [
      {
        id: "todo1",
        toDo: "Learn ReactJS",
      },
      {
        id: "todo2",
        toDo: "Learn NodeJS",
      },
      {
        id: "todo3",
        toDo: "Learn NextJS",
      },
    ],
  };

  addNewToDo = (toDo) => {
    this.setState({
      listToDos: [...this.state.listToDos, toDo],
    });
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
            <AddToDo addNewToDo={this.addNewToDo} />

            <RenderList listToDos={this.state.listToDos} />
          </div>
        </div>

        <ToastContainer />
      </div>
    );
  }
}

export default ToDoApp;
