import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
    state = {
        newToDo: "",
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.newToDo) {
            toast.error("Input Is Incorrect Or Missing", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        this.props.handleAddToDo({
            _id: Math.floor(Math.random() * 100),
            task: this.state.newToDo,
        });
        this.setState({
            newToDo: "",
        });
    };

    handleOnChange = (e) => {
        this.setState({
            newToDo: e.target.value,
        });
    };
    render() {
        console.log(">>> value: ", this.state.newToDo);

        return (
            <form className="toDoList__wrapper--add">
                <button onClick={(e) => this.handleSubmit(e)} />
                <input
                    type="text"
                    id="toDoInput"
                    value={this.state.newToDo}
                    onChange={(e) => this.handleOnChange(e)}
                />
            </form>
        );
    }
}

export default AddToDo;
