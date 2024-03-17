import React from "react";
import "../assets/scss/ToDoList.scss";
import RenderList from "./RenderList";
import AddToDo from "./AddToDo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class ToDoApp extends React.Component {
  state = {
    listToDos: [],
    newTodo: "",
    isEditing: false,
  };

  handleAddToDo = (toDo) => {
    toast.success("Add Success!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    this.setState({
      listToDos: [...this.state.listToDos, toDo],
      newToDo: "",
    });
  };

  handleEdit = () => {
    this.setState({ isEditing: true });
  };
  handleCancel = () => {
    this.setState({ isEditing: false });
  };

  handleSave = (id, updatedTask) => {
    const { listToDos } = this.state;
    const updatedToDos = listToDos.map((todo) => {
      if (todo._id === id) {
        toast.success("Save Success", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ listToDos: updatedToDos, isEditing: false });
  };

  onTaskChange = (id, updatedTask) => {
    const updatedListToDos = this.state.listToDos.map((todo) => {
      if (todo._id === id) {

        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ listToDos: updatedListToDos });
  };

  deleteTodo = (toDo) => {
    let newArr = this.state.listToDos.filter((item) => item.id !== toDo.id);
    this.setState({
      listToDos: newArr,
    });
  };

  render() {
    const { listToDos, isEditing } = this.state;

    return (
      <div className="container">
        <div className="background">
          <img src={require("../assets/images/bg-desktop-dark.jpg")} alt="" />
        </div>
        <div className="toDoList">
          <h1 className="title">TODO</h1>
          <div className="toDoList__wrapper">
            <AddToDo handleAddToDo={this.handleAddToDo} />

            <div className="toDoList__wrapper--list">
              {listToDos.map((item) => (
                <RenderList
                  key={item._id}
                  toDo={item}
                  isEditing={isEditing}
                  handleEdit={this.handleEdit}
                  handleCancel={this.handleCancel}
                  handleSave={this.handleSave}
                  onTaskChange={(updatedTask) =>
                    this.onTaskChange(item._id, updatedTask)
                  }
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    );
  }
}

export default ToDoApp;
