import React from "react";
import "../css/TodoList.css";

function TodoList(props) {
    return (
        <section className={"TodoListSection"}>
            <ul>{props.children}</ul>
        </section>
    );
}

export { TodoList };
