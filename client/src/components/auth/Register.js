import { useState } from "react";
import axios from "axios";

import { AuthForm } from "./AuthForm.js";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:3001/api/users/register",
                {
                    username,
                    password,
                },
                { withCredentials: true }
            );

            if (response.data.error) {
                alert(response.data.error);
            } else {
                alert("Registration Completed! Please Login..");
            }
        } catch (err) {
            console.info("ERROR: ", err);
        }
    };

    return (
        <AuthForm
            id={"register-form"}
            title={"Register"}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    );
};
