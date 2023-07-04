import { createContext, useCallback, useContext, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    // needs implementation on backend-side
    const getMe = useCallback((token) => {
        fetch("/api/user/me", {
            headers: {
                authorization: `bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((user) => {
                setUser(user);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <UserContext.Provider value={user}>
            {!isLoading && children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
