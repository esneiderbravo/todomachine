import React from "react";
import "../css/TodoSearch.css";
import { TodoContext } from "../contexter";

function TodoSearch() {
    const { searchValue, setSearchValue, appLanguage } =
        React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder={appLanguage.placeholder_search}
            className={"TodoSearch"}
            onChange={onSearchValueChange}
            value={searchValue}
        />
    );
}

export { TodoSearch };
