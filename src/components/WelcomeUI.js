import React from "react";
import {TodoContext} from "../contexter";
import "../css/WelcomeUI.css";

function WelcomeUI() {
    const {
        openTodoMachine,
        setOpenTodoMachine
    } = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenTodoMachine(true)
    }
    if (!openTodoMachine){
        return (
            <React.Fragment>
                <div className={"WelcomeUI"}>
                    <img src={process.env.PUBLIC_URL + '/images/icon.png'} alt=""/>
                    <h1 className={"WelcomeUI-item WelcomeUI-title"}>Welcome to ToDo-Machine</h1>
                    <button className={"WelcomeUI-item WelcomeUI-button"} onClick={onClickButton}>Press here!</button>
                </div>
            </React.Fragment>
        );
    }
}

export { WelcomeUI };