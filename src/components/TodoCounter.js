import React from "react";
import "../css/TodoCounter.css";
import {TodoContext} from "../contexter";

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return (
        <h2 className={"TodoCounter"}>
            Has been completed {completedTodos} of {totalTodos} TODOs
        </h2>
    );
}

export { TodoCounter };
