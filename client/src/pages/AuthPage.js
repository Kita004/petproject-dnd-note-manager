import { Login } from "../components/auth/Login.js";
import { Register } from "../components/auth/Register.js";

export const AuthPage = () => {
    return (
        <div className="auth-page flex-container">
            <Login />
            <Register />
        </div>
    );
};
