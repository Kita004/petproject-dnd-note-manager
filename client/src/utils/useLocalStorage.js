import { useEffect, useState } from "react";

export function useLocalStorage(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const localStorageValue = localStorage.getItem(key);

        if (localStorageValue !== null) {
            const stringifiedValue = JSON.stringify(localStorageValue);
            return JSON.parse(stringifiedValue);
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
