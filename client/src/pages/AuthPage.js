import { Login } from "../components/auth/Login.js";
import { Register } from "../components/auth/Register.js";

export const AuthPage = () => {
    return (
        <div className="flex-container auth-page">
            <Login />
            <Register />
        </div>
    );
};
