import React from "react";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
    state = {
        toDo: "",
    };

    handleOnChangeInputToDo = (e) => {
        this.setState({ toDo: e.target.value });
    };

    handleSubmitButton = (e) => {
        e.preventDefault();
        if (!this.state.toDo) {
            toast.error(" Missing Field!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        let toDo = {
            id: Math.floor(Math.random() * 100),
            toDo: this.state.toDo,
        };
        this.props.addNewToDo(toDo);
        this.setState({
            toDo: "",
        });

        toast.success('To Do Add Success', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    };

    render() {
        let { toDo } = this.state;
        return (
            <form className="toDoList__wrapper--add">
                <button onClick={(e) => this.handleSubmitButton(e)} />
                <input
                    type="text"
                    id="toDoInput"
                    value={toDo}
                    onChange={(e) => this.handleOnChangeInputToDo(e)}
                />
            </form>
        );
    }
}

export default AddToDo;
