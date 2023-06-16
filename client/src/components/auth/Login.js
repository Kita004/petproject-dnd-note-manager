import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthForm } from "./AuthForm.js";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [_, setCookies] = useCookies(["access_token"]);
    const nav = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/api/users/login",
                {
                    username,
                    password,
                }
            );
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);

            nav("/");
        } catch (err) {
            console.info("Logged in Successfully!");
        }
    };

    return (
        <AuthForm
            id={"login-form"}
            title={"Login"}
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
        />
    );
};
