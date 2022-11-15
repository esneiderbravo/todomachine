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
import { HeaderUI } from "./HeaderUI";
import "../css/App.css";
import { WelcomeUI } from "./WelcomeUI";
import { LanguageSelector } from "./LanguageSelector";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        openTodoMachine,
        appLanguage,
    } = React.useContext(TodoContext);
    if (openTodoMachine) {
        return (
            <React.Fragment>
                <LanguageSelector />
                <HeaderUI />
                <TodoCounter />
                <TodoSearch />
                <TodoList>
                    {error && <p className={"CustomErrors"}>{appLanguage.error_msg}</p>}
                    {loading && (
                        <p className={"CustomErrors"}>{appLanguage.loading_msg}</p>
                    )}
                    {!loading && !searchedTodos.length && (
                        <p className={"CustomErrors"}>{appLanguage.create_msg}</p>
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
