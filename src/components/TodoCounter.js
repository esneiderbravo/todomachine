import React from "react";
import "../css/TodoCounter.css";
import { TodoContext } from "../contexter";

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    let customClass = "";
    if(completedTodos && totalTodos){
        const completionPercentage = (completedTodos/totalTodos) * 100;
        switch (true) {
            case completionPercentage > 0 && completionPercentage < 50:
                customClass = "TodoCounter-initial";
                break;
            case completionPercentage >= 50 && completionPercentage < 100:
                customClass = "TodoCounter-in-progress";
                break;
            case completionPercentage === 100:
                customClass = "TodoCounter-completed";
                break;
        }

    }
    return (
        <h2 className={`TodoCounter ${customClass}`}>
            You has been completed {completedTodos} of {totalTodos} TODOs
        </h2>
    );
}

export { TodoCounter };
