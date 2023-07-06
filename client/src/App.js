import "./Test.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { NoteManagerPage } from "./pages/NoteManagerPage.js";
import { AuthPage } from "./pages/AuthPage.js";
import { Protected } from "./components/Protected.js";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<AuthPage />} />
                    <Route
                        path="/note-manager"
                        element={
                            // <Protected>
                            <NoteManagerPage />
                            // </Protected>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
