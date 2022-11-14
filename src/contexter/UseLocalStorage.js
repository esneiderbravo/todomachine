import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    parsedItem = initialValue;
                    localStorage.setItem(itemName, JSON.stringify(parsedItem));
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 2000);
    });

    const saveItem = (newTodos) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newTodos));
            setItem(newTodos);
        } catch (error) {
            setError(true);
        }
    };

    return { item, saveItem, loading, error };
}

export {useLocalStorage}