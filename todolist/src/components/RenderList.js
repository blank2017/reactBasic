import React from "react";





class RenderList extends React.Component {

    handleEditToDo = (e) => {
        e.preventDefault()
    }

    handleDeleteToDo = (e) => {
        e.preventDefault()
    }

    


    render() {
        let { listToDos } = this.props;
        return (
            <div className="toDoList__wrapper--list">
                {listToDos.map((item, index) => {
                    return (
                        <div key={item.id} className="list-item">
                            <input type="text" value={item.toDo} readOnly />
                            <button
                                id="editBtn"
                                onClick={ (e) => this.handleEditToDo(e) }
                            >
                                Edit</button>

                            <button
                                id="deleteBtn"
                                onClick={() => this.handleDeleteToDo(item)}
                            >Delete</button>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default RenderList;
