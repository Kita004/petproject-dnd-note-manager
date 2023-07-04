import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider.js";

export const Protected = ({ children }) => {
    const { user } = useUser();
    const nav = useNavigate();

    useEffect(() => {
        if (!user) {
            nav("/"); // nav back to page where the login and register form is located
        }
    }, []);

    return <>{user && children}</>;
};
