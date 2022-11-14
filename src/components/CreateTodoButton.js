import React from "react";
import "../css/CreateTodoButton.css";
import {TodoContext} from "../contexter";

function CreateTodoButton() {
    const { setOpenModal } = React.useContext(TodoContext);
    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    };

    return (
        <button className={"CreateTodoButton"} onClick={onClickButton}>
            +
        </button>
    );
}

export { CreateTodoButton };
