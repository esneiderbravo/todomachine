import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "../css/AppUI.css";
import { TodoContext } from "../contexter";
import { Modal } from "../modal";
import { TodoForm } from "./TodoForm";
import {HeaderUI} from "./HeaderUI";
import "../css/App.css";
import {WelcomeUI} from "./WelcomeUI";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        openTodoMachine
    } = React.useContext(TodoContext);
    if (openTodoMachine){
        return (
            <React.Fragment>
                <HeaderUI />
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {error && <p className={"CustomErrors"}>The page have an error!</p>}
                    {loading && <p className={"CustomErrors"}>The page is loading!</p>}
                    {!loading && !searchedTodos.length && (
                        <p className={"CustomErrors"}>!Please create a new TODO!</p>
                    )}

                    {searchedTodos.map((todo) => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>

                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}

                <CreateTodoButton />
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <WelcomeUI />
            </React.Fragment>
        );
    }
}
export { AppUI };
