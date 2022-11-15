import React from "react";
import "../css/LanguageSelector.css";
import { TodoContext } from "../contexter";

function LanguageSelector() {
    const { saveLanguage, language, appLanguage } = React.useContext(TodoContext);
    const onChangeLanguage = (event) => {
        const newLanguage = event.target.value;
        saveLanguage(newLanguage);
    };
    return (
        <div className={"LanguageSelector"}>
            <label htmlFor="">{appLanguage.language}</label>
            <select onChange={onChangeLanguage} defaultValue={language}>
                <option value="en">{appLanguage.language_1}</option>
                <option value="es">{appLanguage.language_2}</option>
            </select>
        </div>
    );
}

export { LanguageSelector };
