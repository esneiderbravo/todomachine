import React from "react";
import { TodoContext } from "../contexter";
import "../css/WelcomeUI.css";
import { LanguageSelector } from "./LanguageSelector";
import app from "../App";

function WelcomeUI() {
    const { openTodoMachine, setOpenTodoMachine, appLanguage } =
        React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenTodoMachine(true);
    };
    if (!openTodoMachine) {
        return (
            <React.Fragment>
                <LanguageSelector />
                <div className={"WelcomeUI"}>
                    <img src={process.env.PUBLIC_URL + "/images/icon.png"} alt="" />
                    <h1 className={"WelcomeUI-item WelcomeUI-title"}>
                        {appLanguage.welcome_message}
                    </h1>
                    <button
                        className={"WelcomeUI-item WelcomeUI-button"}
                        onClick={onClickButton}
                    >
                        {appLanguage.welcome_button}
                    </button>
                </div>
            </React.Fragment>
        );
    }
}

export { WelcomeUI };
