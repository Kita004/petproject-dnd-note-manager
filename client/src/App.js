import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { NoteManagerPage } from "./pages/NoteManagerPage";
import { AuthPage } from "./pages/AuthPage";
import { useLocalStorage } from "./utils/useLocalStorage.js";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage("", "userID");

    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
