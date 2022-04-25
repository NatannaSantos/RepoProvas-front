import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/Signup";
import Tests from "./pages/Tests/Tests";


function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/tests" element={<Tests />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;