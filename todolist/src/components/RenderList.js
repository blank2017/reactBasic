import React from "react";

class RenderList extends React.Component {
  render() {
    const { toDo, isEditing, handleEdit, handleCancel, handleSave, onTaskChange, deleteTodo } = this.props;
    return (
      <div className="list-item">
        <input
          type="text"
          value={toDo.task}
          readOnly={!isEditing}
          onChange={
            isEditing ? (e) => onTaskChange(e.target.value) : null
          }
        />
        {isEditing ? (
          <React.Fragment>
            <button onClick={() => handleSave(toDo._id, toDo.task)}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={() =>  deleteTodo(toDo)}>Delete</button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default RenderList;
