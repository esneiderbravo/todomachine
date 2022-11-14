import React from "react";
import { AppUI } from "./components/AppUI";
import { TodoProvider } from "./contexter";

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
