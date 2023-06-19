import { FaUserCircle } from "react-icons/fa";
import { GiMagicGate } from "react-icons/gi";

export const Navbar = () => {
    const userName = "User";
    return (
        <nav>
            <GiMagicGate className="logo" />
            <div className="flex-container">
                <FaUserCircle className="user-circle" />
                <div className="flex-col-container">
                    Welcome, {userName}!<button>Logout</button>
                </div>
            </div>
        </nav>
    );
};
