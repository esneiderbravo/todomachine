import React from "react";
import { TodoContext } from "../contexter";
import "../css/TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState("");
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal((prevState) => !prevState);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    return (
        <form onSubmit={onAdd}>
      <textarea
          placeholder={"Write the new task"}
          value={newTodoValue}
          onChange={onChange}
      ></textarea>
            <div className={"TodoForm-buttonContainer"}>
                <button
                    type={"button"}
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel"
                >
                    Cancel
                </button>
                <button
                    type={"submit"}
                    onClick={onAdd}
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
