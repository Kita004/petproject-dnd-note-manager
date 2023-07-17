import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const nav = useNavigate();
    const userName = "User";
    return (
        <nav>
            <div onClick={() => nav("/")} className="logo-container shadowed">
                <img src="/bky.png" alt="logo" className="logo-img" />
            </div>
            <div className="user-profile flex-container shadowed">
                <FaUserCircle className="user-circle" />
                <div className="flex-col-container">
                    Welcome, {userName}!
                    <button className="nav-profile-btn">Logout</button>
                </div>
            </div>
        </nav>
    );
};
